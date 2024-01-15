import React, { useMemo, useRef } from 'react'

import { isTransactionRecent, useAllTransactions } from 'state/transactions/hooks'
import { TransactionDetails } from 'state/transactions/types'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import WalletModal from 'components/WalletModal'
import MultiAccount from 'components/Web3Status/MultiAccount'

// We want the latest one to come first, so return negative if a is after b
function newTransactionsFirst(a: TransactionDetails, b: TransactionDetails) {
  return b.addedTime - a.addedTime
}

export default function Web3Status() {
  const { account } = useActiveWeb3React()

  const ref = useRef<HTMLDivElement>(null)
  const allTransactions = useAllTransactions()

  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions)
    return txs
      .filter(isTransactionRecent)
      .sort(newTransactionsFirst)
      .filter((tx) => tx.from == account)
  }, [allTransactions, account])

  const pending = sortedRecentTransactions.filter((tx) => !tx.receipt).map((tx) => tx.hash)
  const confirmed = sortedRecentTransactions.filter((tx) => tx.receipt).map((tx) => tx.hash)

  return (
    <span ref={ref}>
      <MultiAccount />
      <WalletModal pendingTransactions={pending} confirmedTransactions={confirmed} />
    </span>
  )
}
