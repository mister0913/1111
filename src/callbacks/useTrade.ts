import { useCallback, useMemo } from 'react'
import toast from 'react-hot-toast'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { COLLATERAL_ADDRESS, PARTY_B_WHITELIST } from 'constants/addresses'
import {
  DEFAULT_PRECISION,
  LIMIT_ORDER_DEADLINE,
  MARKET_ORDER_DEADLINE,
  MARKET_PRICE_COEFFICIENT,
} from 'constants/misc'
import { FALLBACK_CHAIN_ID } from 'constants/chains'
import { makeHttpRequest } from 'utils/http'
import { OrderType, TradeState, PositionType } from 'types/trade'
import { useCurrency } from 'lib/hooks/useTokens'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'
import { useHedgerInfo, useSetNotionalCap } from 'state/hedger/hooks'
import { useActiveAccountAddress, useExpertMode, useSlippageTolerance } from 'state/user/hooks'
import { useTransactionAdder } from 'state/transactions/hooks'
import { getAppNameHeader } from 'state/hedger/thunks'
import { TradeTransactionInfo, TransactionType } from 'state/transactions/types'
import { useActiveMarketId, useLockedPercentages, useOrderType } from 'state/trade/hooks'

import { removeTrailingZeros, toBN, toWei, formatPrice, BN_ZERO } from 'utils/numbers'
import { createTransactionCallback, TransactionCallbackState } from 'utils/web3'

import { useMarket } from 'hooks/useMarkets'
import { useDiamondContract, useMultiAccountContract } from 'hooks/useContract'
import { useMultiAccountable } from 'hooks/useMultiAccountable'
import useTradePage, {
  useLockedCVA,
  useLockedLF,
  useMaxFundingRate,
  useNotionalValue,
  usePartyALockedMM,
  usePartyBLockedMM,
} from 'hooks/useTradePage'
import { SendOrCloseQuoteClient } from 'lib/muon'

export function useTradeCallback(positionType: PositionType): {
  state: TransactionCallbackState
  callback: null | (() => Promise<string>)
  error: string | null
} {
  const { account, chainId, provider } = useActiveWeb3React()
  const addTransaction = useTransactionAdder()
  const userExpertMode = useExpertMode()
  const activeAccountAddress = useActiveAccountAddress()
  const isSupportedChainId = useSupportedChainId()

  const DiamondContract = useDiamondContract()
  const MultiAccountContract = useMultiAccountContract()
  const methodName = 'sendQuote'

  const collateralCurrency = useCurrency(chainId ? COLLATERAL_ADDRESS[chainId] : undefined)
  const orderType = useOrderType()

  const { price, formattedAmounts } = useTradePage()

  const marketId = useActiveMarketId()
  const market = useMarket(marketId)
  const slippage = useSlippageTolerance()
  const autoSlippage = market ? market.autoSlippage : MARKET_PRICE_COEFFICIENT
  const pricePrecision = useMemo(() => market?.pricePrecision ?? DEFAULT_PRECISION, [market])
  const openPriceBN = useMemo(() => (price ? toBN(price) : BN_ZERO), [price])

  const openPriceFinal = useMemo(() => {
    if (orderType === OrderType.LIMIT) return openPriceBN

    if (slippage === 'auto') {
      return positionType === PositionType.SHORT ? openPriceBN.div(autoSlippage) : openPriceBN.times(autoSlippage)
    }

    const spSigned = positionType === PositionType.SHORT ? slippage : slippage * -1
    const slippageFactored = toBN(100 - spSigned).div(100)
    return toBN(openPriceBN).times(slippageFactored)
  }, [openPriceBN, slippage, positionType, orderType, autoSlippage])

  const openPriceWied = useMemo(
    () => toWei(formatPrice(openPriceFinal, pricePrecision)),
    [openPriceFinal, pricePrecision]
  )

  const quantityAsset = useMemo(
    () => (toBN(formattedAmounts[1]).isNaN() ? toBN(0) : toBN(formattedAmounts[1])),
    [formattedAmounts]
  )

  const notionalValue = useNotionalValue(quantityAsset.toString(), formatPrice(openPriceFinal, pricePrecision))
  const lockedCVA = useLockedCVA(notionalValue)
  const lockedPartyAMM = usePartyALockedMM(notionalValue)
  const lockedPartyBMM = usePartyBLockedMM(notionalValue)
  const lockedLF = useLockedLF(notionalValue)
  const { cva, partyAmm, partyBmm, lf } = useLockedPercentages()
  const updateNotionalCap = useSetNotionalCap()

  const maxFundingRate = useMaxFundingRate()

  const { baseUrl } = useHedgerInfo() || {}
  const partyBWhiteList = useMemo(() => PARTY_B_WHITELIST[chainId ?? FALLBACK_CHAIN_ID], [chainId])

  const getSignature = useCallback(async () => {
    if (!SendOrCloseQuoteClient) {
      throw new Error('Missing Muon Client')
    }

    if (!activeAccountAddress || !chainId || !DiamondContract || !marketId) {
      throw new Error('Missing Muon params')
    }

    const { success, signature, error } = await SendOrCloseQuoteClient.getMuonSig(
      activeAccountAddress,
      chainId,
      DiamondContract.address,
      marketId
    )

    if (success === false || !signature) {
      throw new Error(`Unable to fetch Muon signature: ${error}`)
    }
    return { signature }
  }, [DiamondContract, activeAccountAddress, chainId, marketId])

  const getNotionalCap = useCallback(async () => {
    if (!market || !MultiAccountContract) {
      throw new Error('missing params')
    }
    const { href: notionalCapUrl } = new URL(`notional_cap/${market.id}/${MultiAccountContract.address}`, baseUrl)
    const { total_cap, used }: { total_cap: number; used: number } = await makeHttpRequest(
      notionalCapUrl,
      getAppNameHeader()
    )
    const freeCap = toBN(total_cap).minus(used)
    const notionalValue = openPriceBN.times(quantityAsset)
    updateNotionalCap({ name: market.name, used, totalCap: total_cap })

    if (freeCap.minus(notionalValue).lte(0)) throw new Error('Cap is reached.')
  }, [MultiAccountContract, baseUrl, market, openPriceBN, quantityAsset, updateNotionalCap])

  const preConstructCall = useCallback(async () => {
    try {
      if (
        !account ||
        !DiamondContract ||
        !marketId ||
        !collateralCurrency ||
        !partyBWhiteList ||
        !isSupportedChainId ||
        !cva ||
        !partyAmm ||
        !partyBmm ||
        !lf
      ) {
        throw new Error('Missing dependencies.')
      }

      await getNotionalCap()
      const { signature } = await getSignature()

      const deadline =
        orderType === OrderType.MARKET
          ? Math.floor(Date.now() / 1000) + MARKET_ORDER_DEADLINE
          : Math.floor(Date.now() / 1000) + LIMIT_ORDER_DEADLINE

      const args = [
        partyBWhiteList,
        marketId,
        positionType === PositionType.SHORT ? '1' : '0',
        orderType === OrderType.MARKET ? '1' : '0',
        openPriceWied,
        toWei(quantityAsset),
        toWei(lockedCVA),
        toWei(lockedLF),
        toWei(lockedPartyAMM), // partyAmm
        toWei(lockedPartyBMM), // partyBmm
        toWei(maxFundingRate),
        deadline,
        signature,
      ]

      console.log('Open Position ', args)

      return {
        address: DiamondContract.address,
        calldata: DiamondContract.interface.encodeFunctionData(methodName, args) ?? '',
        value: 0,
      }
    } catch (error: any) {
      toast.error(error.message)

      return {
        error,
      }
    }
  }, [
    account,
    DiamondContract,
    marketId,
    collateralCurrency,
    partyBWhiteList,
    isSupportedChainId,
    cva,
    partyAmm,
    partyBmm,
    lf,
    getNotionalCap,
    getSignature,
    orderType,
    positionType,
    openPriceWied,
    quantityAsset,
    lockedCVA,
    lockedLF,
    lockedPartyAMM,
    lockedPartyBMM,
    maxFundingRate,
  ])

  const constructCall = useMultiAccountable(preConstructCall)

  return useMemo(() => {
    if (
      !account ||
      !chainId ||
      !provider ||
      !DiamondContract ||
      !market ||
      !orderType ||
      !quantityAsset ||
      !activeAccountAddress
    ) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: 'Missing dependencies',
      }
    }

    if (openPriceBN.lte(0)) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: 'Price is out of range',
      }
    }
    if (quantityAsset.lte(0)) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: 'Amount is too low',
      }
    }

    const txInfo = {
      type: TransactionType.TRADE,
      name: market.name,
      amount: removeTrailingZeros(quantityAsset),
      price: formatPrice(price, pricePrecision, true),
      state: TradeState.OPEN,
      slippage: orderType === OrderType.LIMIT ? null : slippage,
      hedger: '',
      positionType,
    } as TradeTransactionInfo

    return {
      state: TransactionCallbackState.VALID,
      error: null,
      callback: () =>
        createTransactionCallback(
          methodName,
          constructCall,
          addTransaction,
          txInfo,
          account,
          provider,
          undefined,
          userExpertMode
        ),
    }
  }, [
    positionType,
    orderType,
    market,
    openPriceBN,
    quantityAsset,
    slippage,
    price,
    pricePrecision,
    methodName,
    account,
    chainId,
    provider,
    DiamondContract,
    activeAccountAddress,
    constructCall,
    addTransaction,
    userExpertMode,
  ])
}
