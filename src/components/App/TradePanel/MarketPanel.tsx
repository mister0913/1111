import React from 'react'
import styled from 'styled-components'

import { toBN } from 'utils/numbers'

import { COLLATERAL_TOKEN } from 'constants/tokens'
import { getTokenWithFallbackChainId } from 'utils/token'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useActiveMarketPrice } from 'state/trade/hooks'

import { RowBetween, RowEnd } from 'components/Row'
import { InnerCard } from 'components/Card'
import SlippageTolerance from 'components/App/SlippageTolerance'

const PriceWrap = styled(InnerCard)`
  padding-top: 8px;
  border-radius: 6px;

  & > * {
    &:last-child {
      height: 28px;
      margin-top: 12px;
    }
  }
`

const Title = styled.div`
  color: ${({ theme }) => theme.almostWhite};
  font-size: 13px;
  font-weight: 400;
`

const Price = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.almostWhite};
`

export const InputAmount = styled.input.attrs({ type: 'number' })<{ active?: boolean }>`
  border: 0;
  outline: none;
  width: 100%;
  margin-right: 2px;
  margin-left: 2px;
  font-size: 12px;
  background: transparent;
  color: ${({ theme, active }) => (active ? theme.text0 : theme.text2)};

  appearance: textfield;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export default function MarketPanel() {
  const { chainId } = useActiveWeb3React()
  const price = useActiveMarketPrice()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  return (
    <React.Fragment>
      <PriceWrap>
        <RowBetween>
          <Title>Market Price</Title>
          <Price>
            {toBN(price).toFormat()} {collateralCurrency?.symbol}
          </Price>
        </RowBetween>
        <RowBetween>
          <Title>Slippage</Title>
          <RowEnd>
            <SlippageTolerance />
          </RowEnd>
        </RowBetween>
      </PriceWrap>
    </React.Fragment>
  )
}
