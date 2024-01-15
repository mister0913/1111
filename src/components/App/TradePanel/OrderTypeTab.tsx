import { useEffect } from 'react'
import { OrderType } from 'types/trade'

import { useOrderType, useSetLimitPrice, useSetOrderType } from 'state/trade/hooks'

import { Tab } from 'components/Tab'

export default function OrderTypeTab() {
  const orderType = useOrderType()
  const setOrderType = useSetOrderType()
  const setLimitPrice = useSetLimitPrice()

  useEffect(() => {
    setLimitPrice('')
  }, [orderType]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Tab
      tabOptions={[OrderType.LIMIT, OrderType.MARKET]}
      activeOption={orderType}
      onChange={(option: string) => setOrderType(option as OrderType)}
    />
  )
}
