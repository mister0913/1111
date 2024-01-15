import { useMemo } from 'react'

import { V3_CHAIN_IDS } from 'constants/chains'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

// Allow user to connect any chain globally, but restrict unsupported ones if needed
export function useSupportedChainId() {
  const { chainId, account } = useActiveWeb3React()
  return useMemo(() => {
    if (!chainId || !account) return false
    return V3_CHAIN_IDS.includes(chainId)
  }, [chainId, account])
}
