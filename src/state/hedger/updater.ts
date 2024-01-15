import { useCallback, useEffect, useMemo } from 'react'
import isEmpty from 'lodash/isEmpty'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { JsonValue } from 'react-use-websocket/dist/lib/types'

import { useAppDispatch, AppThunkDispatch } from 'state'
import useIsWindowVisible from 'lib/hooks/useIsWindowVisible'
import { autoRefresh, retry } from 'utils/retry'

import { ApiState } from 'types/api'
import { ConnectionStatus, MarketDataMap as PricesType, MarketData, PriceResponse } from './types'
import {
  useWebSocketUrl,
  useSetWebSocketStatus,
  useSetPrices,
  useHedgerInfo,
  useMarketNotionalCap,
  useSetDepth,
  useMarkets,
  useSetFundingRates,
} from 'state/hedger/hooks'
import { getMarkets, getMarketsDepth, getNotionalCap, getPriceRange } from './thunks'
import { useActiveMarket } from 'state/trade/hooks'
import { Hedger } from 'types/hedger'
import { Market } from 'types/market'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { MULTI_ACCOUNT_ADDRESS } from 'constants/addresses'
import { FALLBACK_CHAIN_ID } from 'constants/chains'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'

export function HedgerUpdater(): null {
  const thunkDispatch: AppThunkDispatch = useAppDispatch()
  const hedger = useHedgerInfo()
  const { baseUrl, apiUrl, fetchData } = hedger || {}
  const activeMarket = useActiveMarket()
  const markets = useMarkets()

  usePriceWebSocket()
  useFundingRateWebSocket()
  useFetchMarkets(hedger, thunkDispatch)
  useFetchNotionalCap(hedger, thunkDispatch, activeMarket)

  //auto update per each 1 seconds
  useEffect(() => {
    return autoRefresh(() => thunkDispatch(getMarketsDepth(apiUrl)), 1)
  }, [thunkDispatch, apiUrl, markets])

  //auto update price range per symbol, every 1 hours
  useEffect(() => {
    if (fetchData && activeMarket)
      return autoRefresh(() => thunkDispatch(getPriceRange({ hedgerUrl: baseUrl, market: activeMarket })), 60 * 60)
  }, [thunkDispatch, baseUrl, activeMarket, fetchData])

  return null
}

function useFetchMarkets(hedger: Hedger | null, thunkDispatch: AppThunkDispatch) {
  const { chainId } = useActiveWeb3React()
  const isSupportedChainId = useSupportedChainId()
  const { baseUrl } = hedger || {}

  const multiAccountAddress =
    isSupportedChainId && chainId ? MULTI_ACCOUNT_ADDRESS[chainId] : MULTI_ACCOUNT_ADDRESS[FALLBACK_CHAIN_ID]

  const hedgerMarket = useCallback(
    () => thunkDispatch(getMarkets({ hedgerUrl: baseUrl, multiAccountAddress })),
    [baseUrl, multiAccountAddress, thunkDispatch]
  )
  //auto update per each 3000 seconds
  useEffect(() => {
    const promise = hedgerMarket()
    return () => {
      promise.abort()
    }
  }, [hedgerMarket])
}

function useFetchNotionalCap(hedger: Hedger | null, thunkDispatch: AppThunkDispatch, activeMarket?: Market) {
  const { baseUrl } = hedger || {}
  const { chainId } = useActiveWeb3React()
  const isSupportedChainId = useSupportedChainId()
  const { marketNotionalCap, marketNotionalCapStatus } = useMarketNotionalCap()

  const multiAccountAddress =
    isSupportedChainId && chainId ? MULTI_ACCOUNT_ADDRESS[chainId] : MULTI_ACCOUNT_ADDRESS[FALLBACK_CHAIN_ID]
  const notionalCaps = useCallback(
    () =>
      thunkDispatch(
        getNotionalCap({
          hedgerUrl: baseUrl,
          market: activeMarket,
          preNotional: marketNotionalCap,
          multiAccountAddress,
        })
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeMarket, baseUrl, multiAccountAddress, thunkDispatch]
  )

  //auto update notional cap per symbol, every 1 hours
  useEffect(() => {
    if (activeMarket) return autoRefresh(notionalCaps, 60 * 60)
  }, [activeMarket, notionalCaps])

  //if error occurs it will retry to fetch markets 5 times
  useEffect(() => {
    if (activeMarket && marketNotionalCapStatus === ApiState.ERROR) {
      retry(notionalCaps, {
        n: 5,
        minWait: 3000,
        maxWait: 10000,
      })
    }
  }, [marketNotionalCapStatus, activeMarket, notionalCaps])
}

function usePriceWebSocket() {
  const windowVisible = useIsWindowVisible()
  const webSocketUrl = useWebSocketUrl()
  const updatePrices = useSetPrices()
  const updateDepth = useSetDepth()
  const updateWebSocketStatus = useSetWebSocketStatus()
  const markets = useMarkets()

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(webSocketUrl === '' ? null : webSocketUrl, {
    reconnectAttempts: 10,
    shouldReconnect: () => true,
    onOpen: () => {
      console.log('WebSocket connection established.')
    },
    onClose: () => console.log('WebSocket connection closed'),
    onError: (e) => console.log('WebSocket connection has error ', e),
  })

  const connectionStatus = useMemo(() => {
    if (readyState === ReadyState.OPEN) {
      return ConnectionStatus.OPEN
    } else {
      return ConnectionStatus.CLOSED
    }
  }, [readyState])

  useEffect(() => {
    updateWebSocketStatus(connectionStatus)
  }, [connectionStatus, updateWebSocketStatus])

  useEffect(() => {
    if (connectionStatus === ConnectionStatus.OPEN) {
      const json = {
        method: windowVisible ? 'SUBSCRIBE' : 'UNSUBSCRIBE', // UNSUBSCRIBE websocket when user is idle
        params: ['!markPrice@arr@1s'],
        id: 1,
      }
      sendJsonMessage(json as unknown as JsonValue)
    }
  }, [connectionStatus, markets, sendJsonMessage, windowVisible])

  useEffect(() => {
    try {
      const lastMessage = lastJsonMessage as any

      //don't update anything if user is idle instead of updating to empty prices
      if (!windowVisible) return

      if (!lastMessage || isEmpty(lastMessage) || !lastMessage.data) {
        // return
        return updatePrices({})
      }

      if (lastMessage.stream === '!markPrice@arr@1s') {
        const updatedPrices: PricesType = {}
        lastMessage.data.forEach((price: PriceResponse) => {
          const newPrice = {
            fundingRate: price.r,
            nextFundingTime: price.T,
            markPrice: price.p,
            indexPrice: price.i,
          } as MarketData
          updatedPrices[price.s] = newPrice
        })
        updatePrices(updatedPrices)
      }
    } catch (err) {
      updatePrices({})
      console.log({ err })
    }
  }, [lastJsonMessage, updatePrices, connectionStatus, windowVisible, updateDepth])
}

function useFundingRateWebSocket() {
  const { webSocketFundingRateUrl } = useHedgerInfo() || {}
  const windowVisible = useIsWindowVisible()
  const activeMarket = useActiveMarket()
  const updateFundingRates = useSetFundingRates()

  const url =
    !activeMarket || webSocketFundingRateUrl === '' || !webSocketFundingRateUrl ? null : webSocketFundingRateUrl
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(url, {
    reconnectAttempts: 10,
    shouldReconnect: () => true,
    onOpen: () => {
      console.log('Funding Rate established.')
    },
    onClose: () => console.log('Funding Rate closed'),
    onError: (e) => console.log('Funding Rate has error ', e),
  })

  const connectionStatus = useMemo(() => {
    if (readyState === ReadyState.OPEN) {
      return ConnectionStatus.OPEN
    } else {
      return ConnectionStatus.CLOSED
    }
  }, [readyState])

  useEffect(() => {
    if (connectionStatus === ConnectionStatus.OPEN && activeMarket) {
      const json = {
        symbols: windowVisible ? [activeMarket.name] : [],
      }
      sendJsonMessage(json as unknown as JsonValue)
    }
  }, [connectionStatus, sendJsonMessage, windowVisible, activeMarket])

  useEffect(() => {
    try {
      const lastMessage = lastJsonMessage as any
      //don't update anything if user is idle instead of updating to empty prices
      if (!windowVisible) return

      if (!lastMessage || isEmpty(lastMessage)) {
        return
        // return updateFundingRates({})
      }
      updateFundingRates(lastMessage)
    } catch (err) {
      console.log({ err })
    }
  }, [lastJsonMessage, connectionStatus, windowVisible, updateFundingRates])
}
