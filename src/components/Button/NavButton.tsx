import { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Z_INDEX } from 'theme'
import Image from 'next/image'

import { titleCase } from 'utils/string'
import { PositionType } from 'types/trade'

import { RowCenter } from 'components/Row'
import { ExclamationMark } from 'components/Icons'
import { LongArrow, ShortArrow } from 'components/Icons'
import { ToolTipLeft } from 'components/ToolTip'

const Main = styled(RowCenter)<{ height?: string }>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '48px'};
  cursor: pointer;
  position: relative;
`

const TopWrap = styled(RowCenter)<{
  clicked: boolean
  textColor?: string
  disabled?: boolean
}>`
  font-size: 15px;
  font-weight: 700;
  height: 100%;
  position: relative;
  border-radius: 6px;
  z-index: ${Z_INDEX.deprecated_content};
  border: 1px solid ${({ theme }) => theme.yankeesBlue};
  color: ${({ theme, textColor }) => textColor ?? theme.darkPurple};
  background: ${({ theme }) => theme.color4};

  transition: width, transform 0ms ease-in-out;

  &:hover {
    background: ${({ theme, disabled }) => (disabled ? theme.bgWarning : theme.color4)};
  }

  ${({ clicked }) =>
    clicked &&
    `
    transform: translateY(4px);
  `}

  ${({ theme, disabled }) =>
    disabled &&
    `
    background: ${theme.bgWarning};
    border-color: ${theme.red1};
    cursor: default;
  
  `}
`

const SubWrap = styled.div<{ disabled?: boolean; height?: string }>`
  height: ${({ height }) => height ?? '52px'};
  margin-top: 4px;
  position: absolute;
  width: 100%;
  border-radius: 6px;
  background: ${({ theme }) => theme.yankeesBlue};

  ${({ theme, disabled }) =>
    disabled &&
    `
      background: ${theme.red1};
  `}
`

const IconWrap = styled.div<{ top: string }>`
  position: absolute;
  right: 16px;
  top: ${({ top }) => top ?? '14px'};
`

export default function NavButton({
  onClick,
  ticker,
  positionType,
  textColor,
  tooltip,
  exclamationMark,
  customText,
  icon,
  disabled,
  simpleMode,
  children,
  className,
  width,
  height,
}: {
  onClick?: () => void
  ticker?: string
  positionType?: PositionType
  textColor?: string
  tooltip?: string
  customText?: string
  exclamationMark?: boolean
  icon?: string | null
  disabled?: boolean
  simpleMode?: boolean
  children?: React.ReactNode
  className?: string
  width?: number
  height?: number
}) {
  const [isClicked, setIsClicked] = useState(false)

  const handleOnMouseDown = useCallback(() => {
    setIsClicked((prev) => !prev)
  }, [])

  const handleOnMouseUp = useCallback(() => {
    setIsClicked((prev) => !prev)
    setTimeout(() => {
      if (!disabled && onClick) onClick()
    }, 150)
  }, [disabled, onClick])

  return (
    <Main
      className={className}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
      width={width ? `${width}px` : undefined}
      height={height ? `${height}px` : undefined}
    >
      <TopWrap clicked={isClicked} textColor={textColor} disabled={disabled}>
        {ticker && `${titleCase(positionType ?? '')} ${ticker}`}
        {customText && customText}
        {children}

        {!disabled && !simpleMode ? (
          <IconWrap top={icon ? '10px' : '14px'}>
            {icon ? (
              <Image src={icon} alt={'icon'} />
            ) : positionType === PositionType.LONG ? (
              <LongArrow width={19} height={11} color={'#001426'} style={{ marginLeft: '8px' }} />
            ) : (
              <ShortArrow width={19} height={11} color={'#001426'} style={{ marginLeft: '8px' }} />
            )}
          </IconWrap>
        ) : (
          <IconWrap top={'14px'}>
            {tooltip && (
              <a data-tip data-for={'tooltip'}>
                <ExclamationMark />
                <ToolTipLeft id={'tooltip'} aria-haspopup="true">
                  {customText}
                </ToolTipLeft>
              </a>
            )}
            {!tooltip && exclamationMark && <ExclamationMark />}
          </IconWrap>
        )}
      </TopWrap>
      <SubWrap disabled={disabled} height={height ? `${height + 4}px` : undefined} />
    </Main>
  )
}
