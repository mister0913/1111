import { useCallback, useMemo } from 'react'

import {
  DEFAULT_PRECISION,
  LIMIT_ORDER_DEADLINE,
  MARKET_ORDER_DEADLINE,
  MARKET_PRICE_COEFFICIENT,
} from 'constants/misc'
import { createTransactionCallback, TransactionCallbackState } from 'utils/web3'
import { BN_ZERO, formatPrice, fromWei, removeTrailingZeros, RoundMode, toBN, toWei, toWeiBN } from 'utils/numbers'
import { Quote } from 'types/quote'
import { OrderType, PositionType, TradeState } from 'types/trade'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'

import { useExpertMode, useSlippageTolerance } from 'state/user/hooks'
import { useMarketData } from 'state/hedger/hooks'
import { useTransactionAdder } from 'state/transactions/hooks'
import { TradeTransactionInfo, TransactionType } from 'state/transactions/types'

import { useMarket } from 'hooks/useMarkets'
import { useDiamondContract } from 'hooks/useContract'
import { useMultiAccountable } from 'hooks/useMultiAccountable'

export function useClosePosition(
  quote: Quote | null,
  orderType: OrderType,
  typedPrice: string,
  quantityToClose: string
): {
  state: TransactionCallbackState
  callback: null | (() => Promise<string>)
  error: string | null
} {
  const { account, chainId, provider } = useActiveWeb3React()
  const addTransaction = useTransactionAdder()
  const userExpertMode = useExpertMode()
  const isSupportedChainId = useSupportedChainId()

  const DiamondContract = useDiamondContract()
  const methodName = 'requestToClosePosition'

  const market = useMarket(quote?.marketId)
  const marketData = useMarketData(market?.name)
  const positionType = quote?.positionType
  const pricePrecision = useMemo(() => market?.pricePrecision ?? DEFAULT_PRECISION, [market])
  const slippage = useSlippageTolerance()
  const autoSlippage = market ? market.autoSlippage : MARKET_PRICE_COEFFICIENT

  const markPriceBN = useMemo(() => {
    if (!marketData || !marketData.markPrice) return BN_ZERO
    return toWeiBN(toBN(marketData.markPrice).toFixed(pricePrecision, RoundMode.ROUND_DOWN))
  }, [marketData, pricePrecision])

  const typedPriceBN = useMemo(
    () => toWeiBN(toBN(typedPrice).toFixed(pricePrecision, RoundMode.ROUND_DOWN)),
    [typedPrice, pricePrecision]
  )

  const closePriceBN = useMemo(
    () => (orderType === OrderType.MARKET ? markPriceBN : typedPriceBN),
    [orderType, markPriceBN, typedPriceBN]
  )

  const closePriceFinal = useMemo(() => {
    if (orderType === OrderType.LIMIT) return closePriceBN

    if (slippage === 'auto') {
      return positionType === PositionType.SHORT ? closePriceBN.times(autoSlippage) : closePriceBN.div(autoSlippage)
    }

    const spSigned = positionType === PositionType.SHORT ? slippage * -1 : slippage
    const slippageFactored = toBN(100 - spSigned).div(100)
    return toBN(closePriceBN).times(slippageFactored)
  }, [closePriceBN, slippage, positionType, orderType, autoSlippage])

  //TODO: remove this way
  const closePriceWied = useMemo(
    () => toWei(formatPrice(fromWei(closePriceFinal), pricePrecision)),
    [closePriceFinal, pricePrecision]
  )

  const preConstructCall = useCallback(async () => {
    try {
      if (!account || !DiamondContract || !quote || !quantityToClose || !isSupportedChainId) {
        throw new Error('Missing dependencies for constructCall.')
      }

      const deadline =
        orderType === OrderType.MARKET
          ? Math.floor(Date.now() / 1000) + MARKET_ORDER_DEADLINE
          : Math.floor(Date.now() / 1000) + LIMIT_ORDER_DEADLINE

      const args = [
        quote.id,
        closePriceWied,
        toWei(quantityToClose),
        orderType === OrderType.MARKET ? '1' : '0',
        deadline,
      ]
      console.log({ args })

      return {
        address: DiamondContract.address,
        calldata: DiamondContract.interface.encodeFunctionData(methodName, args) ?? '',
        value: 0,
      }
    } catch (error) {
      return {
        error,
      }
    }
  }, [account, DiamondContract, quote, quantityToClose, isSupportedChainId, orderType, closePriceWied])

  const constructCall = useMultiAccountable(preConstructCall)

  return useMemo(() => {
    if (!account || !chainId || !provider || !DiamondContract || !market || !quote || !orderType) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: 'Missing dependencies.',
      }
    }

    if (closePriceBN.lte(0)) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: 'Price is out of range',
      }
    }
    if (!quantityToClose || toBN(quantityToClose).eq(0)) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: 'Amount is too low',
      }
    }

    const txInfo = {
      type: TransactionType.TRADE,
      name: market.name,
      amount: removeTrailingZeros(quantityToClose),
      price: closePriceBN.div(1e18).toFormat(),
      state: TradeState.CLOSE,
      slippage: orderType === OrderType.LIMIT ? null : slippage,
      hedger: '',
      positionType: quote.positionType,
      id: quote.id.toString(),
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
    quote,
    closePriceBN,
    orderType,
    quantityToClose,
    market,
    slippage,
    methodName,
    DiamondContract,
    constructCall,
    addTransaction,
    account,
    chainId,
    provider,
    userExpertMode,
  ])
}
