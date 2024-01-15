import { useCallback, useMemo } from 'react'
import BigNumber from 'bignumber.js'

import { useExpertMode } from 'state/user/hooks'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'
import { useTransactionAdder } from 'state/transactions/hooks'
import { MintTransactionInfo, TransactionType } from 'state/transactions/types'
import { createTransactionCallback, TransactionCallbackState } from 'utils/web3'

import { useCollateralContract } from 'hooks/useContract'

export function useMintCollateral(): {
  state: TransactionCallbackState
  callback: null | (() => Promise<string>)
  error: string | null
} {
  const { account, provider } = useActiveWeb3React()
  const CollateralContract = useCollateralContract()
  const isSupportedChainId = useSupportedChainId()

  const addTransaction = useTransactionAdder()
  const userExpertMode = useExpertMode()

  const methodName = 'mint'

  const constructCall = useCallback(() => {
    try {
      if (!account || !CollateralContract || !isSupportedChainId) {
        throw new Error('Missing dependencies.')
      }
      return {
        address: CollateralContract.address,
        calldata:
          CollateralContract.interface.encodeFunctionData(methodName, [
            account,
            new BigNumber(50000).shiftedBy(18).toFixed(),
          ]) ?? '',
        value: 0,
      }
    } catch (error) {
      return {
        error,
      }
    }
  }, [account, CollateralContract, isSupportedChainId])

  return useMemo(() => {
    if (!account || !CollateralContract) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: 'Missing dependencies',
      }
    }

    const txInfo = {
      type: TransactionType.MINT,
      amount: '50000',
    } as MintTransactionInfo

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
  }, [account, provider, CollateralContract, methodName, constructCall, addTransaction, userExpertMode])
}
