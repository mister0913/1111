import { createAsyncThunk } from '@reduxjs/toolkit'

import { getOrderHistoryApolloClient } from 'apollo/client/orderHistory'
import { ORDER_HISTORY_DATA } from 'apollo/queries'
import { SubGraphData } from './types'
import { Quote } from 'types/quote'
import { OrderType } from 'types/trade'
import { fromWei } from 'utils/numbers'
import { getPositionTypeByIndex, getQuoteStateByIndex } from 'hooks/useQuotes'
import { ItemsPerPage } from 'components/App/UserPanel/PaginateTable'

function toQuoteFromGraph(entity: SubGraphData) {
  return {
    id: Number(entity.quoteId),
    partyBsWhiteList: entity.partyBsWhiteList,
    marketId: Number(entity.symbolId),
    positionType: getPositionTypeByIndex(entity.positionType),
    orderType: entity.orderTypeOpen === 1 ? OrderType.MARKET : OrderType.LIMIT,
    openedPrice: fromWei(entity.openedPrice),
    requestedOpenPrice: fromWei(entity.requestedOpenPrice),
    quantity: fromWei(entity.quantity),
    initialCVA: fromWei(entity.initialData.cva ?? null),
    initialPartyAMM: fromWei(entity.initialData.partyAmm ?? null),
    initialLF: fromWei(entity.initialData.lf ?? null),
    CVA: fromWei(entity.cva),
    partyAMM: fromWei(entity.partyAmm),
    LF: fromWei(entity.lf),
    partyA: entity.partyA,
    partyB: entity.partyB,
    quoteStatus: getQuoteStateByIndex(entity.quoteStatus),
    avgClosedPrice: fromWei(entity.averageClosedPrice),
    quantityToClose: fromWei(entity.quantityToClose),
    statusModifyTimestamp: Number(entity.timeStamp),
    createTimestamp: Number(entity.initialData.timeStamp ?? null),
    deadline: Number(entity.deadline),
    marketPrice: fromWei(entity.marketPrice),
    closedAmount: fromWei(entity.closedAmount),
    liquidateAmount: fromWei(entity.liquidateAmount),
    liquidatePrice: fromWei(entity.liquidatePrice),
  } as Quote
}

export const getHistory = createAsyncThunk(
  'quotes/getHistory',
  async ({ account, chainId, skip, first }: { account: string; chainId: number; skip: number; first: number }) => {
    if (!account) {
      throw new Error('account is undefined')
    }
    if (!chainId) {
      throw new Error('chainId is empty')
    }

    try {
      const client = getOrderHistoryApolloClient(chainId)
      if (!client) return {}

      let hasMore = false
      const {
        data: { resultEntities },
      } = await client.query({
        query: ORDER_HISTORY_DATA,
        variables: { address: account, first, skip },
        fetchPolicy: 'no-cache',
      })

      const quotes: Quote[] = resultEntities.map((entity: SubGraphData) => toQuoteFromGraph(entity))
      if (quotes.length === ItemsPerPage + 1) {
        hasMore = true
      }

      return { quotes, hasMore, chainId }
    } catch (error) {
      console.error(error)
      throw new Error(`Unable to query data from Client`)
    }
  }
)
