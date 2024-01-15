import React, { useMemo } from 'react'
import styled, { useTheme } from 'styled-components'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import { MAX_LEVERAGE_VALUE, MIN_LEVERAGE_VALUE } from 'constants/misc'

const Wrapper = styled.div`
  margin-top: 10px;
  padding: 0 5px;
  .rc-slider-mark {
    font-size: 10px;
  }
  .rc-slider-mark-text-active:last-chid {
    color: green;
  }
`

export function LeverageSlider({
  value,
  maxLeverage,
  onChange,
  mixedColor,
}: {
  value: number
  maxLeverage: number
  onChange: any
  mixedColor: string
}) {
  const marks = useMemo(() => {
    if (maxLeverage === MAX_LEVERAGE_VALUE) {
      return { '1': '1', 5: '5', 10: '10', 15: '15', 20: '20', 25: '25', 30: '30', 35: '35', 40: '40' }
    }

    const range = (start: number, stop: number, step = maxLeverage < 10 ? 1 : Math.floor(maxLeverage / 10)) =>
      Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step).reduce(
        (a, v) => ({ ...a, [v]: v, [maxLeverage]: maxLeverage }),
        {}
      )

    return range(1, maxLeverage)
  }, [maxLeverage])
  const theme = useTheme()
  return (
    <Wrapper>
      <Slider
        min={MIN_LEVERAGE_VALUE}
        max={maxLeverage}
        step={1}
        marks={marks}
        value={value}
        trackStyle={{
          backgroundColor: theme.text,
          height: 4,
        }}
        dotStyle={{
          borderRadius: '4px',
          height: '8px',
          width: '8px',
          backgroundColor: theme.color2,
          borderColor: theme.color2,
        }}
        handleStyle={{
          borderColor: theme.text,
          borderWidth: '2px',
          opacity: 1,
          height: 16,
          width: 16,
          marginTop: -6,
          borderRadius: 20,
          boxShadow: 'none',
          backgroundColor: theme.color2,
        }}
        railStyle={{ width: 'calc(100% + 8px)', marginLeft: '-4px', background: theme.color2 }}
        activeDotStyle={{
          borderRadius: '4px',
          height: '8px',
          width: '8px',
          backgroundColor: theme.text,
          borderColor: theme.text,
        }}
        onChange={onChange}
      />
    </Wrapper>
  )
}
