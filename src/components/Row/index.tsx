import { Box } from 'rebass/styled-components'
import styled from 'styled-components'

export const Row = styled(Box)<{
  width?: string
  align?: string
  justify?: string
  padding?: string
  border?: string
  gap?: string
  borderRadius?: string
}>`
  width: ${({ width }) => width ?? '100%'};
  display: flex;
  padding: 0;
  gap: ${({ gap }) => gap && `${gap}`};
  align-items: ${({ align }) => align ?? 'center'};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  padding: ${({ padding }) => padding};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
`
export const AutoRow = styled(Row)<{ gap?: string; justify?: string }>`
  flex-wrap: wrap;
  margin: ${({ gap }) => gap && `${gap}`};
  justify-content: ${({ justify }) => justify && justify};
  & > * {
    margin: ${({ gap }) => gap} !important;
  }
`
export const RowBetween = styled(Row)`
  justify-content: space-between;
`
export const RowCenter = styled(Row)`
  justify-content: center;
`
export const RowStart = styled(Row)`
  justify-content: flex-start;
`
export const RowEnd = styled(Row)`
  justify-content: flex-end;
`
export const RowFixed = styled(Row)<{ gap?: string; justify?: string }>`
  width: fit-content;
  margin: ${({ gap }) => gap && `-${gap}`};
`
