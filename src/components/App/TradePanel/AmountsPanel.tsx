import { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { mix } from 'polished'

import USDC_ICON from '/public/static/images/tokens/USDC.svg'

import { WEB_SETTING } from 'config'

import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import { calculateString, calculationPattern } from 'utils/calculationalString'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { APP_NAME, DEFAULT_PRECISION, MAX_LEVERAGE_VALUE, MIN_LEVERAGE_VALUE } from 'constants/misc'
import { getTokenWithFallbackChainId } from 'utils/token'
import { formatPrice, toBN } from 'utils/numbers'
import { InputField, OrderType } from 'types/trade'

import { useLeverage, useSetLeverageCallback } from 'state/user/hooks'
import { useOrderType, useActiveMarket, useSetTypedValue, useGetLockedPercentages } from 'state/trade/hooks'

import useTradePage from 'hooks/useTradePage'
import useDebounce from 'lib/hooks/useDebounce'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { LeverageIcon } from 'components/Icons'
import { InputAmount } from 'components/ReviewModal'
import LimitPriceBox from 'components/App/TradePanel/LimitPanel'
import { IInputLabel, InputLabel } from 'components/InputLabel'
import MarketPriceBox from 'components/App/TradePanel/MarketPanel'
import { LeverageSlider } from 'components/App/TradePanel/LeverageSlider'
import { CustomInputBox2 as CollateralInput } from 'components/InputBox'
import { RowStart } from 'components/Row'
import { useTour } from '@reactour/tour'
import { Step } from 'components/Tour/Step'

const CollateralWrap = styled.div`
  & > * {
    &:first-child {
      margin-bottom: 6px;
      border-radius: 6px 6px 0px 0px;
    }
    &:nth-child(2) {
      position: relative;
      margin: 0 auto;
      margin-top: -20px;
    }
    &:nth-child(3) {
      margin-top: -13px;
    }
  }
`

const LeverageWrap = styled.div`
  font-weight: 400;
  font-size: 12px;
  padding: 8px 10px;
  height: 70px;
  border-radius: 0px 0px 6px 6px;
  background: ${({ theme }) => theme.color3};
  color: ${({ theme }) => theme.almostWhite};
`

const LeverageValue = styled(RowStart)`
  width: 74px;
  height: 28px;
  font-size: 12px;
  padding: 8px;
  padding-left: 12px;
  border-radius: 2px;
  background: ${({ theme }) => theme.color3};
  border: 1px solid ${({ theme }) => theme.text};
`

const LeverageInput = styled(InputAmount)`
  font-weight: 500;
  font-size: 14px;
  text-align: left;
  background: 'transparent';
  color: ${({ theme }) => theme.almostWhite};
`

export default function AmountsPanel() {
  const { chainId } = useActiveWeb3React()
  const { setIsOpen, setSteps, setCurrentStep } = useTour()

  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  const market = useActiveMarket()

  const orderType = useOrderType()

  const userLeverage = useLeverage()
  const setLeverageCallback = useSetLeverageCallback()

  const [leverage, setLeverage] = useState(userLeverage)
  const debouncedLeverage = useDebounce(leverage, 10) as number
  const lockedParamsLeverage = useDebounce(leverage, 300) as number
  const [customLeverage, setCustomLeverage] = useState<string | number>(leverage)
  const [calculationMode, setCalculationMode] = useState(false)
  const [calculationLoading, setCalculationLoading] = useState(false)
  const setTypedValue = useSetTypedValue()

  const getLockedPercentages = useGetLockedPercentages(lockedParamsLeverage)

  useEffect(() => {
    const controller = new AbortController()
    if (market && lockedParamsLeverage)
      getLockedPercentages({ signal: controller.signal, headers: [['App-Name', APP_NAME]] })
    return () => {
      controller.abort()
    }
  }, [market, lockedParamsLeverage, getLockedPercentages])

  const { formattedAmounts, balance } = useTradePage()

  const [pricePrecision, maxLeverage] = useMemo(
    () => (market ? [market.pricePrecision, market.maxLeverage] : [DEFAULT_PRECISION, MAX_LEVERAGE_VALUE]),
    [market]
  )

  useEffect(() => {
    if (leverage > maxLeverage) setLeverage(5)
  }, [market, maxLeverage]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setLeverageCallback(debouncedLeverage)
    setCustomLeverage(debouncedLeverage)
  }, [debouncedLeverage, setLeverageCallback])

  useEffect(() => {
    if (customLeverage) {
      setCustomLeverage(debouncedLeverage)
    }
  }, [debouncedLeverage, customLeverage])

  const mixedColor = mix(leverage / maxLeverage, '#E23FBE', '#738EEC')

  const handleCustomLeverage = useCallback(
    (e: any) => {
      const value = e.currentTarget.value
      if (!value) {
        setCustomLeverage('')
        setLeverage(1)
      }
      if (value >= MIN_LEVERAGE_VALUE && value <= maxLeverage) {
        setLeverage(parseInt(value))
        setCustomLeverage(parseInt(value))
      }
    },
    [maxLeverage]
  )

  function onChangeCollateral(value: string) {
    if (calculationPattern.test(value)) {
      setCalculationMode(true)
    } else if (calculationMode) {
      setCalculationMode(false)
    }
    setTypedValue(value, InputField.PRICE)
  }

  function onEnterPress() {
    setCalculationLoading(true)
    setCalculationMode(false)
    const result = calculateString(formattedAmounts[0], balance, pricePrecision, '1')
    setTypedValue(result, InputField.PRICE)
    setCalculationLoading(false)
  }

  useEffect(() => {
    if (!setSteps) {
      return
    }

    if (toBN(balance).lte(0)) {
      return
    }

    if (localStorage.getItem('tour-part4') === 'done') {
      return
    }

    localStorage.setItem('tour-part1', 'done')
    localStorage.setItem('tour-part2', 'done')
    localStorage.setItem('tour-part3', 'done')
    localStorage.setItem('tour-part4', 'done')

    setSteps([
      {
        selector: '.tour-step-5',
        content: (
          <Step
            title="Ready to trade"
            content={
              <>
                Congratulations, you&apos;re now ready to trade. For more in depth information about how to trade on
                Based Markets, please see our{' '}
                <a href="https://docs.based.markets/" target="_blank" rel="noreferrer">
                  documentation
                </a>
              </>
            }
          />
        ),
        position: 'center',
        highlightedSelectors: [],
      },
    ])
    setCurrentStep(0)
    setIsOpen(true)
  }, [setSteps, balance])

  return (
    <>
      {orderType == OrderType.LIMIT ? <LimitPriceBox /> : <MarketPriceBox />}

      <CollateralWrap>
        <CollateralInput
          value={formattedAmounts[0]}
          precision={pricePrecision}
          title="Amount"
          symbol={collateralCurrency?.symbol}
          balanceTitle="Available:"
          balanceDisplay={toBN(balance).gt(0) ? formatPrice(balance, pricePrecision, true) : '0.0'}
          balanceExact={toBN(balance).gt(0) ? formatPrice(balance, pricePrecision) : '0'}
          max={true}
          calculationEnabled={WEB_SETTING.calculationalInput}
          calculationMode={calculationMode}
          calculationLoading={calculationLoading}
          onChange={onChangeCollateral}
          onEnterPress={onEnterPress}
        />

        <LeverageValue>
          <LeverageInput
            value={!customLeverage || toBN(customLeverage).lt(0) ? '' : customLeverage}
            onChange={(e) => handleCustomLeverage(e)}
            placeholder={customLeverage ? customLeverage.toString() : '1'}
            onBlur={() => {
              if (!customLeverage) setCustomLeverage(MIN_LEVERAGE_VALUE)
            }}
          />
          <LeverageIcon width={10} height={10} />
        </LeverageValue>

        <LeverageWrap>
          <div>Leverage</div>
          <LeverageSlider value={leverage} maxLeverage={maxLeverage} onChange={setLeverage} mixedColor={mixedColor} />
        </LeverageWrap>
      </CollateralWrap>
      <ReceiveLabel />
    </>
  )
}

function ReceiveLabel() {
  const { chainId } = useActiveWeb3React()
  const market = useActiveMarket()
  const userLeverage = useLeverage()
  const setTypedValue = useSetTypedValue()
  const { formattedAmounts } = useTradePage()
  const debouncedLeverage = useDebounce(userLeverage, 10) as number
  const marketLogo = useCurrencyLogo(market?.symbol)

  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  const [outputTicker, quantityPrecision] = useMemo(
    () => (market ? [market.symbol, market.quantityPrecision] : ['', DEFAULT_PRECISION]),
    [market]
  )

  const labels: IInputLabel[] = [
    {
      label: 'Position Value',
      value: `${
        toBN(formattedAmounts[0]).isNaN() || toBN(debouncedLeverage).isNaN()
          ? 0
          : toBN(formattedAmounts[0]).times(debouncedLeverage).toFormat()
      } (${toBN(formattedAmounts[0]).isNaN() ? '0' : toBN(formattedAmounts[0]).toFormat()} x ${debouncedLeverage})`,
      onChange: (value: string) => console.log(value),
      symbol: collateralCurrency.symbol,
      precision: quantityPrecision,
      logo: USDC_ICON,
    },
    {
      label: 'Receive',
      value: formattedAmounts[1],
      onChange: (value: string) => setTypedValue(value, InputField.QUANTITY),
      symbol: outputTicker,
      precision: quantityPrecision,
      logo: marketLogo,
    },
  ]

  return <InputLabel labels={labels} />
}
