import React from 'react'
import styled from 'styled-components'

import USDC_ICON from '/public/static/images/tokens/USDC.svg'
import DEFAULT_TOKEN from '/public/static/images/tokens/default-token.svg'

import { Quote } from 'types/quote'

import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import { useMarket } from 'hooks/useMarkets'

import Logos from 'components/Notifications/Logos'
import { RowEnd, RowStart } from 'components/Row'

const Wrapper = styled(RowStart)<{ bg?: string; border?: string }>`
  width: ${({ width }) => width ?? '98px'};
  height: 24px;
  padding-left: 13px;
  font-size: 10px;
  font-style: normal;
  border-radius: 12px;
  background: ${({ theme, bg }) => (bg ? bg : theme.bg5)};
  color: ${({ theme }) => theme.text1};

  ${({ border }) =>
    border &&
    `
    border: 1px dashed ${border};
  `}
`
export default function NotificationPopupIcon({ quote }: { quote?: Quote }) {
  const { marketId, orderType } = quote || {}
  const { symbol } = useMarket(marketId) || {}
  const token1 = useCurrencyLogo(symbol)

  return (
    <Wrapper>
      {orderType}

      <RowEnd width={'100%'}>
        <Logos img1={token1 ?? DEFAULT_TOKEN} img2={USDC_ICON} />
      </RowEnd>
    </Wrapper>
  )
}
