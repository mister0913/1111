import { SupportedChainId } from 'constants/chains'
import { createApolloClient } from './index'

const baseClient = createApolloClient(
  `https://api.thegraph.com/subgraphs/name/${getSubgraphName(SupportedChainId.BASE)}`
)
export const dibsClient = createApolloClient('https://api.thegraph.com/subgraphs/name/spsina/based')

export function getBalanceHistoryApolloClient(chainId: SupportedChainId) {
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
      return 'symmiograph/symmioanalytics_base_8_2'
    default:
      console.error(`${chainId} is not a supported subgraph network`)
      return null
  }
}
