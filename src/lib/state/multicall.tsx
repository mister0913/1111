import { useMemo } from 'react'
import { createMulticall, ListenerOptions } from '@uniswap/redux-multicall'

import { SupportedChainId } from 'constants/chains'

import { useMultiCall3Contract } from 'hooks/useContract'
import useBlockNumber from 'lib/hooks/useBlockNumber'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

const multicall = createMulticall()

export default multicall

function getBlocksPerFetchForChainId(chainId: number | undefined): number {
  switch (chainId) {
    case SupportedChainId.ARBITRUM:
      return 15
    case SupportedChainId.BASE:
      return 1
    case SupportedChainId.POLYGON:
      return 5
    case SupportedChainId.FANTOM:
      return 3
    default:
      return 1
  }
}

export function MulticallUpdater() {
  const { chainId } = useActiveWeb3React()
  const latestBlockNumber = useBlockNumber()
  const contract = useMultiCall3Contract()
  const listenerOptions: ListenerOptions = useMemo(
    () => ({
      blocksPerFetch: getBlocksPerFetchForChainId(chainId),
    }),
    [chainId]
  )
  return (
    <multicall.Updater
      chainId={chainId}
      latestBlockNumber={latestBlockNumber}
      contract={contract}
      listenerOptions={listenerOptions}
    />
  )
}
