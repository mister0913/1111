import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import { Quote } from 'types/quote'

import { AppThunkDispatch, useAppDispatch } from 'state'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useActiveAccountAddress } from 'state/user/hooks'
import { getHistory } from 'state/quotes/thunks'
import {
  useHistoryQuotes,
  usePendingsQuotes,
  usePositionsQuotes,
  useQuoteDetail,
  useSetQuoteDetailCallback,
} from 'state/quotes/hooks'

import { Card } from 'components/Card'
import History from './History'
import Position from './Position'
import OrdersTab, { StateTabs } from './OrdersTab'
import { ItemsPerPage } from './PaginateTable'
import ArrowRightTriangle from 'components/Icons/ArrowRightTriangle'
import { RowCenter } from 'components/Row'
import { IconWrapper } from 'components/Icons'
import { sortQuotesByModifyTimestamp } from 'hooks/useQuotes'

const Wrapper = styled(Card)`
  padding: 0;
  height: 100%;
  position: relative;
`

const PaginationItems = styled(RowCenter)`
  position: absolute;
  bottom: 0px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`

const ArrowWrapper = styled.button<{ left?: boolean; active?: boolean }>`
  transform: rotate(${({ left }) => (left ? '180deg' : '0')});
  opacity: ${({ active }) => (active ? '1' : '0.5')};
  &:hover {
    cursor: ${({ active }) => (active ? 'pointer' : 'default')};
  }
`

export default function UserPanel(): JSX.Element | null {
  const account = useActiveAccountAddress()
  const { chainId } = useActiveWeb3React()

  const [selectedTab, setSelectedTab] = useState(StateTabs.POSITIONS)
  const [page, setPage] = useState(1)
  const quoteDetail = useQuoteDetail()
  const setQuoteDetail = useSetQuoteDetailCallback()
  const { quotes: closed, hasMoreHistory } = useHistoryQuotes()
  const { quotes: positions } = usePositionsQuotes()
  const { quotes: pendings } = usePendingsQuotes()
  const thunkDispatch: AppThunkDispatch = useAppDispatch()

  function getHistoryQuotes() {
    const skip = page * ItemsPerPage
    const first = ItemsPerPage + 1
    if (skip + first < closed.length) return
    if (account && chainId && hasMoreHistory) thunkDispatch(getHistory({ account, chainId, first, skip }))
  }

  const positionQuotes: Quote[] = useMemo(() => {
    return [...positions].sort(sortQuotesByModifyTimestamp)
  }, [positions])

  const pendingQuotes: Quote[] = useMemo(() => {
    return [...pendings].sort(sortQuotesByModifyTimestamp)
  }, [pendings])

  const currentOrders = useMemo(() => {
    switch (selectedTab) {
      case StateTabs.POSITIONS:
        return positionQuotes
      case StateTabs.OPEN_ORDERS:
        return pendingQuotes
      case StateTabs.ORDER_HISTORY:
        return closed
      default:
        return closed
    }
  }, [selectedTab, positionQuotes, pendingQuotes, closed])

  const paginatedItems = useMemo(() => {
    return currentOrders.slice((page - 1) * ItemsPerPage, page * ItemsPerPage)
  }, [currentOrders, page])

  const Rows = useMemo(() => {
    switch (selectedTab) {
      case StateTabs.POSITIONS:
        return <Position quotes={paginatedItems} />
      case StateTabs.OPEN_ORDERS:
        return <Position quotes={paginatedItems} isPending={true} />
      case StateTabs.ORDER_HISTORY:
        return <History quotes={paginatedItems} />
      default:
        return <History quotes={paginatedItems} />
    }
  }, [selectedTab, paginatedItems])

  useEffect(() => {
    if (currentOrders.length === (page - 1) * ItemsPerPage) {
      setPage((page) => page - 1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOrders.length])

  useEffect(() => {
    setPage(1)
    setQuoteDetail(null)
  }, [selectedTab, setQuoteDetail, account, chainId])

  useEffect(() => {
    const isQuoteInPositions =
      positionQuotes.some((quote) => quote.id === quoteDetail?.id) ||
      pendingQuotes.some((quote) => quote.id === quoteDetail?.id)

    if (!isQuoteInPositions && (selectedTab === StateTabs.POSITIONS || selectedTab === StateTabs.OPEN_ORDERS)) {
      setQuoteDetail(null)
    }
  }, [positionQuotes, pendingQuotes, quoteDetail, selectedTab, setQuoteDetail])

  const onClickPage = (value: number) => {
    if (value > page) {
      if (currentOrders.length > page * ItemsPerPage) {
        setPage(value)
        getHistoryQuotes()
      }
    } else {
      if (value >= 1) setPage(value)
    }
  }

  const activeNext = (() => {
    const itemsLengthCondition = page * ItemsPerPage < currentOrders.length
    if (selectedTab === StateTabs.POSITIONS) return itemsLengthCondition
    return hasMoreHistory || itemsLengthCondition
  })()

  return (
    <Wrapper>
      <OrdersTab
        activeTab={selectedTab}
        setActiveTab={(s: StateTabs) => setSelectedTab(s)}
        positionsCount={positionQuotes.length}
        openOrdersCount={pendingQuotes.length}
      />
      {Rows}
      {paginatedItems.length > 0 && (
        <Pagination page={page} setPage={onClickPage} activeNext={activeNext} activePrevious={page !== 1} />
      )}
    </Wrapper>
  )
}

function Pagination({
  page,
  setPage,
  activePrevious,
  activeNext,
}: {
  page: number
  setPage: (page: number) => void
  activePrevious: boolean
  activeNext: boolean
}) {
  return (
    <PaginationItems>
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        <ArrowWrapper active={activePrevious} left={true} onClick={() => setPage(page - 1)}>
          <IconWrapper size={'48px'}>
            <ArrowRightTriangle width={10} height={18} />
          </IconWrapper>
        </ArrowWrapper>
        {page}
        <ArrowWrapper active={activeNext} left={false} onClick={() => setPage(page + 1)}>
          <IconWrapper size={'48px'}>
            <ArrowRightTriangle width={10} height={18} />
          </IconWrapper>
        </ArrowWrapper>
      </div>
    </PaginationItems>
  )
}
