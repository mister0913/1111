import { useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { Currency } from '@sushiswap/core-sdk'
import { TransactionResponse } from '@ethersproject/abstract-provider'

export { ApprovalState } from 'lib/hooks/useApproval'
import { ApprovalState, useApproval } from 'lib/hooks/useApproval'

import { useHasPendingApproval, useTransactionAdder } from 'state/transactions/hooks'
import { TransactionType } from 'state/transactions/types'

function useGetAndTrackApproval(getApproval: ReturnType<typeof useApproval>[1]) {
  const addTransaction = useTransactionAdder()
  return useCallback(() => {
    return getApproval().then((pending) => {
      if (pending) {
        const { response, tokenAddress, spenderAddress: spender } = pending
        addTransaction(response, { type: TransactionType.APPROVAL, tokenAddress, spender })
      }

      return pending?.response
    })
  }, [addTransaction, getApproval])
}

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
export function useApproveCallback(
  currency?: Currency,
  amountToApprove?: BigNumber.Value,
  spender?: string
): [ApprovalState, () => Promise<TransactionResponse | undefined>] {
  const [approval, getApproval] = useApproval(currency, amountToApprove, spender, useHasPendingApproval)
  return [approval, useGetAndTrackApproval(getApproval)]
}
