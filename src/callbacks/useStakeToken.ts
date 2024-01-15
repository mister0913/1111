import { useCallback, useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'

import { BASED_TOKEN } from 'constants/tokens'
import { createTransactionCallback, TransactionCallbackState } from 'utils/web3'

import { useExpertMode } from 'state/user/hooks'
import { useStakingContract } from 'hooks/useContract'
import { useTransactionAdder } from 'state/transactions/hooks'
import { ClaimTransactionInfo, StakeTransactionInfo, TransactionInfo, TransactionType } from 'state/transactions/types'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'

import { StakeState } from 'components/App/Staking/SinglStake/SingleStake'
import { TransactionResponse } from '@ethersproject/abstract-provider'

export function useStakeToken(
  amount: string,
  activeTab: StakeState
): {
  state: TransactionCallbackState
  callback: null | (() => Promise<string>)
  error: string | null
} {
  const { account, chainId, provider } = useActiveWeb3React()
  const isSupportedChainId = useSupportedChainId()
  const addTransaction = useTransactionAdder()
  const userExpertMode = useExpertMode()
  const Contract = useStakingContract()
  const methodName = activeTab === StakeState.STAKE ? 'deposit' : 'withdraw'

  const constructCall = useCallback(() => {
    try {
      if (!account || !Contract || !methodName || !isSupportedChainId) {
        throw new Error('Missing dependencies.')
      }
      const value = new BigNumber(amount).shiftedBy(BASED_TOKEN.decimals).toFixed()
      const args = [value, account]
      console.log(args)
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
  }, [account, Contract, methodName, isSupportedChainId, amount])

  return useMemo(() => {
    if (!account || !chainId || !provider || !Contract || !methodName) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: 'Missing dependencies',
      }
    }

    const txInfo = {
      type: TransactionType.STAKE,
      action: activeTab,
      amount,
    } as StakeTransactionInfo

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
  }, [
    account,
    chainId,
    provider,
    Contract,
    methodName,
    activeTab,
    amount,
    constructCall,
    addTransaction,
    userExpertMode,
  ])
}

export function useClaimReward() {
  const { account, chainId, provider } = useActiveWeb3React()
  const isSupportedChainId = useSupportedChainId()
  const addTransaction = useTransactionAdder()
  const userExpertMode = useExpertMode()
  const Contract = useStakingContract()
  const methodName = 'getReward'
  const [txStatus, setTxStatus] = useState<TransactionCallbackState>(TransactionCallbackState.VALID)

  const constructCall = useCallback(() => {
    try {
      if (!account || !Contract || !methodName || !isSupportedChainId) {
        throw new Error('Missing dependencies.')
      }

      return {
        address: Contract.address,
        calldata: Contract.interface.encodeFunctionData(methodName, []) ?? '',
        value: 0,
      }
    } catch (error) {
      return {
        error,
      }
    }
  }, [account, Contract, methodName, isSupportedChainId])

  return useMemo(() => {
    if (!account || !chainId || !provider || !Contract || !methodName) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: 'Missing dependencies',
      }
    }

    const txInfo = {
      type: TransactionType.CLAIM,
    } as ClaimTransactionInfo

    return {
      state: txStatus,
      error: null,
      callback: () => {
        console.log('Transaction pending')
        setTxStatus(TransactionCallbackState.PENDING)

        return createTransactionCallback(
          methodName,
          constructCall,
          async (response: TransactionResponse, info: TransactionInfo, summary?: string) => {
            addTransaction(response, info, summary)
            await response.wait()
            setTxStatus(TransactionCallbackState.VALID)
          },
          txInfo,
          account,
          provider,
          undefined,
          userExpertMode
        )
      },
    }
  }, [account, chainId, provider, Contract, methodName, constructCall, addTransaction, userExpertMode, txStatus])
}
