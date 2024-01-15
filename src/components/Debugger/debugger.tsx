// import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react'
// import useIsWindowVisible from 'lib/hooks/useIsWindowVisible'
// import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
// import { useDebounce, useInterval } from 'usehooks-ts'
// import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers'
// import { RPC_PROVIDERS } from 'constants/providers'
// import { SupportedChainId } from 'constants/chains'

/**
 * Helper component for debugging purposes
 */

export const Debugger = () => {
  //   const { chainId: activeChainId, provider } = useActiveWeb3React()

  //   // custom provider
  //   const [provider2, setProvider2] = useState<any>()

  //   useEffect(() => {
  //     // if (!window.ethereum) {
  //     //   return
  //     // }

  //     //setProvider2(new JsonRpcProvider('https://mainnet.base.org'))
  //     //setProvider2(new Web3Provider(window.ethereum, 'any'))
  //     setProvider2(RPC_PROVIDERS[SupportedChainId.BASE])
  //   }, [window.ethereum])

  //   const test = async () => {
  //     if (!provider || !provider2) {
  //       return
  //     }

  //     const block = await provider?.getBlockNumber()

  //     const block2 = await provider2?.getBlockNumber()

  //     const block3 = await provider?.send('eth_blockNumber', ['latest'])

  //     console.log('block', block, block2, block3)
  //   }

  // //  useInterval(test, 2000)

  return null
}
