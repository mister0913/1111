import React from 'react'
import styled from 'styled-components'

import { useAllTransactions } from 'state/transactions/hooks'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { ExplorerDataType } from 'utils/explorers'

import { ExplorerLink } from 'components/Link'
import { CheckMark, Loader, Error, Link } from 'components/Icons'
import { RowEnd, RowStart } from 'components/Row'
import TransactionSummary from 'components/Summaries/TransactionSummary '

const Row = styled(RowStart)`
  height: 40px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  border-radius: 4px;
  background: ${({ theme }) => theme.color4};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 0.7rem;
  `};

  &:hover {
    text-decoration: underline;
  }

  & > * {
    &:first-child {
      margin-left: 17px;
    }
  }
`

const TransactionStatus = styled(RowEnd)`
  padding-right: 14px;
`

export default function Transaction({ hash }: { hash: string }) {
  const { chainId } = useActiveWeb3React()
  const allTransactions = useAllTransactions()

  const tx = allTransactions?.[hash]

  const info = tx.info
  const summary = tx?.summary
  const pending = !tx?.receipt
  const success = !pending && tx && (tx.receipt?.status === 1 || typeof tx.receipt?.status === 'undefined')
  // const cancelled = tx?.receipt && tx.receipt.status === 1337
  const status = pending ? '' : success ? 'submitted' : 'failed'

  if (!chainId) return null
  return (
    <ExplorerLink type={ExplorerDataType.TRANSACTION} chainId={chainId} value={hash}>
      <Row>
        <TransactionSummary info={info} summary={summary} status={status} />
        <Link color="#80BBF2" style={{ marginLeft: '12px', minWidth: '8px' }} />
        <TransactionStatus>
          {success ? (
            <CheckMark color={'#EBEBEC'} />
          ) : !pending ? (
            <Error color={'red'} />
          ) : (
            <Loader size={'12px'} stroke="#EBEBEC" />
          )}
        </TransactionStatus>
      </Row>
    </ExplorerLink>
  )
}
