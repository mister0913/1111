import React from 'react'
import styled from 'styled-components'

import { toBN } from 'utils/numbers'

import { Quote } from 'types/quote'
import { useMarket } from 'hooks/useMarkets'
import { CustomInputBox2 } from 'components/InputBox'

export const InputAmount = styled.input.attrs({ type: 'number' })<{ active?: boolean }>`
  border: 0;
  outline: none;
  width: 100%;
  margin-right: 2px;
  margin-left: 2px;
  font-size: 12px;
  background: transparent;
  color: ${({ theme }) => theme.text0};

  appearance: textfield;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${({ active, theme }) =>
    active &&
    `
    color: ${theme.text0};
  `}
`

export default function LimitClose({
  quote,
  price,
  setPrice,
  marketPrice,
  symbol,
  balanceTitle,
}: {
  quote: Quote | null
  price: string
  setPrice: (s: string) => void
  marketPrice: string | null | undefined
  symbol?: string
  balanceTitle?: string
}) {
  const { pricePrecision } = useMarket(quote?.marketId) || {}

  return (
    <CustomInputBox2
      title={'Price'}
      symbol={symbol}
      placeholder="0"
      precision={pricePrecision}
      balanceTitle={balanceTitle ?? 'Offer Price:'}
      balanceDisplay={marketPrice && pricePrecision ? toBN(marketPrice).toFixed(pricePrecision) : '0'}
      balanceExact={marketPrice && pricePrecision ? toBN(marketPrice).toFixed(pricePrecision) : '0'}
      onChange={setPrice}
      value={price}
    />
  )
}
