import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import useIsWindowVisible from 'lib/hooks/useIsWindowVisible'
import { useDebounce } from 'usehooks-ts'
import { SupportedChainId } from 'constants/chains'
import { RPC_PROVIDERS } from 'constants/providers'

const MISSING_PROVIDER = Symbol()
const BlockNumberContext = createContext<
  | {
      value?: number
      fastForward(block: number): void
      forceLatest(): void
    }
  | typeof MISSING_PROVIDER
>(MISSING_PROVIDER)

function useBlockNumberContext() {
  const blockNumber = useContext(BlockNumberContext)
  if (blockNumber === MISSING_PROVIDER) {
    throw new Error('BlockNumber hooks must be wrapped in a <BlockNumberProvider>')
  }
  return blockNumber
}

/** Requires that BlockUpdater be installed in the DOM tree. */
export default function useBlockNumber(): number | undefined {
  return useBlockNumberContext().value
}

export function useFastForwardBlockNumber(): (block: number) => void {
  return useBlockNumberContext().fastForward
}

export function useForceLatestBlock(): () => void {
  return useBlockNumberContext().forceLatest
}

export function BlockNumberProvider({ children }: { children: ReactNode }) {
  // Set fixed to Base for now, refactor once multiple chains are supported
  const activeChainId = SupportedChainId.BASE
  const provider = RPC_PROVIDERS[SupportedChainId.BASE]

  const [{ chainId, block }, setChainBlock] = useState<{ chainId?: number; block?: number }>({ chainId: activeChainId })

  const debouncedBlock = useDebounce(block, 300)

  const onBlock = useCallback(
    (block: number) => {
      setChainBlock((chainBlock) => {
        if (chainBlock.chainId === activeChainId) {
          if (!chainBlock.block || chainBlock.block < block) {
            return { chainId: activeChainId, block }
          }
        }
        return chainBlock
      })
    },
    [activeChainId, setChainBlock]
  )

  const windowVisible = useIsWindowVisible()

  /**
   * Notice that the default base rpc (or metamask?) batches blocks, with around 12 sec intervals
   */
  useEffect(() => {
    let stale = false

    if (provider && activeChainId && windowVisible) {
      // If chainId hasn't changed, don't clear the block. This prevents re-fetching still valid data.
      setChainBlock((chainBlock) => (chainBlock.chainId === activeChainId ? chainBlock : { chainId: activeChainId }))

      // Force block polling to be every 4 seconds for Base
      if (provider.pollingInterval !== 4000) {
        provider.pollingInterval = 4000
      }

      provider
        .getBlockNumber()
        .then((block) => {
          if (!stale) onBlock(block)
        })
        .catch((error) => {
          console.error(`Failed to get block number for chainId ${activeChainId}`, error)
        })

      provider.on('block', onBlock)
      return () => {
        stale = true
        provider.removeListener('block', onBlock)
      }
    }

    return void 0
  }, [activeChainId, provider, onBlock, setChainBlock, windowVisible])

  const value = useMemo(
    () => ({
      value: chainId === activeChainId ? debouncedBlock : undefined,
      fastForward: (update: number) => {
        if (debouncedBlock && update > debouncedBlock) {
          setChainBlock({ chainId: activeChainId, block: update })
        }
      },
      forceLatest: () => {
        setChainBlock({ chainId: activeChainId, block: (debouncedBlock || 0) + 1 })
      },
    }),
    [activeChainId, debouncedBlock, chainId]
  )

  return <BlockNumberContext.Provider value={value}>{children}</BlockNumberContext.Provider>
}
