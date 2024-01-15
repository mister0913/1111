import React from 'react'
import styled from 'styled-components'

import { Row, RowEnd, RowStart } from 'components/Row'
import { Logo } from 'components/Icons'

const AutoSlippageWrapper = styled(Row)`
  width: 122px;
  height: 28px;
  gap: 3px;
  font-size: 11px;
  font-weight: 400;
  padding: 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.almostWhite};
  background: ${({ theme }) => theme.color2};
`

export default function SlippageTolerance() {
  return (
    <AutoSlippageWrapper>
      <RowStart>Auto slippage</RowStart>
      <RowEnd width={'20%'} style={{ marginTop: '4px' }}>
        <Logo width={32} height={12} />
      </RowEnd>
    </AutoSlippageWrapper>
  )
}
