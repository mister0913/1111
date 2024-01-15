import { SupportedChainId } from 'constants/chains'
import { createApolloClient } from './index'

const baseClient = createApolloClient(`${getSubgraphName(SupportedChainId.BASE)}`)

export function getOrderHistoryApolloClient(chainId: SupportedChainId) {
  switch (chainId) {
    case SupportedChainId.BASE:
      return baseClient
    default:
      console.error(`${chainId} is not a supported subgraph network`)
      return null
  }
}

export function getSubgraphName(chainId: SupportedChainId) {
  switch (chainId) {
    case SupportedChainId.BASE:
      return 'https://api.thegraph.com/subgraphs/name/symmiograph/symmiomain_base_8_2'
    default:
      console.error(`${chainId} is not a supported subgraph network`)
      return null
  }
}
