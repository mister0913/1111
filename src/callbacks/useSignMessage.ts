import { useMemo } from 'react'

import { TransactionCallbackState } from 'utils/web3'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { useMultiAccountContract } from 'hooks/useContract'

export function useSignMessage(message: string): {
  state: TransactionCallbackState
  callback: null | (() => Promise<string>)
  error: string | null
} {
  const { account, chainId, provider } = useActiveWeb3React()
  const Contract = useMultiAccountContract()

  return useMemo(() => {
    if (!account || !chainId || !provider || !Contract) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: 'Missing dependencies',
      }
    }
    if (!message) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: 'No message provided',
      }
    }

    return {
      state: TransactionCallbackState.VALID,
      error: null,
      callback: async function onSign(): Promise<string> {
        console.log('onSign callback')
        return provider
          .getSigner()
          .signMessage(message)
          .then((response) => {
            console.log(response)
            return response
          })
          .catch((error) => {
            // if the user rejected the tx, pass this along
            if (error?.code === 4001) {
              throw new Error('Transaction rejected.')
            } else if (error?.code === 'ACTION_REJECTED') {
              // otherwise, the error was unexpected and we need to convey that
              // console.error(`Transaction failed`, error, address, calldata, value)
              throw new Error(`Transaction rejected`)
            } else {
              throw new Error(`Transaction rejected`)
            }

            // if (error?.code === 'ACTION_REJECTED') {
            //   toast.error(DefaultHandlerError(error))
            //   // throw new Error('Transaction rejected.')
            // } else {
            //   // otherwise, the error was unexpected and we need to convey that
            //   console.error(`Transaction failed`, error, address, calldata, value)
            //   toast.error(`Transaction failed: ${error.message}`)
            //   // throw new Error(`Transaction failed: ${error.message}`)
            // }
          })
      },
    }
  }, [account, chainId, provider, Contract, message])
}
