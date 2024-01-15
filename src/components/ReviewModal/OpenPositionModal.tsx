import React, { useCallback, useMemo, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import toast from 'react-hot-toast'
import Image from 'next/image'

import { BN_ZERO, formatAmount, toBN } from 'utils/numbers'
import { DEFAULT_PRECISION, MARKET_ORDER_DEADLINE } from 'constants/misc'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { OrderType, PositionType } from 'types/trade'
import { getTokenWithFallbackChainId } from 'utils/token'

import { useLeverage } from 'state/user/hooks'
import { ApplicationModal } from 'state/application/reducer'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useActiveMarket, useOrderType } from 'state/trade/hooks'
import { useIsHavePendingTransaction } from 'state/transactions/hooks'
import { useModalOpen, useToggleOpenPositionModal } from 'state/application/hooks'

import { useTradeCallback } from 'callbacks/useTrade'
import useTradePage, { useLockedValues, useNotionalValue } from 'hooks/useTradePage'

import Column from 'components/Column'
import { RowCenter } from 'components/Row'
import InfoItem from 'components/InfoItem'
import { DisplayLabel } from 'components/InputLabel'
import { ModalHeader, Modal } from 'components/Modal'
import ErrorButton from 'components/Button/ErrorButton'
import MainButton from 'components/Button/MainButton'
import { DotFlashing } from 'components/Icons'

const Wrapper = styled(Column)`
  gap: 16px;
  padding: 12px;
  overflow-y: scroll;
  height: auto;
  background: ${({ theme }) => theme.color2};
`

const AwaitingWrapper = styled(Column)`
  padding: 24px 0;
`

const SummaryWrap = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text2};
  margin: 20px auto;
  max-width: 350px;
  text-align: center;
`

const ConfirmWrap = styled(SummaryWrap)`
  font-size: 14px;
  margin: 0;
  margin-top: 20px;
`

const LabelsWrapper = styled(Column)`
  gap: 12px;
`

const Data = styled(RowCenter)`
  width: 100%;
  padding: 5px;
  font-size: 12px;
  margin-left: 10px;
  color: ${({ theme }) => theme.text1};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 16px;
  `};
`

const Separator = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.border2};
`

export default function OpenPositionModal({
  positionType,
  data,
  summary,
}: {
  positionType: PositionType
  summary?: string
  data?: string
}) {
  const theme = useTheme()
  const { chainId } = useActiveWeb3React()
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)

  const orderType = useOrderType()
  const market = useActiveMarket()
  const userLeverage = useLeverage()
  const toggleModal = useToggleOpenPositionModal()
  const modalOpen = useModalOpen(ApplicationModal.OPEN_POSITION)
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  const { price, formattedAmounts } = useTradePage()

  const [symbol, asset, pricePrecision] = useMemo(
    () => (market ? [market.symbol, market.asset, market.pricePrecision] : ['', '', DEFAULT_PRECISION]),
    [market]
  )

  const quantityAsset = useMemo(
    () => (toBN(formattedAmounts[1]).isNaN() ? BN_ZERO : toBN(formattedAmounts[1])),
    [formattedAmounts]
  )

  const notionalValue = useNotionalValue(quantityAsset.toString(), price)
  const { total: lockedValue } = useLockedValues(notionalValue)
  const tradingFee = useMemo(() => {
    const notionalValueBN = toBN(notionalValue)
    if (!market || notionalValueBN.isNaN()) return '-'
    return market.tradingFee ? notionalValueBN.times(market.tradingFee).toString() : '0'
  }, [market, notionalValue])

  const info = useMemo(() => {
    const lockedValueBN = toBN(lockedValue)
    return [
      {
        title: 'Locked Value:',
        value: `${lockedValueBN.isNaN() ? '0' : lockedValueBN.toFixed(pricePrecision)} ${collateralCurrency?.symbol}`,
      },
      { title: 'Leverage:', value: `${userLeverage} X` },
      {
        title: 'Open Price:',
        value: `${price === '' ? '-' : orderType === OrderType.MARKET ? 'Market' : price}`,
        valueColor: theme.primaryPink,
      },
      {
        title: 'Platform Fee:',
        value: !toBN(tradingFee).isNaN()
          ? `${formatAmount(toBN(tradingFee).div(2), 3, true)} (OPEN) / ${formatAmount(
              toBN(tradingFee).div(2),
              3,
              true
            )} (CLOSE) ${collateralCurrency?.symbol}`
          : `0 (OPEN) / 0 (CLOSE) ${collateralCurrency?.symbol}`,
      },
      {
        title: 'Order Expire Time:',
        value: `${orderType === OrderType.MARKET ? `${MARKET_ORDER_DEADLINE} seconds` : 'Unlimited'}`,
      },
    ]
  }, [
    lockedValue,
    pricePrecision,
    collateralCurrency?.symbol,
    userLeverage,
    price,
    orderType,
    theme.primaryPink,
    tradingFee,
  ])

  return (
    <Modal isOpen={modalOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
      <ModalHeader onClose={toggleModal} title={`${positionType} ${symbol}-${asset}`} positionType={positionType} />
      {awaitingConfirmation ? (
        <AwaitingWrapper>
          <RowCenter>
            <Image src={'/static/images/etc/SimpleLogo.svg'} alt="Asset" width={72} height={78} />
          </RowCenter>

          <RowCenter>
            <SummaryWrap>{summary}</SummaryWrap>
          </RowCenter>

          <RowCenter>
            <ConfirmWrap>Confirm this transaction in your wallet</ConfirmWrap>
          </RowCenter>
        </AwaitingWrapper>
      ) : (
        <Wrapper>
          <LabelsWrapper>
            <DisplayLabel
              label="Position Value"
              value={toBN(lockedValue).toFixed(pricePrecision)}
              leverage={userLeverage}
              symbol={collateralCurrency?.symbol}
              precision={pricePrecision}
            />

            <DisplayLabel label="Receive" value={formattedAmounts[1]} symbol={symbol} />
          </LabelsWrapper>
          {info.map((info, index) => {
            return <InfoItem label={info.title} amount={info.value} valueColor={info?.valueColor} key={index} />
          })}
          {data && (
            <>
              <Separator />
              <Data>{data}</Data>
            </>
          )}

          {!awaitingConfirmation && (
            <ActionButtons
              symbol={symbol}
              positionType={positionType}
              setAwaitingConfirmation={setAwaitingConfirmation}
            />
          )}
        </Wrapper>
      )}
    </Modal>
  )
}

function ActionButtons({
  symbol,
  positionType,
  setAwaitingConfirmation,
}: {
  symbol: string
  positionType: PositionType
  setAwaitingConfirmation: (value: boolean) => void
}) {
  const { state } = useTradePage()
  const isPendingTxs = useIsHavePendingTransaction()
  const toggleModal = useToggleOpenPositionModal()

  const { callback: tradeCallback, error: tradeCallbackError } = useTradeCallback(positionType)

  const onTrade = useCallback(async () => {
    if (!tradeCallback) {
      toast.error(tradeCallbackError)
      return
    }

    let error = ''
    try {
      setAwaitingConfirmation(true)
      await tradeCallback()
      setAwaitingConfirmation(false)
      toggleModal()
    } catch (e) {
      if (e instanceof Error) {
        error = e.message
      } else {
        console.debug(e)

        error = 'An unknown error occurred.'
      }
    }
    if (error) console.log(error)
    toggleModal()
    setAwaitingConfirmation(false)
  }, [toggleModal, tradeCallback, tradeCallbackError])

  if (isPendingTxs) {
    return (
      <MainButton disabled>
        Transacting <DotFlashing />
      </MainButton>
    )
  }

  if (state) {
    return <ErrorButton state={state} disabled={true} exclamationMark={true} />
  }

  return <MainButton ticker={symbol} positionType={positionType} onClick={onTrade} />
}
