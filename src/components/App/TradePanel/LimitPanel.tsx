import { COLLATERAL_TOKEN } from 'constants/tokens'
import { toBN } from 'utils/numbers'
import { getTokenWithFallbackChainId } from 'utils/token'

import useTradePage from 'hooks/useTradePage'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { useActiveMarket, useActiveMarketPrice, useSetLimitPrice } from 'state/trade/hooks'

import { CustomInputBox2 } from 'components/InputBox'

export default function LimitPricePanel(): JSX.Element | null {
  const { chainId } = useActiveWeb3React()
  const { price } = useTradePage()
  const market = useActiveMarket()
  const setLimitPrice = useSetLimitPrice()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const marketPrice = useActiveMarketPrice()

  return (
    <>
      <CustomInputBox2
        value={price}
        onChange={setLimitPrice}
        precision={market?.pricePrecision}
        title={`Price (${collateralCurrency?.symbol})`}
        symbol={collateralCurrency?.symbol}
        balanceDisplay={toBN(marketPrice).toFormat()}
        balanceExact={marketPrice}
        balanceTitle={'Market Price:'}
      />
    </>
  )
}
