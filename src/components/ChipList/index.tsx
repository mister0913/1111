import styled, { useTheme } from 'styled-components'

const ChipWrapper = styled.div<{ width?: string; height?: string; color?: string; gap?: string }>`
  display: flex;
  flex-grow: ${({ gap }) => (gap ? '1' : '0.2')};
  margin-right: ${({ gap }) => (gap ? gap : 'initial')};
  width: ${({ width }) => (width ? width : 'fit-content')};
  height: ${({ height }) => (height ? height : '')};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color5};
  background: ${({ theme, color }) => (color ? color : theme.color4)};
  padding: ${({ height, width }) => (height && width ? '0' : '3px 15px 3px 16px')};

  &:last-child {
    margin-right: ${({ gap }) => (gap ? '0' : 'initial')};
  }

  &:hover {
    cursor: pointer;
  }
`
const ChipText = styled.div<{ size?: string; color?: string }>`
  color: ${({ theme, color }) => (color ? color : theme.tempPink)};
  font-size: ${({ size }) => (size ? size : '13px')};
  font-weight: 400;
  word-wrap: break-word;
`

const Container = styled.div<{ width?: string; height?: string; gap?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '100%')};
`

interface ChipSize {
  width: string
  height: string
}

export default function ChipList({
  values,
  value,
  gap,
  chipSize,
  color,
  textSize,
  textColor,
  width,
  height,
  onChange,
}: {
  values: string[]
  value?: string
  gap?: string
  chipSize?: ChipSize
  color?: string
  textSize?: string
  textColor?: string
  width?: string
  height?: string
  onChange(value: string): void
}) {
  const theme = useTheme()
  return (
    <Container width={width} height={height}>
      {values &&
        values.map((chip, index) => {
          return (
            <Chip
              text={chip}
              gap={gap}
              chipSize={chipSize}
              textSize={textSize}
              textColor={textColor}
              color={color}
              key={index}
              onClick={(v) => {
                if (value) value = v
                onChange(v)
              }}
            ></Chip>
          )
        })}
    </Container>
  )
}

export function Chip({
  text,
  gap,
  chipSize,
  color,
  textSize,
  textColor,
  onClick,
}: {
  text: string
  gap?: string
  chipSize?: ChipSize
  color?: string
  textColor?: string
  textSize?: string
  onClick(value: string): void
}) {
  return (
    <>
      <ChipWrapper
        onClick={() => {
          onClick(text)
        }}
        color={color}
        height={chipSize?.height}
        width={chipSize?.width}
        gap={gap}
      >
        <ChipText color={textColor} size={textSize}>
          {text}
        </ChipText>
      </ChipWrapper>
    </>
  )
}
