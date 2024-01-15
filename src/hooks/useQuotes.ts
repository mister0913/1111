import { useMemo } from 'react'
import { useTheme } from 'styled-components'

import { useSingleContractMultipleMethods } from 'lib/hooks/multicall'
import { OrderType, PositionType } from 'types/trade'
import { Quote, QuoteStatus } from 'types/quote'
import { BN_ZERO, fromWei, toBN } from 'utils/numbers'

import { useAccountPartyAStat, useActiveAccountAddress } from 'state/user/hooks'
import { NotificationDetails, NotificationType } from 'state/notifications/types'
import { usePartialFillNotifications } from 'state/notifications/hooks'
import { Market } from 'types/market'

import { useDiamondContract } from 'hooks/useContract'
import { useMarket } from 'hooks/useMarkets'
import useDebounce from 'lib/hooks/useDebounce'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'
import useBidAskPrice from './useBidAskPrice'

export function getPositionTypeByIndex(x: number): PositionType {
  return PositionType[Object.keys(PositionType).find((key, index) => index === x) as keyof typeof PositionType]
}

export function getQuoteStateByIndex(x: number): QuoteStatus {
  return QuoteStatus[Object.keys(QuoteStatus).find((key, index) => index === x) as keyof typeof QuoteStatus]
}

export function sortQuotesByModifyTimestamp(a: Quote, b: Quote) {
  return Number(b.statusModifyTimestamp) - Number(a.statusModifyTimestamp)
}

export function useGetPositions(): {
  positions: Quote[] | undefined
  loading: boolean
} {
  const isSupportedChainId = useSupportedChainId()
  const activeAccountAddress = useActiveAccountAddress()

  const { positionsCount } = useAccountPartyAStat(activeAccountAddress)

  const DiamondContract = useDiamondContract()

  const [start, size] = [0, positionsCount + 1]
  const calls = useMemo(
    () =>
      isSupportedChainId
        ? activeAccountAddress
          ? [{ methodName: 'getPartyAOpenPositions', callInputs: [activeAccountAddress, start, size] }]
          : []
        : [],
    [isSupportedChainId, activeAccountAddress, start, size]
  )

  //we need ~70K for each quote id
  const estimateGasRequirement = { gasRequired: size * 100_000 }
  const [quoteResults] = useSingleContractMultipleMethods(DiamondContract, calls, estimateGasRequirement)

  const loading = useDebounce(quoteResults ? quoteResults.loading : true, 1000)

  const quotesValue = useMemo(() => (quoteResults?.result ? quoteResults.result[0] : []), [quoteResults])

  const quotes: Quote[] = useMemo(() => {
    return quotesValue
      .filter((quote: any) => quote[0].toString() !== '0') //remove garbage outputs
      .map((quote: any) => toQuote(quote))
      .sort(sortQuotesByModifyTimestamp)
  }, [quotesValue])

  return useMemo(
    () => ({
      positions: quoteResults?.result ? quotes : undefined,
      loading,
    }),
    [loading, quotes, quoteResults]
  )
}

export function useGetQuoteByIds(ids: number[]): {
  quotes: Quote[]
  loading: boolean
} {
  const DiamondContract = useDiamondContract()
  const isSupportedChainId = useSupportedChainId()

  const size = ids.length
  const calls = useMemo(
    () => (isSupportedChainId ? ids.map((id) => ({ methodName: 'getQuote', callInputs: [id] })) : []),
    [ids, isSupportedChainId]
  )

  //we need ~60K for each quote id
  const estimateGasRequirement = { gasRequired: size * 100_000 }
  const quoteResults = useSingleContractMultipleMethods(DiamondContract, calls, estimateGasRequirement)
  const loading = useDebounce(quoteResults ? quoteResults[0]?.loading : true, 1000)

  const quotesValue = useMemo(
    () => quoteResults.map((qs) => (qs.result && qs.result[0] ? qs.result[0] : null)),
    [quoteResults]
  )

  const quotes: Quote[] = useMemo(() => {
    return quotesValue
      .filter((quote: any) => quote)
      .filter((quote: any) => quote[0].toString() !== '0') //remove garbage outputs
      .map((quote: any) => toQuote(quote))
      .sort(sortQuotesByModifyTimestamp)
  }, [quotesValue])

  return useMemo(
    () => ({
      quotes,
      loading,
    }),
    [loading, quotes]
  )
}

export function useGetPendingIds(): {
  pendingIds: number[]
  loading: boolean
} {
  const isSupportedChainId = useSupportedChainId()
  const activeAccountAddress = useActiveAccountAddress()

  const DiamondContract = useDiamondContract()

  const calls = useMemo(
    () =>
      isSupportedChainId
        ? activeAccountAddress
          ? [{ methodName: 'getPartyAPendingQuotes', callInputs: [activeAccountAddress] }]
          : []
        : [],
    [activeAccountAddress, isSupportedChainId]
  )

  const [quoteResults] = useSingleContractMultipleMethods(DiamondContract, calls)

  const loading = useDebounce(quoteResults ? quoteResults.loading : true, 1000)

  const quoteIdsValue = useMemo(() => (quoteResults?.result ? quoteResults.result[0] : []), [quoteResults])

  const quoteIds: number[] = useMemo(() => {
    return quoteIdsValue
      .map((quoteId: any) => toBN(quoteId.toString()).toNumber())
      .sort((a: number, b: number) => b - a)
  }, [quoteIdsValue])

  return useMemo(
    () => ({
      pendingIds: quoteIds,
      loading,
    }),
    [loading, quoteIds]
  )
}

export function useQuoteUpnlAndPnl(
  quote: Quote,
  currentPrice: string | number,
  quantityToClose?: string | number,
  closedPrice?: string | number,
  precision?: number
): string[] {
  // return upnl and pnl [upnl , pnl]
  const {
    openedPrice,
    positionType,
    avgClosedPrice,
    closedAmount,
    quoteStatus,
    quantity,
    liquidateAmount,
    liquidatePrice,
  } = quote

  const pnl =
    toBN(closedPrice ?? avgClosedPrice)
      .minus(openedPrice)
      .times(quantityToClose ?? closedAmount)
      .times(positionType === PositionType.SHORT ? -1 : 1)
      .toString() || BN_ZERO.toString()

  const upnl =
    toBN(quantity)
      .minus(closedAmount)
      .times(toBN(currentPrice).minus(openedPrice))
      .times(positionType === PositionType.SHORT ? -1 : 1)
      .toString() || BN_ZERO.toString()

  if (
    quoteStatus === QuoteStatus.CLOSE_PENDING ||
    quoteStatus === QuoteStatus.CANCEL_CLOSE_PENDING ||
    quoteStatus === QuoteStatus.OPENED
  ) {
    return [upnl, pnl]
  } else if (quoteStatus === QuoteStatus.CLOSED) {
    return [BN_ZERO.toString(), pnl]
  } else if (quoteStatus === QuoteStatus.LIQUIDATED) {
    if (quantityToClose) return [BN_ZERO.toString(), pnl]

    const averagePrice = toBN(liquidatePrice)
      .times(liquidateAmount)
      .plus(toBN(avgClosedPrice).times(closedAmount))
      .div(quantity)
    return [
      BN_ZERO.toString(),
      toBN(averagePrice)
        .minus(openedPrice)
        .times(quantity)
        .times(positionType === PositionType.SHORT ? -1 : 1)
        .toString() || BN_ZERO.toString(),
    ]
  } else {
    return [BN_ZERO.toString(), BN_ZERO.toString()]
  }
}

export function useQuoteSize(quote: Quote): string {
  const { quoteStatus, quantity, closedAmount, marketId } = quote
  const { quantityPrecision } = useMarket(marketId) || {}
  return useMemo(() => {
    if (
      quoteStatus === QuoteStatus.CLOSED ||
      quoteStatus === QuoteStatus.LIQUIDATED ||
      quoteStatus === QuoteStatus.CANCELED
    )
      return quantity
    return toBN(quantity)
      .minus(closedAmount)
      .toFixed(quantityPrecision || 6)
  }, [closedAmount, quantity, quantityPrecision, quoteStatus])
}

export function useQuoteLeverage(quote: Quote): string {
  const { quantity, requestedOpenPrice, quoteStatus, openedPrice, initialCVA, initialLF, initialPartyAMM } = quote

  const quoteSize = useQuoteSize(quote)
  const lockedMargin = useLockedMargin(quote)
  const initialLockedMargin = toBN(initialCVA).plus(initialPartyAMM).plus(initialLF).toString()

  switch (quoteStatus) {
    case QuoteStatus.OPENED:
    case QuoteStatus.CLOSE_PENDING:
    case QuoteStatus.CANCEL_CLOSE_PENDING:
      return toBN(quoteSize).times(openedPrice).div(lockedMargin).toFixed(0)

    case QuoteStatus.PENDING:
    case QuoteStatus.LOCKED:
    case QuoteStatus.CANCEL_PENDING:
    case QuoteStatus.CANCELED:
    case QuoteStatus.EXPIRED:
      return toBN(quantity).times(requestedOpenPrice).div(initialLockedMargin).toFixed(0)

    case QuoteStatus.CLOSED:
    case QuoteStatus.LIQUIDATED:
      return toBN(quantity).times(requestedOpenPrice).div(initialLockedMargin).toFixed(0)
  }
}

export function useQuoteFillAmount(quote: Quote): string | null {
  const { quoteStatus, orderType, id, statusModifyTimestamp } = quote
  const partiallyFillNotifications: NotificationDetails[] = usePartialFillNotifications()
  let foundNotification: NotificationDetails | undefined | null
  try {
    foundNotification = partiallyFillNotifications.find(
      (notification) =>
        notification.quoteId === id.toString() &&
        notification.notificationType === NotificationType.PARTIAL_FILL &&
        toBN(statusModifyTimestamp).lt(notification.modifyTime)
    )
  } catch (error) {
    foundNotification = null
  }

  return useMemo(() => {
    if (quoteStatus === QuoteStatus.CLOSE_PENDING || quoteStatus === QuoteStatus.CANCEL_CLOSE_PENDING) {
      return orderType === OrderType.LIMIT && foundNotification && foundNotification.filledAmountClose
        ? toBN(foundNotification.filledAmountClose).toString()
        : null
    } else if (quoteStatus === QuoteStatus.LOCKED || quoteStatus === QuoteStatus.PENDING) {
      return orderType === OrderType.LIMIT && foundNotification && foundNotification.filledAmountOpen
        ? toBN(foundNotification.filledAmountOpen).toString()
        : null
    } else {
      return null
    }
  }, [foundNotification, orderType, quoteStatus])
}

export function useClosingLastMarketPrice(quote: Quote | null, market?: Market): string {
  // market price for closing position

  const { bid, ask } = useBidAskPrice(market)

  if (quote) {
    if (quote.positionType === PositionType.LONG) {
      return bid
    } else {
      return ask
    }
  }

  return '0'
}

export function useOpeningLastMarketPrice(quote: Quote | null, market?: Market): string {
  // market price for opening position
  const { bid, ask } = useBidAskPrice(market)

  if (quote)
    if (quote.positionType === PositionType.LONG) {
      return ask
    } else {
      return bid
    }

  return '0'
}

export function useCheckQuoteIsExpired(quote: Quote): {
  expired: boolean
  expiredColor: string | undefined
} {
  const theme = useTheme()
  const { quoteStatus, deadline } = quote
  const currentTimestamp = Math.floor(Date.now() / 1000)

  return useMemo(() => {
    const checkDeadline = currentTimestamp > Number(deadline)
    if (quoteStatus === QuoteStatus.PENDING && checkDeadline)
      return { expired: checkDeadline, expiredColor: theme.bgWarning }
    if (quoteStatus === QuoteStatus.CLOSE_PENDING) return { expired: checkDeadline, expiredColor: undefined }
    return { expired: false, expiredColor: undefined }
  }, [currentTimestamp, deadline, quoteStatus, theme.bgWarning])
}

function toQuote(quote: any) {
  return {
    id: Number(quote[0].toString()),
    partyBsWhiteList: quote[1],
    marketId: Number(quote[2].toString()),
    positionType: getPositionTypeByIndex(Number(quote[3].toString())),
    orderType: Number(quote[4].toString()) === 1 ? OrderType.MARKET : OrderType.LIMIT,

    // Price of quote which PartyB opened in 18 decimals
    openedPrice: fromWei(quote[5].toString()),

    // Price of quote which PartyA requested in 18 decimals
    initialOpenedPrice: fromWei(quote[6].toString()),
    requestedOpenPrice: fromWei(quote[7].toString()),
    marketPrice: fromWei(quote[8].toString()),

    // Quantity of quote which PartyA requested in 18 decimals
    quantity: fromWei(quote[9].toString()),
    closedAmount: fromWei(quote[10].toString()),

    initialCVA: fromWei(quote[11][0].toString()),
    initialLF: fromWei(quote[11][1].toString()),
    initialPartyAMM: fromWei(quote[11][2].toString()),
    initialPartyBMM: fromWei(quote[11][3].toString()),

    CVA: fromWei(quote[12][0].toString()),
    LF: fromWei(quote[12][1].toString()),
    partyAMM: fromWei(quote[12][2].toString()),
    partyBMM: fromWei(quote[12][3].toString()),

    maxFundingRate: fromWei(quote[13].toString()),
    partyA: quote[14].toString(),
    partyB: quote[15].toString(),
    quoteStatus: getQuoteStateByIndex(Number(quote[16].toString())),
    avgClosedPrice: fromWei(quote[17].toString()),
    requestedCloseLimitPrice: fromWei(quote[18].toString()),
    quantityToClose: fromWei(quote[19].toString()),

    // handle partially open position
    parentId: quote[20].toString(),
    createTimestamp: Number(quote[21].toString()),
    statusModifyTimestamp: Number(quote[22].toString()),
    lastFundingPaymentTimestamp: Number(quote[23].toString()),
    deadline: Number(quote[24].toString()),
    tradingFee: Number(quote[25].toString()),
  } as Quote
}

export function useLockedMargin(quote: Quote): string {
  return toBN(quote.CVA).plus(quote.partyAMM).plus(quote.LF).toString()
}
