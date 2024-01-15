import { useCallback, useMemo } from 'react'

import { createTransactionCallback, TransactionCallbackState } from 'utils/web3'

import { useExpertMode } from 'state/user/hooks'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'
import { useTransactionAdder } from 'state/transactions/hooks'
import { SignMessageTransactionInfo, TransactionType } from 'state/transactions/types'

import { useSignatureStoreContract } from 'hooks/useContract'

export function useWriteSign(): {
  state: TransactionCallbackState
  callback: null | ((sign: string) => Promise<string>)
  error: string | null
} {
  const { account, chainId, provider } = useActiveWeb3React()
  const addTransaction = useTransactionAdder()
  const userExpertMode = useExpertMode()
  const isSupportedChainId = useSupportedChainId()
  const Contract = useSignatureStoreContract()

  const methodName = 'storeSignatureForCurrentVersion'

  const constructCall = useCallback(
    (sign: string) => {
      try {
        if (!Contract || !sign || !isSupportedChainId) {
          throw new Error('Missing dependencies.')
        }

        const args = [sign]

        return {
          address: Contract.address,
          calldata: Contract.interface.encodeFunctionData(methodName, args) ?? '',
          value: 0,
        }
      } catch (error) {
        return {
          error,
        }
      }
    },
    [Contract, isSupportedChainId]
  )

  return useMemo(() => {
    if (!account || !chainId || !provider || !Contract) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: 'Missing dependencies',
      }
    }

    const txInfo = {
      type: TransactionType.SIGN_MESSAGE,
      text: 'Sign Message',
    } as SignMessageTransactionInfo

    return {
      state: TransactionCallbackState.VALID,
      error: null,
      callback: (sign: string) =>
        createTransactionCallback(
          methodName,
          () => constructCall(sign),
          addTransaction,
          txInfo,
          account,
          provider,
          undefined,
          userExpertMode
        ),
    }
  }, [account, chainId, provider, Contract, constructCall, addTransaction, userExpertMode])
}
