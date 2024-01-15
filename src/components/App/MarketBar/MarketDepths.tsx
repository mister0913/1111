import styled from 'styled-components'

import { useActiveMarket } from 'state/trade/hooks'
import useBidAskPrice from 'hooks/useBidAskPrice'

import { Name, Value } from '.'
import Column from 'components/Column'
import { RowEnd, RowStart } from 'components/Row'
import BlinkingPrice from 'components/App/FavoriteBar/BlinkingPrice'

const MarketInfos = styled(RowStart)`
  gap: 35px;
  flex: 1;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    gap: 10px;
    justify-content: space-between;
    flex-direction: row-reverse;
    width:100%;
  `};
`

const MarketDepth = styled(RowEnd)`
  gap: 20px;
  width: unset;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    justify-content: flex-start;

  `};
`

export default function MarketDepths() {
  const activeMarket = useActiveMarket()
  const { ask, bid, spread } = useBidAskPrice(activeMarket)

  return (
    <MarketInfos>
      <MarketDepth>
        <Column>
          <Name textAlign={'left'}>Spread(bps)</Name>
          <Value textAlign={'left'}>{spread}</Value>
        </Column>
        <Column>
          <Name textAlign={'left'}>Bid</Name>
          <BlinkingPrice data={bid} textSize={'12px'} textAlign={'left'} />
        </Column>
        <Column>
          <Name textAlign={'left'}>Ask</Name>
          <BlinkingPrice data={ask} textSize={'12px'} textAlign={'left'} />
        </Column>
      </MarketDepth>
    </MarketInfos>
  )
}
