import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import SYMMETRIAL_ICON from '/public/static/images/header/SymmetrialX.svg'

import { ExternalLink } from 'components/Link'
import { RowCenter } from 'components/Row'
import { APP_URL } from 'constants/misc'
import { RowStart } from 'components/Row'
import { Logo } from 'components/Icons'

const Wrapper = styled(RowCenter)`
  width: fit-content;

  &:hover {
    cursor: pointer;
  }

  & > div {
    &:first-child {
      margin-right: 10px;
    }
  }
`

const TextWrapper = styled(RowStart)`
  ${({ theme }) => theme.mediaWidth.upToMedium`
  flex-direction: column;
  align-items: flex-start;
`};
`

const SymmetrialText = styled.div`
  gap: 4px;
  font-size: 13px;
  font-weight: 400;
  margin: 6px 4px 0px 4px;
  color: ${({ theme }) => theme.almostWhite};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 10px;
  `};
`

export default function NavLogo() {
  return (
    <div>
      <Wrapper>
        <ExternalLink href={APP_URL} target="_self" passHref>
          <Logo />
        </ExternalLink>
        <TextWrapper>
          <ExternalLink href="https://symm.io">
            <SymmetrialText>
              Powered by <Image src={SYMMETRIAL_ICON} width={'16px'} height={'12px'} alt="Symmetrial Logo" /> SYMMIO
            </SymmetrialText>
          </ExternalLink>
        </TextWrapper>
      </Wrapper>
    </div>
  )
}
