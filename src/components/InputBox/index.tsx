import React, { useCallback, useMemo } from 'react'
import styled, { useTheme } from 'styled-components'
import { Currency } from '@sushiswap/core-sdk'
import { isMobile } from 'react-device-detect'
import { darken } from 'polished'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useCurrencyBalance } from 'state/wallet/hooks'
import { maxAmountSpend } from 'utils/currency'
import { formatAmount } from 'utils/numbers'

import ImageWithFallback from 'components/ImageWithFallback'
import { NumericalInput } from 'components/Input'
import { RowBetween, RowCenter, RowEnd } from 'components/Row'
import { ChevronDown as ChevronDownIcon, Enter } from 'components/Icons'
import { EnterButton, MaxButton } from 'components/Button'
import Image from 'next/image'

export const Wrapper = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  border-radius: 6px;
  background: ${({ theme }) => theme.color3};
  position: relative;
  padding: 8px 12px;
  padding-bottom: 0px;
`

const NumericalWrapper = styled(RowBetween)`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  color: ${({ theme }) => theme.text0};
  margin-top: 10px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 12px;
    right: 0;
`};
`

export const CurrencySymbol = styled.div<{ color?: string; active?: any }>`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme, color }) => color ?? theme.almostWhite};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 12px;
  `}
`

export const SymbolWrapper = styled.div`
  flex-direction: column;
`

export const EnterBox = styled.div`
  padding: 8px 16px;
  background: transparent;
  margin-bottom: 10px;
  background-color: #44322280;
  color: #e3c2609e;
`

export const CalculationResult = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 3px;
  color: ${({ theme }) => theme.text3};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 12px;
  `}
`

export const RightWrapper = styled.div``

export const BalanceTitle = styled.span`
  color: ${({ theme }) => theme.text};
  margin-right: 4px;
  text-align: right;
  font-size: 13px;
  font-weight: 400;
`

export const LogoWrapper = styled(RowCenter)<{ active?: any }>`
  height: 100%;
  width: 80px;
  min-width: 60px;
  cursor: ${({ active }) => active && 'pointer'};
`

export const ChevronDown = styled(ChevronDownIcon)`
  margin-left: 7px;
  width: 16px;
  color: ${({ theme }) => theme.text1};

  ${({ theme }) => theme.mediaWidth.upToSmall`
      margin-left: 4px;
  `}
`

const Balance = styled(RowEnd)<{ disabled?: boolean }>`
  width: unset;
  margin-left: 5px;
  color: ${({ theme }) => theme.almostWhite};

  &:hover {
    color: ${({ theme, disabled }) => !disabled && darken(0.1, theme.text0)};
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  }
`

const MinBalance = styled(Balance)`
  font-size: 12px;
  background: ${({ theme }) => theme.primaryBlue};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`

export const TextLabel = styled.span`
  font-size: 10px;
  line-height: 14px;
  background: ${({ theme }) => theme.blue2};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Title = styled.div`
  color: ${({ theme }) => theme.almostWhite};
`

export const getImageSize = () => {
  return isMobile ? 35 : 38
}

export function InputBox({
  currency,
  value,
  onChange,
  readOnly,
  symbolColor,
  symbolIcon,
  title,
  max,
  autoFocus,
  disabled,
  balance,
  balanceTitle,
}: {
  currency?: Currency
  value: string
  onChange(values: string): void
  readOnly?: boolean
  symbolColor?: string
  symbolIcon?: string
  title?: string
  max?: boolean
  autoFocus?: boolean
  disabled?: boolean
  balance?: string
  balanceTitle?: string
}) {
  const { account } = useActiveWeb3React()
  const currencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)

  const placeholder = useMemo(() => (disabled ? '0.0' : 'Enter amount'), [disabled])
  const [balanceExact, balanceDisplay] = useMemo(() => {
    if (balance) return [balance, formatAmount(balance, 6, true)]
    return [maxAmountSpend(currencyBalance)?.toExact(), currencyBalance?.toSignificant(6)]
  }, [balance, currencyBalance])

  return (
    <CustomInputBox2
      title={title}
      balanceDisplay={balanceDisplay}
      placeholder={placeholder}
      value={value}
      balanceExact={balanceExact}
      onChange={onChange}
      readOnly={readOnly}
      disabled={disabled}
      max={max}
      symbol={currency?.symbol}
      symbolColor={symbolColor}
      symbolIcon={symbolIcon}
      autoFocus={autoFocus ?? true}
      balanceTitle={balanceTitle}
    />
  )
}

export function CustomInputBox({
  value,
  icon,
  name,
  placeholder,
  balanceTitle,
  balanceDisplay,
  balanceExact,
  onChange,
  onSelect,
  disabled,
  autoFocus,
  max,
}: {
  name: string | undefined
  value: string
  placeholder?: string
  balanceTitle?: string
  balanceDisplay: string | number | undefined
  balanceExact: string | number | undefined
  icon?: string | StaticImageData
  onChange(values: string): void
  onSelect?: () => void
  disabled?: boolean
  autoFocus?: boolean
  max?: boolean
}) {
  const hasMax = max || max === undefined

  const handleClick = useCallback(() => {
    if (!balanceExact || !onChange || disabled || !hasMax) return
    onChange(balanceExact.toString())
  }, [balanceExact, disabled, onChange, hasMax])

  return (
    <Wrapper>
      <RowBetween>
        {icon && (
          <LogoWrapper onClick={onSelect ? () => onSelect() : undefined} active={onSelect ? true : false}>
            <ImageWithFallback src={icon} width={getImageSize()} height={getImageSize()} alt={`${name} icon`} round />
            {onSelect ? <ChevronDown /> : null}
          </LogoWrapper>
        )}
        <CurrencySymbol onClick={onSelect ? () => onSelect() : undefined} active={onSelect ? true : false}>
          {name}
        </CurrencySymbol>
        <Balance disabled={disabled || !hasMax} onClick={handleClick}>
          <BalanceTitle>{balanceTitle || 'Balance'}</BalanceTitle>: {balanceDisplay ? balanceDisplay : '0.00'}
        </Balance>
      </RowBetween>
      <RightWrapper>
        <NumericalWrapper>
          <NumericalInput
            value={value || ''}
            onUserInput={onChange}
            placeholder={placeholder}
            autoFocus={autoFocus}
            disabled={disabled}
          />
          {hasMax && <MaxButton onClick={handleClick}>MAX</MaxButton>}
        </NumericalWrapper>
      </RightWrapper>
    </Wrapper>
  )
}

export function CustomInputBox2({
  value,
  title,
  placeholder,
  symbol,
  symbolColor,
  symbolIcon,
  balanceTitle,
  balanceDisplay,
  balanceExact,
  minBalanceTitle,
  minBalanceDisplay,
  minBalanceExact,
  onChange,
  readOnly,
  disabled,
  autoFocus,
  precision,
  calculationMode = false,
  calculationEnabled,
  calculationLoading,
  onEnterPress,
  max,
  minBalanceMax,
}: {
  title: string | undefined
  value: string
  placeholder?: string
  symbol?: string
  symbolColor?: string
  symbolIcon?: string
  balanceTitle?: string
  balanceDisplay: string | number | undefined
  balanceExact: string | number | undefined
  minBalanceTitle?: string
  minBalanceDisplay?: string | number
  minBalanceExact?: string | number
  icon?: string | StaticImageData
  onChange(values: string): void
  readOnly?: boolean
  disabled?: boolean
  autoFocus?: boolean
  precision?: number
  calculationMode?: boolean
  calculationEnabled?: boolean
  calculationLoading?: boolean
  onEnterPress?: () => void
  max?: boolean
  minBalanceMax?: boolean
}) {
  const theme = useTheme()
  const handleClick = useCallback(() => {
    if (!balanceExact || !onChange || disabled) return
    onChange(balanceExact.toString())
  }, [balanceExact, disabled, onChange])

  const minBalanceHandleClick = useCallback(() => {
    if (!minBalanceExact || !onChange || disabled) return
    onChange(minBalanceExact.toString())
  }, [minBalanceExact, disabled, onChange])

  return (
    <Wrapper>
      <RowBetween>
        <Title>{title}</Title>
        {balanceTitle && (
          <RowEnd>
            <Balance disabled={disabled} onClick={handleClick}>
              <BalanceTitle>{balanceTitle || 'Balance:'} </BalanceTitle> {balanceDisplay ? balanceDisplay : '0.00'}{' '}
              {max && <MaxButton>MAX</MaxButton>}
            </Balance>
            {minBalanceTitle && (
              <MinBalance disabled={disabled} onClick={minBalanceHandleClick}>
                <BalanceTitle>{minBalanceTitle || 'Balance:'} </BalanceTitle>{' '}
                {minBalanceDisplay ? minBalanceDisplay : '0.00'} {minBalanceMax && <MaxButton>MAX</MaxButton>}
              </MinBalance>
            )}
          </RowEnd>
        )}
      </RowBetween>
      <NumericalWrapper>
        <NumericalInput
          readOnly={readOnly}
          value={value || ''}
          onUserInput={onChange}
          placeholder={placeholder}
          autoFocus={autoFocus}
          disabled={disabled}
          precision={precision}
          calculational={calculationEnabled}
          onEnterPress={onEnterPress}
          calculationMode={calculationMode}
          calculationLoading={calculationLoading}
        />
        {calculationMode ? (
          <EnterButton active onClick={onEnterPress} calculationLoading={calculationLoading}>
            {calculationLoading ? (
              <TextLabel>Calculating...</TextLabel>
            ) : (
              <>
                <TextLabel>Press Enter</TextLabel>
                <Enter color={theme.blue2} size={20} style={{ marginLeft: '4px' }} />
              </>
            )}
          </EnterButton>
        ) : (
          symbol && (
            <SymbolWrapper>
              <CurrencySymbol color={symbolColor}>
                {' '}
                {symbolIcon && <Image src={symbolIcon} alt={symbol + '-icon'} width={16} height={16}></Image>} {symbol}{' '}
              </CurrencySymbol>
            </SymbolWrapper>
          )
        )}
      </NumericalWrapper>
    </Wrapper>
  )
}
