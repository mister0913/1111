import { useMemo } from 'react'
import styled, { useTheme } from 'styled-components'

import { ErrorState, ErrorStateMessages } from 'types/trade'

import { PrimaryButton } from '.'
import { ExclamationMark } from 'components/Icons'
import { ToolTipLeft } from 'components/ToolTip'

const MainButton = styled(PrimaryButton).attrs({
  height: '48px',
})`
  font-weight: 700;
`

const LiquidationButton = styled(PrimaryButton).attrs({
  height: '48px',
})`
  cursor: default;
  font-weight: 700;
  color: ${({ theme }) => theme.red1};
  background: ${({ theme }) => theme.bgWarning};
  &:focus,
  &:hover {
    background: ${({ theme }) => theme.bgLoose};
  }
`

const IconWrap = styled.div`
  position: absolute;
  right: 10px;
`

export default function ErrorButton({
  customText,
  state,
  disabled,
  tooltip,
  exclamationMark,
  liquidationButton,
}: {
  customText?: string
  state: ErrorState
  disabled?: boolean
  tooltip?: string
  exclamationMark?: boolean
  liquidationButton?: boolean
}) {
  const theme = useTheme()
  const text = useMemo(() => {
    if (customText) return customText
    else return ErrorStateMessages[state]
  }, [customText, state])

  return liquidationButton ? (
    <LiquidationButton>
      {text}
      <IconWrap>
        <a data-tip data-for={'PARTIAL_CLOSE_WITH_SLIPPAGE'}>
          <ExclamationMark bg={theme.bgLoose} color={theme.red1} />
          <ToolTipLeft id={'PARTIAL_CLOSE_WITH_SLIPPAGE'} aria-haspopup="true">
            You cannot close this amount via market order, as it may result in direct
            <div>account liquidation. Please choose a lower amount or use a Limit Order</div>
          </ToolTipLeft>
        </a>
      </IconWrap>
    </LiquidationButton>
  ) : (
    <MainButton disabled={disabled}>
      {text}
      <IconWrap>
        {tooltip && (
          <a data-tip data-for={state}>
            <ExclamationMark />
            <ToolTipLeft id={`${state}`} aria-haspopup="true">
              {text}
            </ToolTipLeft>
          </a>
        )}
        {!tooltip && exclamationMark && <ExclamationMark />}
      </IconWrap>
    </MainButton>
  )
}
