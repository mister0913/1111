import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import DEFAULT_TOKEN from '/public/static/images/tokens/default-token.svg'

import { formatPrice, toBN } from 'utils/numbers'

import { NumericalInput } from 'components/Input'
import { RowBetween, RowEnd, RowStart } from 'components/Row'
import { ToolTip } from 'components/ToolTip'
import { Info as InfoIcon } from 'components/Icons'

export const Wrapper = styled(RowBetween)`
  width: 100%;
  font-size: 12px;
  height: 44px;
  font-weight: 400;
  white-space: nowrap;
  position: relative;
  border-radius: 6px;
  background: ${({ theme }) => theme.color3};
`

const NumericalWrapper = styled(RowBetween)`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  height: 100%;
  position: relative;
  margin-left: 12px;
  padding: 0px 14px 0px 12px;
  border-radius: 0px 6px 6px 0px;
  color: ${({ theme }) => theme.almostWhite};
  background: ${({ theme }) => theme.color3};
  border-left: 2px solid ${({ theme }) => theme.color2};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 12px;
    right: 0;
  `}
`

export const CurrencySymbol = styled(RowEnd)`
  font-size: 16px;
  font-weight: 500;
  width: unset;
  gap: 3px;
  color: ${({ theme }) => theme.almostWhite};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    // font-size: 12px;
  `}
`

const StyledInfoIcon = styled(InfoIcon)`
  color: ${({ theme }) => theme.text2};
  width: 12px;
  height: 12px;
  margin-bottom: -2px;
  cursor: default;
`

const LabelWrap = styled(RowStart)`
  padding-left: 13px;
  font-weight: 400;
  font-size: 12px;
  width: 115px;
  gap: 4px;
  color: ${({ theme }) => theme.almostWhite};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    white-space: normal;
  `}
`

const DataWrap = styled(RowEnd)`
  gap: 4px;
  height: 100%;
  font-size: 16px;
  max-width: 282px;
  font-weight: 500;
  padding-right: 10px;
  white-space: normal;
  color: ${({ theme }) => theme.text0};
  background: ${({ theme }) => theme.color3};
  border-left: 1px solid ${({ theme }) => theme.color2};
  & > * {
    &:first-child {
      color: ${({ theme }) => theme.text5};
    }
  }
`

const LabelsWrap = styled.div`
  border-radius: 6px;
  background: ${({ theme }) => theme.color3};
`

export interface IInputLabel {
  label: string | undefined
  value: string
  placeholder?: string
  symbol?: string
  logo?: string
  tooltip?: string
  onChange(values: string): void
  disabled?: boolean
  autoFocus?: boolean
  precision?: number
}

export function InputLabel({ labels }: { labels: IInputLabel[] }) {
  return (
    <LabelsWrap>
      {labels.map((label: IInputLabel, i) => {
        return (
          <Wrapper key={i}>
            <LabelWrap>
              <div>{label.label}</div>
              <a data-tip data-for={label}>
                {label.tooltip && <StyledInfoIcon />}
                <ToolTip id={label.label} aria-haspopup="true">
                  {label.tooltip}
                </ToolTip>
              </a>
            </LabelWrap>
            <NumericalWrapper>
              <NumericalInput
                value={label.value && label.value !== 'NaN' ? label.value : ''}
                onUserInput={label.onChange}
                placeholder={label.placeholder}
                autoFocus={label.autoFocus}
                disabled={label.disabled}
                precision={label.precision}
              />
              <CurrencySymbol>
                <Image src={label.logo ?? DEFAULT_TOKEN} width={16} height={16} alt={`icon`} />
                {label.symbol}
              </CurrencySymbol>
            </NumericalWrapper>
          </Wrapper>
        )
      })}
    </LabelsWrap>
  )
}

export function DisplayLabel({
  value,
  label,
  tooltip,
  leverage,
  symbol,
  precision,
}: {
  value: number | string
  label: string | undefined
  leverage?: number
  symbol?: string
  tooltip?: string
  precision?: number
}) {
  const amount = isNaN(Number(value)) ? 0 : value
  return (
    <Wrapper>
      <LabelWrap>
        <div>{label}</div>
        <a data-tip data-for={label}>
          {tooltip && <StyledInfoIcon />}
          <ToolTip id={label} aria-haspopup="true">
            {tooltip}
          </ToolTip>
        </a>
      </LabelWrap>

      <DataWrap>
        <div>{leverage && `${amount} x ${leverage} = `}</div>
        <div>{leverage ? formatPrice(toBN(amount).times(leverage), precision) : value}</div>

        <CurrencySymbol>{symbol}</CurrencySymbol>
      </DataWrap>
    </Wrapper>
  )
}
