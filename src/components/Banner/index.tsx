import React from 'react'
import styled from 'styled-components'

import { Info } from 'components/Icons'
import { Close as CloseIcon } from 'components/Icons'

const Container = styled.div`
  margin: 0px 8px;
`

const Wrapper = styled.div<{ bg?: string }>`
  width: 100%;
  display: flex;
  font-size: 12px;
  justify-content: center;
  margin-top: 1px;
  border-radius: 4px;
  background: ${({ theme, bg }) => (bg ? (bg === 'gray' ? theme.color4 : bg) : theme.color4)};
`

const Text = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  margin: 8px 24px;
  color: ${({ theme }) => theme.almostWhite};
`

const CloseIconWrapper = styled.button`
  position: absolute;
  padding: 5px;
  right: 25px;
  cursor: pointer;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    right: 6px;
  `}
`

const InfoIcon = styled(Info)`
  color: ${({ theme }) => theme.almostWhite};
  margin-top: 6px;
  margin-right: -15px;
  cursor: default !important;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-left: 6px;
  `}
`

export function Banner({
  text,
  onClose,
  bg,
  hasInfoIcon,
}: {
  text: string | JSX.Element
  onClose?: (status: boolean) => void
  bg?: string
  hasInfoIcon?: boolean
}) {
  return (
    <Wrapper bg={bg}>
      {hasInfoIcon && <InfoIcon size={20} />}
      <Text>{text}</Text>
      {onClose && (
        <CloseIconWrapper onClick={() => onClose(false)}>
          <CloseIcon size={12} color={'black'} />
        </CloseIconWrapper>
      )}
    </Wrapper>
  )
}

export default function WrapperBanner() {
  const showBanner = localStorage.getItem('risk_warning') === 'true' ? false : true

  if (!showBanner) return <></>

  return <Container></Container>
}
