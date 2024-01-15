import { useCallback, useMemo } from 'react'

import { createTransactionCallback, TransactionCallbackState } from 'utils/web3'

import { useExpertMode } from 'state/user/hooks'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'
import { useTransactionAdder } from 'state/transactions/hooks'
import { SignMessageTransactionInfo, TransactionType } from 'state/transactions/types'

import { useBasedContract } from 'hooks/useContract'

export function useFillDibsRewarder(day?: number): {
  state: TransactionCallbackState
  callback: null | (() => Promise<string>)
  error: string | null
} {
  const { account, chainId, provider } = useActiveWeb3React()
  const addTransaction = useTransactionAdder()
  const userExpertMode = useExpertMode()
  const isSupportedChainId = useSupportedChainId()
  const Contract = useBasedContract()

  const methodName = 'fillDibsRewarder'

  const constructCall = useCallback(() => {
    try {
      if (!Contract || !day || !isSupportedChainId) {
        throw new Error('Missing dependencies.')
      }

      const args = [day]

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
  }, [Contract, day, isSupportedChainId])

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
      text: 'Dibs Rewarder Filled',
    } as SignMessageTransactionInfo

    return {
      state: TransactionCallbackState.VALID,
      error: null,
      callback: () =>
        createTransactionCallback(
          methodName,
          constructCall,
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
