import { useMemo } from 'react'
import styled from 'styled-components'

import { ApiState } from 'types/api'
import { formatDollarAmount } from 'utils/numbers'
import { useActiveMarket } from 'state/trade/hooks'
import { useMarketNotionalCap, useMarketOpenInterest } from 'state/hedger/hooks'

import { Loader } from 'components/Icons'
import MarketInfo from 'components/App/MarketBar/MarketInfo'
import Column from 'components/Column'
import BlinkingPrice from 'components/App/FavoriteBar/BlinkingPrice'
import { Row, RowBetween } from 'components/Row'
import MarketDepths from './MarketDepths'
import MarketFundingRate from './MarketFundingRate'

const Wrapper = styled(Row)`
  min-height: 56px;
  padding: 8px 12px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color2};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: column;   
    min-height: unset;
    gap:16px; 
  `};
`

const DataWrap = styled(Row)`
  height: 100%;
  gap: 20px;
  flex: 2;
  background: ${({ theme }) => theme.color2};

  ${({ theme }) => theme.mediaWidth.upToMedium` 
    & > * {
      &:nth-child(2) {
        display: none;
      }
    }
  `};
`

const HedgerInfos = styled(RowBetween)`
  gap: 35px;
  width: unset;

  ${({ theme }) => theme.mediaWidth.upToMedium` 
    gap: 10px;
    width: 100%;
    & > * {
      &:nth-child(3) {
        display: none;
      }
    }
  `};
`

const Separator = styled.div`
  width: 2px;
  height: 40px;
  margin-right: 2px;
  background: ${({ theme }) => theme.color4};
`

export const Name = styled.div<{ textAlign?: string; textAlignMedium?: string }>`
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 12px;
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
  color: ${({ theme }) => theme.text};
  ${({ theme, textAlignMedium }) => theme.mediaWidth.upToMedium`
    text-align: ${textAlignMedium ?? 'left'};
  `};
`

export const Value = styled.div<{ textAlign?: string; textAlignMedium?: string }>`
  font-weight: 500;
  font-size: 12px;
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
  color: ${({ theme }) => theme.almostWhite};
  ${({ theme, textAlignMedium }) => theme.mediaWidth.upToMedium`
    text-align: ${textAlignMedium ?? 'left'};
  `};
`

export default function MarketBar() {
  const openInterest = useMarketOpenInterest()
  const { marketNotionalCap, marketNotionalCapStatus } = useMarketNotionalCap()
  const activeMarket = useActiveMarket()

  const [used, total] = useMemo(() => [openInterest?.used, openInterest?.total], [openInterest])
  const [notionalCapUsed, totalCap] = useMemo(() => {
    return activeMarket?.name === marketNotionalCap.name && marketNotionalCapStatus !== ApiState.ERROR
      ? [marketNotionalCap?.used, marketNotionalCap?.totalCap]
      : [-1, -1]
  }, [activeMarket?.name, marketNotionalCapStatus, marketNotionalCap])

  return (
    <Wrapper>
      <DataWrap>
        <MarketInfo />
        <Separator />
        <HedgerInfos>
          <Column>
            <Name>Last Price</Name>
            {activeMarket ? (
              <BlinkingPrice market={activeMarket} priceWidth={'66'} />
            ) : (
              <Loader size={'12px'} stroke="#EBEBEC" />
            )}
          </Column>
          <Column>
            <Name textAlignMedium={'right'}>Open Interest</Name>
            <Value textAlignMedium={'right'}>
              {used === -1 ? <Loader size={'12px'} stroke="#EBEBEC" /> : formatDollarAmount(used)} /{' '}
              {total === -1 ? <Loader size={'12px'} stroke="#EBEBEC" /> : formatDollarAmount(total)}
            </Value>
          </Column>
          <Column>
            <Name>{activeMarket?.symbol} Notional Cap</Name>
            <Value>
              {notionalCapUsed === -1 ? <Loader size={'12px'} stroke="#EBEBEC" /> : formatDollarAmount(notionalCapUsed)}{' '}
              / {totalCap === -1 ? <Loader size={'12px'} stroke="#EBEBEC" /> : formatDollarAmount(totalCap)}
            </Value>
          </Column>
          <MarketDepths />
          <MarketFundingRate />
        </HedgerInfos>
      </DataWrap>
    </Wrapper>
  )
}
