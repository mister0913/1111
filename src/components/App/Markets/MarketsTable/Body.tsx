import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Market } from 'types/market'
import { ApiState } from 'types/api'

import { AppThunkDispatch, useAppDispatch } from 'state'
import { useHedgerInfo } from 'state/hedger/hooks'
import { getMarketsInfo } from 'state/hedger/thunks'
import { MarketsInfo } from 'state/hedger/types'

import MarketRow from './Row'
import Footer from './Footer'
import Column from 'components/Column'
import { Loader } from 'components/Icons'
import { RowBetween } from 'components/Row'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { MULTI_ACCOUNT_ADDRESS } from 'constants/addresses'
import { FALLBACK_CHAIN_ID } from 'constants/chains'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'

const FooterWrapper = styled(RowBetween)`
  height: 56px;
  background: ${({ theme }) => theme.bg0};
  border-radius: 0 0 4px 4px;
`

const LoaderWrapper = styled.div`
  margin: 16px auto;
`

export default function TableBody({
  markets,
  searchValue,
}: {
  markets: Market[]
  searchValue: string
}): JSX.Element | null {
  const [page, setPage] = useState<number>(1)
  const [marketsPerPage, setMarketsPerPage] = useState<number>(20)
  const [visibleMarkets, setVisibleMarkets] = useState<Market[]>(
    markets.slice((page - 1) * marketsPerPage, Math.min(page * marketsPerPage, markets.length))
  )
  const { marketsInfo, infoStatus } = useMarketsInfo()

  const pageCount = Math.ceil(markets.length / marketsPerPage)

  const onPageChange = (newPage: number) => {
    let localNewPage
    if (newPage > pageCount) localNewPage = pageCount
    else if (newPage < 1) localNewPage = 1
    else localNewPage = newPage
    setPage(localNewPage)
  }

  const onMarketsPerPageChange = (currentPage: number, prevRowsPerPageValue: number, newRowsPerPageValue: number) => {
    const rowsPerPageRatio = prevRowsPerPageValue / newRowsPerPageValue
    const newCalculatedPage = Math.floor((currentPage - 1) * rowsPerPageRatio) + 1

    setMarketsPerPage(newRowsPerPageValue)
    onPageChange(newCalculatedPage)
  }

  useEffect(() => {
    setVisibleMarkets(markets.slice((page - 1) * marketsPerPage, Math.min(page * marketsPerPage, markets.length)))
  }, [markets, page, marketsPerPage])

  useEffect(() => {
    setPage(1)
  }, [searchValue])

  return (
    <Column>
      {infoStatus === ApiState.LOADING ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : infoStatus === ApiState.OK ? (
        visibleMarkets.map((market) => (
          <MarketRow key={market.id} market={market} marketInfo={marketsInfo[market.name]} />
        ))
      ) : (
        <h1>error</h1>
      )}
      <FooterWrapper>
        <Footer
          pageCount={pageCount}
          itemsQuantity={markets.length}
          currentPage={page}
          onPageChange={onPageChange}
          rowsPerPage={marketsPerPage}
          onRowsPerPageChange={onMarketsPerPageChange}
        />
      </FooterWrapper>
    </Column>
  )
}

function useMarketsInfo() {
  const { chainId } = useActiveWeb3React()
  const isSupportedChainId = useSupportedChainId()
  const [marketsInfo, setMarketsInfo] = useState<MarketsInfo>({})
  const [infoStatus, setInfoStatus] = useState<ApiState>(ApiState.OK)

  const multiAccountAddress =
    isSupportedChainId && chainId ? MULTI_ACCOUNT_ADDRESS[chainId] : MULTI_ACCOUNT_ADDRESS[FALLBACK_CHAIN_ID]

  const hedger = useHedgerInfo()
  const { baseUrl } = hedger || {}
  const dispatch: AppThunkDispatch = useAppDispatch()

  useEffect(() => {
    setInfoStatus(ApiState.LOADING)
    dispatch(getMarketsInfo({ hedgerUrl: baseUrl, multiAccountAddress }))
      .unwrap()
      .then((res) => {
        setMarketsInfo(res.marketsInfo)
        setInfoStatus(ApiState.OK)
      })
      .catch(() => {
        setMarketsInfo({})
        setInfoStatus(ApiState.ERROR)
      })
  }, [multiAccountAddress, baseUrl, dispatch])

  return { marketsInfo, infoStatus }
}
