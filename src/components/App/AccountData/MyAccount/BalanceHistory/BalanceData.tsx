import { useState } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'

import { getTokenWithFallbackChainId } from 'utils/token'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { BALANCE_HISTORY_ITEMS_NUMBER } from 'constants/misc'

import { BalanceHistoryData, ConnectionStatus } from 'state/user/types'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import {
  useActiveAccountAddress,
  useBalanceHistory,
  useGetBalanceHistoryCallback,
  useUpnlWebSocketStatus,
} from 'state/user/hooks'

import BalanceItem from './BalanceItem'
import { DotFlashing } from 'components/Icons'
import Column from 'components/Column'
import { usePositionValue } from 'hooks/usePositionOverview'
import { usePositionsQuotes } from 'state/quotes/hooks'

const ScrollableDiv = styled(Column)<{ dataLength: number }>`
  width: 100%;
  height: ${({ dataLength }) => 360 + (dataLength > 4 ? (dataLength - 4) * 30 : 0)}px;

  ${({ theme, dataLength }) => theme.mediaWidth.upToLarge`
      height: ${650 + (dataLength > 3 ? (dataLength - 3) * 30 : 0)}px;
  `}
  ${({ theme }) => theme.mediaWidth.upToMedium`
      height: 360px;
  `}

  overflow: scroll;
`

export default function BalanceData() {
  const { chainId } = useActiveWeb3React()
  const activeAccountAddress = useActiveAccountAddress()
  const getBalanceHistory = useGetBalanceHistoryCallback()
  const [skip, setSkip] = useState<number>(BALANCE_HISTORY_ITEMS_NUMBER)
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const { balanceHistory: data, hasMoreHistory: hasMore } = useBalanceHistory()

  const upnlWebSocketStatus = useUpnlWebSocketStatus()
  const loading = upnlWebSocketStatus === ConnectionStatus.CLOSED
  const currentItems = loading
    ? [...Array(4)]
    : Object.values(data ?? {})
        .filter((i) => i.account.toLowerCase() === activeAccountAddress?.toLowerCase())
        .sort((a: BalanceHistoryData, b: BalanceHistoryData) => Number(b.timestamp) - Number(a.timestamp))

  const { quotes: positions } = usePositionsQuotes()
  const positionsInfo = usePositionValue(positions)
  const positionsLength = positionsInfo.length

  const loadMore = () => {
    if (hasMore) {
      setSkip((prevSkip) => prevSkip + BALANCE_HISTORY_ITEMS_NUMBER)
      getBalanceHistory(chainId, activeAccountAddress, skip)
    }
  }

  // if (error) {
  //   // Handle error
  // }

  return (
    <ScrollableDiv dataLength={positionsLength} id="scrollableDiv">
      {/*Put the scroll bar always on the bottom*/}
      <InfiniteScroll
        dataLength={currentItems.length ?? 0}
        next={loadMore}
        hasMore={hasMore ?? false}
        scrollableTarget="scrollableDiv"
        loader={
          <h4>
            <DotFlashing />
          </h4>
        }
      >
        {currentItems.map((item, index) => (
          <BalanceItem key={index} data={item || {}} currency={collateralCurrency?.symbol} loading={loading} />
        ))}
      </InfiniteScroll>
    </ScrollableDiv>
  )
}
