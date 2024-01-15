import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import BASED_LOGO from '/public/static/images/header/Logo.png'

const Wrapper = styled.div<{ minHeight?: number; minWidth?: number }>`
  min-width: ${({ minWidth }) => `${minWidth}px`};
  min-height: ${({ minHeight }) => `${minHeight}px`};
`

export default function Logo({ width = 112, height = 43 }: { width?: number; height?: number }) {
  return (
    <Wrapper minHeight={height} minWidth={width}>
      <Image src={BASED_LOGO} width={width} height={height} alt="Based Logo" />
    </Wrapper>
  )
}
