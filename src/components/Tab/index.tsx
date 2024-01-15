import styled from 'styled-components'
import { RowCenter, RowStart } from 'components/Row'
import { lighten } from 'polished'
import Image from 'next/image'

export const TabWrapper = styled(RowCenter)<{ outerBorder?: boolean; hasBackground?: boolean }>`
  gap: 12px;
  width: unset;
  padding: 0px 12px;
  font-size: 16px;
  font-weight: 400;
  overflow: hidden;
  color: ${({ theme }) => theme.text0};

  background: ${({ theme, hasBackground }) => (hasBackground ? theme.color2 : undefined)};

  ${({ outerBorder, theme }) =>
    outerBorder &&
    `
    border: 1px solid ${theme.border1};
  `}
`

export const TabButton = styled(RowCenter)<{
  active: boolean
  fontFamily?: string
  fontSize?: string
  borderColor?: string
  borderSize?: string
  activeColor?: string
  width?: string
  height?: string
  borderRadius?: string
  backgroundColor?: string
  style?: React.CSSProperties
}>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '40px')};
  position: relative;
  text-align: center;
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : 'initial')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  overflow: hidden;
  border-style: solid;
  border-width: ${({ borderSize }) => (borderSize ? borderSize : '0')};
  border-color: ${({ borderColor }) => (borderColor ? borderColor : '')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '6px')};
  font-weight: ${({ active }) => (active ? 700 : 400)};
  color: ${({ active, theme }) => (active ? theme.almostWhite : theme.text)};
  background: ${({ active, theme }) => (active ? theme.color4 : theme.color3)};

  ${({ active, theme, activeColor, borderSize }) =>
    active &&
    `
    border:${borderSize ? borderSize : '1px'} solid ${activeColor ? activeColor : theme.color4};
  `}
  &:hover {
    cursor: ${({ active }) => (active ? 'default' : 'pointer')};
    background: ${({ active, theme }) => (active ? theme.color4 : lighten(0.02, theme.color3))};
  }
`

const TabButtonIconWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: 15px;
`

export const Option = styled.div<{ active?: boolean }>`
  width: fit-content;
  color: ${({ theme }) => theme.text1};
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  padding: 4px 0px 8px 0px;

  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.green1};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
  &:hover {
    cursor: pointer;
    color: ${({ theme, active }) => (active ? theme.gradLight : theme.text1)};
  }
`
type TabIcons = Record<string, string>

export function Tab({
  hasBackground = true,
  tabOptions,
  activeOption,
  outerBorder,
  icons,
  width,
  height,
  fontSize,
  fontFamily,
  borderRadius,
  borderSize,
  borderColor,
  activeColor,
  onChange,
}: {
  hasBackground?: boolean
  tabOptions: string[]
  activeOption: string
  outerBorder?: boolean
  icons?: TabIcons
  width?: string
  height?: string
  fontSize?: string
  fontFamily?: string
  borderRadius?: string
  borderSize?: string
  borderColor?: string
  activeColor?: string
  onChange: (tab: string) => void
}): JSX.Element {
  return (
    <TabWrapper hasBackground={hasBackground} outerBorder={outerBorder}>
      {tabOptions.map((tab, i) => (
        <TabButton
          key={i}
          active={tab === activeOption}
          activeColor={activeColor}
          width={width}
          height={height}
          fontFamily={fontFamily}
          fontSize={fontSize}
          borderRadius={borderRadius}
          borderSize={borderSize}
          borderColor={borderColor}
          onClick={() => onChange(tab)}
        >
          {tab}
          {icons && icons.hasOwnProperty(tab) && (
            <TabButtonIconWrapper>
              <Image src={icons[tab]} width={'28'} height={'28'} alt={'tab icon'} />
            </TabButtonIconWrapper>
          )}
        </TabButton>
      ))}
    </TabWrapper>
  )
}

export function TabModal({
  tabOptions,
  activeOption,
  onChange,
  outerBorder,
  ...rest
}: {
  tabOptions: string[]
  activeOption: string
  onChange: (tab: string) => void
  outerBorder?: boolean
  [x: string]: any
}): JSX.Element {
  return (
    <TabWrapper width={'100%'} justifyContent={'space-between'} outerBorder={outerBorder} {...rest}>
      {tabOptions.map((tab, i) => (
        <TabButton key={i} active={tab === activeOption} onClick={() => onChange(tab)}>
          <div>{tab}</div>
        </TabButton>
      ))}
    </TabWrapper>
  )
}

export function GradientTabs({
  tabOptions,
  activeOption,
  onChange,
}: {
  tabOptions: string[]
  activeOption: string
  onChange: (tab: string) => void
}) {
  return (
    <RowStart style={{ gap: '16px' }}>
      {tabOptions.map((option, index) => (
        <Option key={index} active={option === activeOption} onClick={() => onChange(option)}>
          {option}
        </Option>
      ))}
    </RowStart>
  )
}

export function TabModalJSX({
  tabOptions,
  activeOption,
  onChange,
  outerBorder,
  ...rest
}: {
  tabOptions: { label: string; content: string | JSX.Element }[]
  activeOption: string
  onChange: (tab: string) => void
  outerBorder?: boolean
  [x: string]: any
}): JSX.Element {
  return (
    <TabWrapper width={'100%'} justifyContent={'space-between'} outerBorder={outerBorder} {...rest}>
      {tabOptions.map((tab, i) => (
        <TabButton key={i} active={tab.label === activeOption} onClick={() => onChange(tab.label)}>
          <div>{tab.content}</div>
        </TabButton>
      ))}
    </TabWrapper>
  )
}
