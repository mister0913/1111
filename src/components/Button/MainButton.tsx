import { useCallback, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Z_INDEX } from 'theme'
import Image from 'next/image'

import { titleCase } from 'utils/string'
import { PositionType } from 'types/trade'

import { RowCenter } from 'components/Row'
import { ExclamationMark, LongArrow, ShortArrow } from 'components/Icons'
import { ToolTipLeft } from 'components/ToolTip'

const Main = styled(RowCenter) <{ height?: string }>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '48px'};
  cursor: pointer;
  position: relative;
`

const TopWrap = styled(RowCenter) <{
  clicked: boolean
  textColor?: string
  bgColor: string
  borderColor?: string
  hoverColor?: string
  longOrShort: boolean
  disabled?: boolean
}>`
  font-size: 15px;
  font-weight: 700;
  height: 100%;
  position: relative;
  border-radius: 6px;
  z-index: ${Z_INDEX.deprecated_content};
  color: ${({ theme, textColor }) => textColor ?? theme.black}; 
  background: ${({ bgColor }) => bgColor};

  transition: width, transform 0ms ease-in-out;

  &:hover {
    background: ${({ theme, longOrShort, disabled, hoverColor }) =>
    disabled
      ? theme.color4
      : hoverColor
        ? hoverColor
        : longOrShort
          ? theme.brilliantLavender
          : theme.lightSkyBlue};
  }

  ${({ clicked }) =>
    clicked &&
    `
    transform: translateY(4px);
  `}

  ${({ theme, disabled }) =>
    disabled &&
    `
    color: ${theme.text};
    background: ${theme.color4};
    cursor: default;
  
  `}
`

const SubWrap = styled.div<{ longOrShort: boolean; disabled?: boolean; height?: string; borderColor?: string }>`
  height: ${({ height }) => height ?? '52px'};
  margin-top: 4px;
  position: absolute;
  width: 100%;
  border-radius: 6px;
  background: ${({ theme, longOrShort, borderColor }) =>
    borderColor ?? (longOrShort ? theme.darkPink : theme.darkBlue)};

  ${({ theme, disabled }) =>
    disabled &&
    `
      background: ${theme.color3};
  `}
`

const IconWrap = styled.div<{ top: string }>`
  position: absolute;
  right: 16px;
  top: ${({ top }) => top ?? '14px'};
`

export default function MainButton({
  onClick,
  ticker,
  positionType,
  textColor,
  bgColor,
  borderColor,
  hoverColor,
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
  style,
}: {
  onClick?: () => void
  ticker?: string
  positionType?: PositionType
  textColor?: string
  bgColor?: string
  borderColor?: string
  hoverColor?: string
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
  style?: React.CSSProperties
}) {
  const theme = useTheme()
  const [isClicked, setIsClicked] = useState(false)
  const longOrShort = positionType === PositionType.SHORT

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
      style={style}
    >
      <TopWrap
        clicked={isClicked}
        textColor={textColor}
        bgColor={bgColor ?? (longOrShort ? theme.pink : theme.blue)}
        borderColor={borderColor}
        hoverColor={hoverColor}
        longOrShort={longOrShort}
        disabled={disabled}
      >
        {ticker && `${titleCase(positionType ?? '')} ${ticker}`}
        {customText && customText}
        {children}

        {!disabled && !simpleMode ? (
          <IconWrap top={icon ? '10px' : '14px'}>
            {icon ? (
              <Image width={28} height={28} src={icon} alt={'icon'} />
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
      <SubWrap
        longOrShort={longOrShort}
        disabled={disabled}
        borderColor={borderColor}
        height={height ? `${height + 4}px` : undefined}
      />
    </Main>
  )
}
