import { useMemo } from 'react'

import { DEFAULT_PRECISION } from 'constants/misc'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { RoundMode, formatPrice, toBN } from 'utils/numbers'
import { getTokenWithFallbackChainId } from 'utils/token'
import { InputField, OrderType } from 'types/trade'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useActiveMarket, useActiveMarketPrice, useLimitPrice, useOrderType, useSetTypedValue } from 'state/trade/hooks'

import InfoItem from 'components/InfoItem'
import { useLeverage } from 'state/user/hooks'

export default function MinPositionInfo() {
  const { chainId } = useActiveWeb3React()
  const setTypedValue = useSetTypedValue()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const leverage = useLeverage()
  const limitPrice = useLimitPrice()
  const orderType = useOrderType()

  const market = useActiveMarket()
  const marketPrice = useActiveMarketPrice()
  const [outputTicker, pricePrecision, quantityPrecision, minAcceptableQuoteValue] = useMemo(
    () =>
      market
        ? [
            market.symbol,
            market.pricePrecision,
            market.quantityPrecision,
            market.minAcceptableQuoteValue,
            market.maxLeverage,
          ]
        : ['', DEFAULT_PRECISION, DEFAULT_PRECISION, 10],
    [market]
  )
  const [minPositionValue, minPositionQuantity, minPositionAmount] = useMemo(() => {
    const orderPrice = orderType === OrderType.LIMIT ? limitPrice : marketPrice
    const quantity = toBN(minAcceptableQuoteValue)
      .times(leverage)
      .div(orderPrice)
      .toFixed(quantityPrecision, RoundMode.ROUND_UP)

    const value = toBN(quantity)
      .times(toBN(orderPrice).div(leverage))
      .times(leverage)
      .toFixed(pricePrecision, RoundMode.ROUND_UP)

    const minAmount = toBN(quantity).times(toBN(orderPrice).div(leverage)).toFixed(pricePrecision, RoundMode.ROUND_UP)

    if (toBN(value).isNaN()) return ['-', '-', '-']

    return [value, quantity, minAmount]
  }, [marketPrice, minAcceptableQuoteValue, pricePrecision, quantityPrecision, leverage, limitPrice, orderType])

  return (
    <>
      <InfoItem
        label={'Minimum amount:'}
        balanceExact={formatPrice(minPositionAmount, pricePrecision, false, RoundMode.ROUND_UP)}
        amount={`${minPositionAmount} ${collateralCurrency?.symbol}`}
        onClick={(value) => setTypedValue(value, InputField.PRICE)}
      />
      <InfoItem
        label={'Minimum position size:'}
        balanceExact={formatPrice(minPositionValue, pricePrecision, false, RoundMode.ROUND_UP)}
        amount={`${minPositionValue} ${collateralCurrency?.symbol} (${
          toBN(minPositionQuantity).eq(0) ? '-' : minPositionQuantity
        } ${outputTicker})`}
        onClick={(value) => setTypedValue(value, InputField.PRICE)}
      />
    </>
  )
}
