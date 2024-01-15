import { useMemo } from 'react'
import styled from 'styled-components'

import { BN_ZERO, formatAmount, toBN } from 'utils/numbers'
import { OrderType } from 'types/trade'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { getTokenWithFallbackChainId } from 'utils/token'

import useDebounce from 'lib/hooks/useDebounce'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useActiveMarket, useLimitPrice, useOrderType } from 'state/trade/hooks'
import useTradePage, { useLockedValues, useNotionalValue } from 'hooks/useTradePage'

import InfoItem from 'components/InfoItem'
import { Column } from 'components/Column'
import { RowBetween, RowEnd } from 'components/Row'
import { useLeverage } from 'state/user/hooks'

const Wrapper = styled(Column)`
  gap: 12px;
`

const PositionWrap = styled(RowBetween)`
  font-size: 12px;
  font-weight: 400;
  padding: 0px 3px;
  white-space: nowrap;
  color: ${({ theme }) => theme.text3};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 10px;
  `};
`

const PositionValue = styled(RowEnd)`
  gap: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.text3};
  & > * {
    &:last-child {
      font-weight: 500;
      color: ${({ theme }) => theme.almostWhite};
    }
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 10px;
  `};
`

const Name = styled.div`
  color: ${({ theme }) => theme.text};
`

export default function TradeOverview() {
  const { chainId } = useActiveWeb3React()
  const market = useActiveMarket()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const limitPrice = useLimitPrice()
  const orderType = useOrderType()

  const { price: markPrice, formattedAmounts } = useTradePage()

  const price = useMemo(
    () => (orderType === OrderType.MARKET ? markPrice : limitPrice),
    [orderType, markPrice, limitPrice]
  )

  const quantityAsset = useMemo(
    () => (toBN(formattedAmounts[1]).isNaN() ? BN_ZERO : toBN(formattedAmounts[1])),
    [formattedAmounts]
  )
  const notionalValue = useNotionalValue(quantityAsset.toString(), price)
  const { cva, lf } = useLockedValues(notionalValue)
  const tradingFee = useMemo(
    () => (market?.tradingFee ? toBN(notionalValue).times(market.tradingFee).toString() : '0'),
    [notionalValue, market]
  )
  const userLeverage = useLeverage()
  const debouncedLeverage = useDebounce(userLeverage, 10) as number

  return (
    <>
      <Wrapper>
        <PositionWrap>
          <Name>Liquidation Price:</Name>
          <PositionValue>
            <div>{`${
              toBN(formattedAmounts[0]).isNaN() ? '0' : toBN(formattedAmounts[0]).toFormat()
            } x ${debouncedLeverage} =`}</div>
            <div>
              {`${
                toBN(formattedAmounts[0]).isNaN() || toBN(debouncedLeverage).isNaN()
                  ? 0
                  : toBN(formattedAmounts[0]).times(debouncedLeverage).toFormat()
              } ${collateralCurrency?.symbol}`}
            </div>
          </PositionValue>
        </PositionWrap>

        <InfoItem
          label="Maintenance Margin (CVA):"
          amount={`${!toBN(cva).isNaN() && !toBN(lf).isNaN() ? formatAmount(toBN(cva).plus(lf)) : '0'} ${
            collateralCurrency?.symbol
          }`}
          // tooltip="Maintenance Margin"
        />
        <InfoItem
          label="Platform Fee:"
          amount={`${
            !toBN(tradingFee).isNaN()
              ? `${formatAmount(toBN(tradingFee).div(2), 3, true)} (OPEN) / ${formatAmount(
                  toBN(tradingFee).div(2),
                  3,
                  true
                )} (CLOSE) ${collateralCurrency?.symbol}`
              : `0 (OPEN) / 0 (CLOSE) ${collateralCurrency?.symbol}`
          }`}
          // tooltip="Platform Fee"
        />
      </Wrapper>
    </>
  )
}
