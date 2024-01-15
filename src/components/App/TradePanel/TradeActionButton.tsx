import { useEffect, useMemo, useState } from 'react'

import { WEB_SETTING } from 'config'
import { toBN } from 'utils/numbers'
import { DEFAULT_PRECISION } from 'constants/misc'
import { calculateString } from 'utils/calculationalString'
import { ErrorStateMessages, InputField, PositionType } from 'types/trade'
import { ConnectionStatus } from 'state/hedger/types'

import { useAccountPartyAStat, useActiveAccountAddress, useIsTermsAccepted } from 'state/user/hooks'
import { useWebSocketStatus } from 'state/hedger/hooks'
import { useToggleOpenPositionModal } from 'state/application/hooks'
import { useIsHavePendingTransaction } from 'state/transactions/hooks'
import { useSetLimitPrice, useActiveMarket, useSetTypedValue, useSetPositionType } from 'state/trade/hooks'
import { useAccountsLength } from 'hooks/useAccounts'
import useTradePage from 'hooks/useTradePage'

import AnimatedButton from 'components/Button/MainButton'
import { DotFlashing } from 'components/Icons'
import { ContextError, InvalidContext, useInvalidContext } from 'components/InvalidContext'
import { Row } from 'components/Row'

export default function TradeActionButtons(): JSX.Element | null {
  const validatedContext = useInvalidContext()
  const market = useActiveMarket()
  const connectionStatus = useWebSocketStatus()
  const setPositionType = useSetPositionType()
  const { accountLength, loading: accountsLoading } = useAccountsLength()

  const toggleShowTradeInfoModal = useToggleOpenPositionModal()
  const isPendingTxs = useIsHavePendingTransaction()

  const [calculationMode, setCalculationMode] = useState(false)
  const [calculationLoading, setCalculationLoading] = useState(false)

  const setLimitPrice = useSetLimitPrice()
  const setTypedValue = useSetTypedValue()

  const account = useActiveAccountAddress()
  const { allocatedBalance } = useAccountPartyAStat(account)

  const isTermsAccepted = useIsTermsAccepted()

  const { formattedAmounts, state, balance } = useTradePage()

  const [outputTicker, pricePrecision] = useMemo(
    () => (market ? [market.symbol, market.pricePrecision] : ['', DEFAULT_PRECISION]),
    [market]
  )
  function onEnterPress() {
    setCalculationLoading(true)
    setCalculationMode(false)
    const result = calculateString(formattedAmounts[0], balance, pricePrecision, '1')
    setTypedValue(result, InputField.PRICE)
    setCalculationLoading(false)
  }

  //reset amounts when user switches to another orderType or market
  useEffect(() => {
    setLimitPrice('')
    setTypedValue('', InputField.PRICE)
  }, [market]) // eslint-disable-line react-hooks/exhaustive-deps
  if (validatedContext !== ContextError.VALID) {
    return <InvalidContext />
  }

  // Pass if it is null or undefined
  if (market?.rfqAllowed === false) {
    return <AnimatedButton disabled exclamationMark customText="RFQ is not allowed for this market" />
  }

  if (!accountsLoading && accountLength < 1) {
    return <AnimatedButton disabled>Create account & Deposit to Open position on {outputTicker}</AnimatedButton>
  }

  if (toBN(allocatedBalance).lte(0)) {
    return <AnimatedButton disabled>Deposit to Open position on {outputTicker}</AnimatedButton>
  }

  if (calculationLoading) {
    return (
      <AnimatedButton disabled>
        Waiting for Calculation
        <DotFlashing />
      </AnimatedButton>
    )
  }
  if (isPendingTxs) {
    return (
      <AnimatedButton disabled>
        Transacting <DotFlashing />
      </AnimatedButton>
    )
  }

  if (WEB_SETTING.showSignModal && !isTermsAccepted) {
    return <AnimatedButton disabled={true} customText={'Accept Terms of Service'}></AnimatedButton>
  }

  if (calculationMode) {
    return <AnimatedButton onClick={onEnterPress}>Calculate Amount</AnimatedButton>
  }

  if (connectionStatus !== ConnectionStatus.OPEN) {
    return <AnimatedButton disabled={true} exclamationMark={true} customText={'Hedger disconnected'} />
  }

  if (state) {
    return <AnimatedButton disabled={true} exclamationMark={true} customText={ErrorStateMessages[state]} />
  }

  const onClick = (positionType: PositionType) => {
    setPositionType(positionType)
    toggleShowTradeInfoModal()
  }

  return (
    <Row gap={'12px'}>
      <AnimatedButton
        ticker={outputTicker}
        onClick={() => onClick(PositionType.LONG)}
        positionType={PositionType.LONG}
      />
      <AnimatedButton
        ticker={outputTicker}
        onClick={() => onClick(PositionType.SHORT)}
        positionType={PositionType.SHORT}
      />
    </Row>
  )
}
