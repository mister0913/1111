import styled from 'styled-components'
import { RowCenter, RowStart } from 'components/Row'
import { Column } from 'components/Column'

export const Wrapper = styled.div`
  overflow-y: scroll;
  margin-bottom: 50px;
  background: ${({ theme }) => theme.color2};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-bottom: 44px;
  `};
`

export const BodyWrap = styled(Column)`
  background: ${({ theme }) => theme.color2};
  gap: 1px;
`

export const PositionTypeWrap = styled(RowCenter)`
  width: 40px;
  height: 40px;
`

export const LeverageWrap = styled(RowCenter)<{ liquidatePending?: boolean }>`
  width: unset;
  height: 16px;
  padding: 2px 8px;
  margin-left: 8px;
  font-weight: 600;
  background: ${({ theme, liquidatePending }) => (liquidatePending ? theme.red1 : theme.bg4)};
  color: ${({ theme, liquidatePending }) => (liquidatePending ? theme.text0 : theme.primaryPink)};
`

export const EmptyRow = styled(Column)`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.text2};
  background: ${({ theme }) => theme.color2};
`

export const PnlValue = styled.div<{
  color?: string
  size?: string
}>`
  color: ${({ theme, color }) => color ?? theme.text0};
  ${({ size }) =>
    size &&
    `
  font-size: ${size};
`}

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 10px;
  `};
`

export const MarketName = styled(RowStart)`
  width: unset;
  & > * {
    &:first-child {
      color: ${({ theme }) => theme.text0};
    }
    &:last-child {
      color: ${({ theme }) => theme.text1};
    }
  }
  &:hover {
    text-decoration: underline;
  }
`

export const QuoteStatusValue = styled.div<{
  liq: boolean
  expired: boolean
}>`
  color: ${({ theme, liq, expired }) => (liq ? theme.red1 : expired ? theme.warning : theme.text1)};
`
