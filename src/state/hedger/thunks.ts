import { createAsyncThunk } from '@reduxjs/toolkit'

import { APP_NAME } from 'constants/misc'
import { makeHttpRequest } from 'utils/http'

import { Market } from 'types/market'
import { OpenInterest } from 'types/hedger'
import {
  DepthResponse,
  ErrorMessages,
  ITotalTradingFee,
  MarketDepthData,
  MarketDepthMap,
  MarketNotionalCap,
  MarketsInfo,
  PriceRange,
} from './types'
import { getBalanceHistoryApolloClient } from 'apollo/client/balanceHistory'
import { GET_PAID_AMOUNT, TotalTradingFee } from 'apollo/queries'
import { toBN } from 'utils/numbers'
import { createApolloClient } from 'apollo/client'

export const getMarkets = createAsyncThunk(
  'hedger/getAllApi',
  async ({
    hedgerUrl,
    multiAccountAddress,
  }: {
    hedgerUrl: string | undefined
    multiAccountAddress: string | undefined
  }) => {
    if (!hedgerUrl) {
      throw new Error('hedgerUrl is empty')
    }
    if (!multiAccountAddress) {
      throw new Error('multiAccountAddress is empty')
    }

    const { href: marketsUrl } = new URL(`contract-symbols`, hedgerUrl)
    const { href: openUrl } = new URL(`open-interest/${multiAccountAddress}`, hedgerUrl)
    const { href: errorMessagesUrl } = new URL(`error_codes`, hedgerUrl)

    let count = 0
    let markets: Market[] = []
    let errorMessages: ErrorMessages = {}
    const openInterest: OpenInterest = { used: 0, total: 0 }

    try {
      const [marketsRes, openRes, errorMessagesRes] = await Promise.allSettled([
        makeHttpRequest(marketsUrl, getAppNameHeader()),
        makeHttpRequest(openUrl, getAppNameHeader()),
        makeHttpRequest(errorMessagesUrl, getAppNameHeader()),
      ])

      if (marketsRes.status === 'fulfilled') {
        if (marketsRes.value.symbols) {
          markets = marketsRes.value.symbols.map((market: any) => ({
            id: market.symbol_id,
            name: market.name,
            symbol: market.symbol,
            asset: market.asset,
            pricePrecision: market.price_precision,
            quantityPrecision: market.quantity_precision,
            isValid: market.is_valid,
            minAcceptableQuoteValue: market.min_acceptable_quote_value,
            minAcceptablePortionLF: market.min_acceptable_portion_lf,
            tradingFee: market.trading_fee,
            maxLeverage: market.max_leverage,
            maxNotionalValue: market.max_notional_value,
            maxFundingRate: market.max_funding_rate,
            rfqAllowed: market?.rfq_allowed,
            hedgerFeeOpen: market.hedger_fee_open,
            hedgerFeeClose: market.hedger_fee_close,
            autoSlippage: toBN(60).div(market.max_leverage).div(100).plus(1).toNumber(),
          }))
          count = marketsRes.value.count
        }

        if (openRes.status === 'fulfilled') {
          openInterest.total = openRes.value.total_cap
          openInterest.used = openRes.value.used
        }
        if (errorMessagesRes.status === 'fulfilled') {
          errorMessages = errorMessagesRes.value
        }
      }
    } catch (error) {
      console.error(error, 'happened in getHedgerMarkets')
    }

    return { markets, count, openInterest, errorMessages }
  }
)

export const getNotionalCap = createAsyncThunk(
  'hedger/getNotionalCap',
  async ({
    hedgerUrl,
    multiAccountAddress,
    market,
    preNotional,
  }: {
    hedgerUrl: string | undefined
    multiAccountAddress: string | undefined
    market: Market | undefined
    preNotional?: MarketNotionalCap
  }) => {
    if (!hedgerUrl) {
      throw new Error('hedgerUrl is empty')
    }
    if (!market) {
      throw new Error('market is empty')
    }
    if (!multiAccountAddress) {
      throw new Error('multiAccountAddress is empty')
    }

    const { href: notionalCapUrl } = new URL(`notional_cap/${market.id}/${multiAccountAddress}`, hedgerUrl)

    const notionalCap: MarketNotionalCap = { name: '', totalCap: -1, used: -1 }

    // add this part to have previous value if api doesn't working
    if (preNotional && preNotional.name === market.name && preNotional.totalCap !== -1) {
      notionalCap.name = preNotional.name
      notionalCap.used = preNotional.used
      notionalCap.totalCap = preNotional.totalCap
    }

    try {
      const [notionalCapRes] = await Promise.allSettled([makeHttpRequest(notionalCapUrl, getAppNameHeader())])

      if (notionalCapRes.status === 'fulfilled') {
        notionalCap.name = market.name
        notionalCap.used = notionalCapRes.value.used
        notionalCap.totalCap = notionalCapRes.value.total_cap
      }
    } catch (error) {
      console.error(error, 'happened in getNotionalCap')
    }

    return { notionalCap }
  }
)

export const getPriceRange = createAsyncThunk(
  'hedger/getPriceRange',
  async ({ hedgerUrl, market }: { hedgerUrl: string | undefined; market: Market | undefined }) => {
    if (!hedgerUrl) {
      throw new Error('hedgerUrl is empty')
    }
    if (!market) {
      throw new Error('market is empty')
    }

    const { href: priceRangeUrl } = new URL(`price-range/${market.name}`, hedgerUrl)

    const priceRange: PriceRange = { name: '', minPrice: -1, maxPrice: -1 }

    try {
      const [priceRangeRes] = await Promise.allSettled([makeHttpRequest(priceRangeUrl, getAppNameHeader())])

      if (priceRangeRes.status === 'fulfilled') {
        priceRange.name = market.name
        priceRange.minPrice = priceRangeRes.value.min_price
        priceRange.maxPrice = priceRangeRes.value.max_price
      }
    } catch (error) {
      console.error(error, 'happened in getPriceRange')
    }

    return { priceRange }
  }
)

export const getMarketsDepth = createAsyncThunk('hedger/getMarketsDepth', async (apiUrl: string | undefined) => {
  if (!apiUrl) {
    throw new Error('Url is empty')
  }
  const depths: MarketDepthMap = {}
  const { href: marketDepthUrl } = new URL(`fapi/v1/ticker/bookTicker`, apiUrl)

  try {
    const [marketDepths] = await Promise.allSettled([makeHttpRequest(marketDepthUrl, getAppNameHeader())])

    if (marketDepths.status === 'fulfilled') {
      marketDepths.value.forEach((depth: DepthResponse) => {
        const newDepth = {
          bestAskPrice: depth.askPrice,
          bestAskQuantity: depth.askQty,
          bestBidPrice: depth.bidPrice,
          bestBidQuantity: depth.bidQty,
        } as MarketDepthData
        depths[depth.symbol] = newDepth
      })
    }
  } catch (error) {
    console.error(error, 'happened in getMarketsDepth')
    return { depths: {} }
  }
  return { depths }
})

export const getMarketsInfo = createAsyncThunk(
  'hedger/getMarketsInfo',
  async ({
    hedgerUrl,
    multiAccountAddress,
  }: {
    hedgerUrl: string | undefined
    multiAccountAddress: string | undefined
  }) => {
    if (!hedgerUrl) {
      throw new Error('hedgerUrl is empty')
    }
    if (!multiAccountAddress) {
      throw new Error('multiAccountAddress is empty')
    }
    const { href: marketsInfoUrl } = new URL(`get_market_info/${multiAccountAddress}`, hedgerUrl)
    const marketsInfo: MarketsInfo = {}
    try {
      const [marketsInfoRes] = await Promise.allSettled([makeHttpRequest(marketsInfoUrl, getAppNameHeader())])
      if (marketsInfoRes.status === 'fulfilled') {
        Object.entries(marketsInfoRes.value).forEach((localMarketEntry) => {
          const [marketName, marketInfoValue]: [marketName: string, marketInfoValue: any] = localMarketEntry
          marketsInfo[marketName] = {
            price: marketInfoValue.price.toString(),
            priceChangePercent: marketInfoValue.price_change_percent.toString(),
            tradeVolume: marketInfoValue.trade_volume.toString(),
            notionalCap: marketInfoValue.notional_cap.toString(),
          }
        })
      }
    } catch (error) {
      console.error(error, 'happened in getMarketsInfo')
      throw new Error(error)
    }

    return { marketsInfo }
  }
)

export const getTotalTradingFee = createAsyncThunk(
  'user/getTotalDepositsAndWithdrawals',
  async ({ chainId }: { chainId: number | undefined }) => {
    if (!chainId) {
      throw new Error('chainId is empty')
    }

    let response = {} as ITotalTradingFee
    try {
      const client = getBalanceHistoryApolloClient(chainId)
      if (!client) return response

      const { data: totalHistories } = await client.query<{ totalHistories: ITotalTradingFee[] }>({
        query: TotalTradingFee,
        fetchPolicy: 'no-cache',
      })

      response = totalHistories.totalHistories[0] as ITotalTradingFee
    } catch (error) {
      console.error(error)
      throw new Error(`Unable to query data from Client`)
    }
    return response
  }
)

export const getPaidAmount = createAsyncThunk('hedger/getPaidAmount', async ({ quoteId }: { quoteId: number }) => {
  try {
    const client = createApolloClient(
      'https://api.studio.thegraph.com/query/62454/symmiofundingrate_base_8_2/version/latest'
    )

    const {
      data: { resultEntities },
    } = await client.query<{
      resultEntities: { fee: string; __typename: string }[]
    }>({
      query: GET_PAID_AMOUNT,
      variables: { id: `${quoteId}` },
      fetchPolicy: 'no-cache',
    })
    if (resultEntities.length) return { fee: resultEntities[0].fee }
    return { fee: '' }
  } catch (error) {
    console.error(error)
    throw new Error(`Unable to query Deposits And Withdrawals from Client`)
  }
})

export function getAppNameHeader() {
  const options = {
    headers: [['App-Name', APP_NAME]],
  }
  return options
}
