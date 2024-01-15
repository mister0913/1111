import React from 'react'
import styled, { useTheme } from 'styled-components'

import useCopyClipboard from 'lib/hooks/useCopyClipboard'
import { Copy as CopyIcon } from 'components/Icons'
import { RowStart } from 'components/Row'

const Wrapper = styled(RowStart)`
  color: ${({ theme }) => theme.almostWhite};
  flex-flow: row nowrap;
  gap: 5px;
  width: unset;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`

const TextWrapper = styled.div`
  margin-bottom: 5px;
`

export default function Copy({
  toCopy,
  text,
  placement = 'left',
  noFeedback,
}: {
  toCopy: string
  text?: any
  placement?: 'left' | 'right'
  noFeedback?: boolean
}): JSX.Element {
  const [isCopied, setCopied] = useCopyClipboard()
  const theme = useTheme()

  return isCopied ? (
    <Wrapper>
      <TextWrapper>{placement == 'right' && !noFeedback && 'Copied!'}</TextWrapper>
      <CopyIcon size={12} color={theme.blue} style={{ transform: 'translateY(-1px)' }} />
      <TextWrapper>{placement == 'left' && !noFeedback && 'Copied!'}</TextWrapper>
    </Wrapper>
  ) : (
    <Wrapper onClick={() => setCopied(toCopy)}>
      <TextWrapper>{placement == 'right' && text}</TextWrapper>
      <CopyIcon size={12} color={theme.blue} style={{ transform: 'translateY(-1px)' }} />
      <TextWrapper>{placement == 'left' && text}</TextWrapper>
    </Wrapper>
  )
}
