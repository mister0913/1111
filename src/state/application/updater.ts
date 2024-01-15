import { useCallback, useEffect, useState } from 'react'
import { Block } from '@ethersproject/abstract-provider'
import { useAppDispatch } from 'state'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import useIsWindowVisible from 'lib/hooks/useIsWindowVisible'
import useDebounce from 'lib/hooks/useDebounce'
import { SupportedChainId } from 'constants/chains'

import { updateBlockNumber, updateBlockTimestamp, updateChainId } from './actions'

export function ApplicationUpdater(): null {
  const { provider, chainId } = useActiveWeb3React()
  const dispatch = useAppDispatch()

  const windowVisible = useIsWindowVisible()

  const [latestBlock, setLatestBlock] = useState<number>()

  const latestBlockDebounced = useDebounce(latestBlock, 500)

  const [state, setState] = useState<{
    chainId: number | undefined
    blockNumber: number | null
    blockTimestamp: number | null
  }>({
    chainId,
    blockNumber: null,
    blockTimestamp: null,
  })

  const blockCallback = useCallback(
    (block: Block) => {
      setState((state) => {
        if (chainId === state.chainId) {
          if (typeof state.blockNumber !== 'number' && typeof state.blockTimestamp !== 'number') {
            return { chainId, blockNumber: block.number, blockTimestamp: block.timestamp }
          }
          return {
            chainId,
            blockNumber: Math.max(block.number, state.blockNumber ?? 0),
            blockTimestamp: Math.max(block.timestamp, state.blockTimestamp ?? 0),
          }
        }
        return state
      })
    },
    [chainId]
  )

  const onBlock = useCallback((number) => {
    setLatestBlock(number)
  }, [])

  const parseBlock = async (block: number) => {
    provider && provider.getBlock(block).then(blockCallback)
  }

  // Attach/detach listeners
  useEffect(() => {
    if (!provider || !chainId || !windowVisible) return undefined

    setState({ chainId, blockNumber: null, blockTimestamp: null })

    provider
      .getBlock('latest')
      .then((number) => provider && provider.getBlock(number.number).then(blockCallback))
      .catch((error) => console.error(`Failed to get block for chainId: ${chainId}`, error))

    provider.on('block', onBlock)
    return () => {
      provider.removeListener('block', onBlock)
    }
  }, [chainId, provider, windowVisible])

  useEffect(() => {
    parseBlock(latestBlockDebounced)
  }, [latestBlockDebounced])

  const debouncedState = useDebounce(state, 500)

  useEffect(() => {
    if (!debouncedState.chainId || !debouncedState.blockNumber || !windowVisible) return
    dispatch(updateBlockNumber({ chainId: debouncedState.chainId, blockNumber: debouncedState.blockNumber }))
    dispatch(updateBlockTimestamp({ chainId: debouncedState.chainId, blockTimestamp: debouncedState.blockTimestamp }))
  }, [windowVisible, debouncedState.blockNumber, debouncedState.blockTimestamp, debouncedState.chainId])

  useEffect(() => {
    dispatch(
      updateChainId({ chainId: debouncedState.chainId in SupportedChainId ? debouncedState.chainId ?? null : null })
    )
  }, [dispatch, debouncedState.chainId])

  return null
}
