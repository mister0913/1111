import { useCallback, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from 'state'

import {
  MarketDataMap,
  MarketData,
  ConnectionStatus,
  MarketDepthData,
  MarketsInfo,
  MarketNotionalCap,
  FundingRateMap,
  FundingRateData,
} from './types'
import { updateWebSocketStatus, updatePrices, updateDepth, updateNotionalCap, updateFundingRates } from './actions'
import { DEFAULT_HEDGER, getHedgerInfo } from 'constants/hedgers'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'
import useDebounce from 'lib/hooks/useDebounce'

export function useMarketsStatus() {
  const marketsStatus = useAppSelector((state) => state.hedger.marketsStatus)
  return marketsStatus
}

export function useSetWebSocketStatus() {
  const dispatch = useAppDispatch()
  return useCallback(
    (status: ConnectionStatus) => {
      dispatch(updateWebSocketStatus({ status }))
    },
    [dispatch]
  )
}

export function useHedgerInfo() {
  const { chainId } = useActiveWeb3React()
  const isSupportedChainId = useSupportedChainId()
  const debouncedChainId = useDebounce(isSupportedChainId, 3000)
  return useMemo(() => (debouncedChainId ? getHedgerInfo(chainId) : DEFAULT_HEDGER), [chainId, debouncedChainId])
}

export function useFundingRateData(name: string | undefined): FundingRateData | null {
  const fundingRates = useAppSelector((state) => state.hedger.fundingRates)
  return name ? fundingRates[name] : null
}

export function useWebSocketUrl() {
  const hedger = useHedgerInfo()
  return useMemo(() => (hedger ? hedger.webSocketUrl : null), [hedger])
}

export function useWebSocketStatus() {
  const webSocketStatus = useAppSelector((state) => state.hedger.webSocketStatus)
  return webSocketStatus
}

export function useMarkets() {
  const markets = useAppSelector((state) => state.hedger.markets)
  return markets
}

export function useErrorMessages() {
  const errorMessages = useAppSelector((state) => state.hedger.errorMessages)
  return errorMessages
}

export function useMarketNotionalCap() {
  const marketNotionalCap = useAppSelector((state) => state.hedger.marketNotionalCap)
  const marketNotionalCapStatus = useAppSelector((state) => state.hedger.marketNotionalCapStatus)
  return { marketNotionalCap, marketNotionalCapStatus }
}

export function useMarketOpenInterest() {
  const openInterest = useAppSelector((state) => state.hedger.openInterest)
  return openInterest
}

export function usePrices() {
  const prices = useAppSelector((state) => state.hedger.prices)
  return prices
}

export function useMarketPriceRange() {
  const priceRange = useAppSelector((state) => state.hedger.priceRange)
  return priceRange
}

export function useMarketData(name: string | undefined): MarketData | null {
  const prices = useAppSelector((state) => state.hedger.prices)
  return name ? prices[name] : null
}

export function useMarketDepth(name: string | undefined): MarketDepthData | null {
  const depths = useAppSelector((state) => state.hedger.depths)
  return name ? depths[name] : null
}

export function useMarketsInfo(): MarketsInfo {
  const marketsInfo = useAppSelector((state) => state.hedger.marketsInfo)
  return marketsInfo
}

export function useSetPrices() {
  const dispatch = useAppDispatch()
  return useCallback(
    (prices: MarketDataMap) => {
      dispatch(updatePrices({ prices }))
    },
    [dispatch]
  )
}

export function useSetFundingRates() {
  const dispatch = useAppDispatch()
  return useCallback(
    (fundingRates: FundingRateMap) => {
      dispatch(updateFundingRates({ fundingRates }))
    },
    [dispatch]
  )
}

export function useSetDepth() {
  const dispatch = useAppDispatch()
  return useCallback(
    (depth: MarketDepthData, name: string) => {
      dispatch(updateDepth({ name, depth }))
    },
    [dispatch]
  )
}

export function useSetNotionalCap() {
  const dispatch = useAppDispatch()
  return useCallback(
    (notionalCap: MarketNotionalCap) => {
      dispatch(updateNotionalCap({ notionalCap }))
    },
    [dispatch]
  )
}
