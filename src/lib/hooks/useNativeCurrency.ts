import { useMemo } from 'react'
import { NativeCurrency, Token } from '@sushiswap/core-sdk'

import { SupportedChainId } from 'constants/chains'
import { nativeOnChain } from 'utils/token'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

export default function useNativeCurrency(): NativeCurrency | Token {
  const { chainId } = useActiveWeb3React()
  return useMemo(
    () =>
      chainId
        ? nativeOnChain(chainId)
        : // display mainnet when not connected
          nativeOnChain(SupportedChainId.BASE),
    [chainId]
  )
}
