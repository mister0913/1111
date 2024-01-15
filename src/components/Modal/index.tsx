import React from 'react'
import styled, { useTheme } from 'styled-components'
import StyledModal from 'styled-react-modal'
import { Z_INDEX } from 'theme'

import { PositionType } from 'types/trade'

import { Close as CloseIcon, LongArrow, ShortArrow } from 'components/Icons'
import { ChevronDown } from 'components/Icons'
import { ThemedText } from 'components/Text'
import { RowBetween } from 'components/Row'

export const BaseModal = StyledModal.styled`
  display: flex;
  flex-flow: column nowrap;
  background: ${({ theme }: { theme: any }) => theme.color2};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: ${Z_INDEX.modal};
  overflow: hidden;
`

export const MobileModal = styled(BaseModal)`
  width: 100vw;
  height: 100vh;
`

export const Modal = styled(BaseModal) <{
  width?: string
}>`
  background: ${({ theme }) => theme.color2};
  width: ${({ width }: { width?: string }) => width ?? '404px'};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    max-height: 350px;
    width: 350px;
    overflow: scroll;
  `};
`

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${Z_INDEX.modalBackdrop};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`

const HeaderWrapper = styled(RowBetween) <{ bgColor?: string }>`
  padding: 12px 12px 0 12px;
  padding-bottom: 0;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.almostWhite};
  background-color: ${({ theme, bgColor }) => bgColor ?? theme.color2};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 10px;
    padding-bottom: 0;
    font-size:12px;
  `};
`

const Close = styled.div`
  width: 24px;
  height: 24px;
  padding: 3px 6px;
  cursor: pointer;
  margin: 2px 2px 1px 0px;
  background: ${({ theme }) => theme.color3};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 6px;
  `};
`

const ChevronLeft = styled(ChevronDown) <{
  open: boolean
}>`
  transform: rotate(90deg);
`

export const ModalHeader = ({
  title,
  positionType,
  onClose,
  onBack,
  hideClose,
  bgColor,
}: {
  title?: string
  positionType?: PositionType
  onClose: () => void
  onBack?: () => void
  hideClose?: boolean
  bgColor?: string
}) => {
  const theme = useTheme()
  return (
    <HeaderWrapper bgColor={bgColor} backgroundColor={bgColor}>
      {onBack && <ChevronLeft onClick={onBack} />}
      {title && (
        <ThemedText.MediumHeader>
          {title}
          {!positionType ? null : positionType === PositionType.LONG ? (
            <LongArrow width={15} height={12} color={theme.green1} style={{ marginLeft: '10px' }} />
          ) : (
            <ShortArrow width={15} height={12} color={theme.red1} style={{ marginLeft: '10px' }} />
          )}
        </ThemedText.MediumHeader>
      )}
      {!hideClose && (
        <Close onClick={onClose}>
          <CloseIcon size={12} />
        </Close>
      )}
    </HeaderWrapper>
  )
}
