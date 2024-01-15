import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { toast } from 'react-hot-toast'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { TransferTab } from 'types/transfer'
import { getRemainingTime } from 'utils/time'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { getTokenWithFallbackChainId } from 'utils/token'
import { formatCurrency, formatPrice, toBN } from 'utils/numbers'
import { ApplicationModal } from 'state/application/reducer'

import { useAccountPartyAStat, useActiveAccountAddress } from 'state/user/hooks'
import { useTransferCollateral } from 'callbacks/useTransferCollateral'
import { useModalOpen } from 'state/application/hooks'

import { RowBetween, RowCenter } from 'components/Row'
import { DotFlashing } from 'components/Icons'
import AnimatedButton from 'components/Button/MainButton'

const RemainingWrap = styled(RowCenter)<{ cursor?: string }>`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.almostWhite};
  color: ${({ theme }) => theme.white};
  height: 40px;
  font-size: 12px;
  height: 40px;
  border-radius: 6px;
  cursor: ${({ cursor }) => cursor ?? 'progress'};
`

const RemainingBlock = styled.div<{ width?: string }>`
  background: ${({ theme }) => theme.blue};
  height: 100%;
  left: 0;
  bottom: 0;
  position: absolute;
  border-radius: 6px 0px 0px 6px;
  width: ${({ width }) => width ?? 'unset'};
`

const Text = styled(RowBetween)<{ filling?: boolean }>`
  justify-content: ${({ filling }) => (filling ? 'space-between' : 'center')};
  color: ${({ theme }) => theme.text2};
  padding: 0 12px;
  font-weight: 500;
  font-size: 12px;
  z-index: 9;
`

const TimerText = styled.span`
  color: ${({ theme }) => theme.warning};
`

function Timer() {
  const [state, setState] = useState(false)

  const activeAccountAddress = useActiveAccountAddress()
  const { withdrawCooldown, cooldownMA } = useAccountPartyAStat(activeAccountAddress)
  const { hours, seconds, minutes } = getRemainingTime(toBN(withdrawCooldown).plus(cooldownMA).times(1000).toNumber())

  useEffect(() => {
    // for forcing component to re-render every second
    const interval = setInterval(() => {
      setState((prevState) => !prevState)
    }, 500)
    return () => {
      clearInterval(interval)
    }
  }, [state])

  return (
    <TimerText>
      {hours.toString().padStart(2, '0')} : {minutes.toString().padStart(2, '0')} :{' '}
      {seconds.toString().padStart(2, '0')}
    </TimerText>
  )
}

export default function WithdrawCooldown({ formatedAmount, text }: { formatedAmount: boolean; text?: string }) {
  const { chainId } = useActiveWeb3React()
  const activeAccountAddress = useActiveAccountAddress()
  const { accountBalance, withdrawCooldown, cooldownMA } = useAccountPartyAStat(activeAccountAddress)

  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const { callback: transferBalanceCallback, error: transferBalanceError } = useTransferCollateral(
    formatPrice(accountBalance, collateralCurrency?.decimals),
    TransferTab.WITHDRAW
  )
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)

  const currentTimestamp = Math.floor(Date.now() / 1000)
  const remainingPercent = useMemo(() => {
    const cooldownRemainPercent = toBN(currentTimestamp).minus(withdrawCooldown).div(cooldownMA).times(100)
    return cooldownRemainPercent.gte(0) && cooldownRemainPercent.lte(100) ? cooldownRemainPercent.toFixed(0) : null
  }, [cooldownMA, currentTimestamp, withdrawCooldown])
  const { diff } = getRemainingTime(toBN(withdrawCooldown).plus(cooldownMA).times(1000).toNumber())

  const showWithdrawBarModal = useModalOpen(ApplicationModal.WITHDRAW_BAR)
  const showWithdrawModal = useModalOpen(ApplicationModal.WITHDRAW)

  const handleAction = useCallback(async () => {
    if (!showWithdrawBarModal && !showWithdrawModal) return

    if (!transferBalanceCallback) {
      toast.error(transferBalanceError)
      return
    }

    try {
      setAwaitingConfirmation(true)
      await transferBalanceCallback()
      setAwaitingConfirmation(false)
    } catch (e) {
      setAwaitingConfirmation(false)
      if (e instanceof Error) {
        console.log(e.message)
      } else {
        console.error(e)
      }
    }
  }, [showWithdrawBarModal, showWithdrawModal, transferBalanceCallback, transferBalanceError])

  const fixedAccountBalance = formatPrice(accountBalance, collateralCurrency?.decimals)

  if (toBN(fixedAccountBalance).isGreaterThan(0)) {
    if (diff > 0) {
      return (
        <RemainingWrap>
          <Text filling>
            <span>
              Withdraw {fixedAccountBalance} {collateralCurrency.symbol}
            </span>
            <Timer />
          </Text>
          <RemainingBlock width={`${remainingPercent}%`} />
        </RemainingWrap>
      )
    } else {
      const balance = formatedAmount
        ? formatPrice(fixedAccountBalance, 2, true)
        : formatCurrency(fixedAccountBalance, 4, true)

      if (awaitingConfirmation) {
        return (
          <RemainingWrap cursor={'default'}>
            <Text>
              {text ?? `Withdraw ${balance} ${collateralCurrency?.symbol}`}
              <DotFlashing />
            </Text>
            <RemainingBlock width={`100%`} />
          </RemainingWrap>
        )
      }
      return (
        <AnimatedButton
          onClick={handleAction}
          customText={text ?? `Withdraw ${balance} ${collateralCurrency?.symbol}`}
          simpleMode
          width={132}
          height={33}
        />
      )
    }
  } else {
    return null
  }
}
