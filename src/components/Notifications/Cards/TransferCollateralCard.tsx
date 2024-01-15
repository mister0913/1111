import React from 'react'

import DEPOSIT_USDC_ICON from '/public/static/images/etc/DepositUSDC.svg'
import WITHDRAW_USDC_ICON from '/public/static/images/etc/WithdrawUSDC.svg'

import { COLLATERAL_TOKEN } from 'constants/tokens'
import { Account } from 'types/user'
import { TransferTab } from 'types/transfer'
import { getTokenWithFallbackChainId } from 'utils/token'

import { NotificationDetails } from 'state/notifications/types'

import BaseItem from 'components/Notifications/Cards/BaseCard'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

export default function TransferCollateralCard({
  notification,
  account,
}: {
  notification: NotificationDetails
  account: Account
  loading?: boolean
}): JSX.Element {
  const { chainId } = useActiveWeb3React()
  const { modifyTime, transferAmount, transferType } = notification
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const icon = transferType === TransferTab.DEPOSIT ? DEPOSIT_USDC_ICON : WITHDRAW_USDC_ICON
  const text = transferType === TransferTab.DEALLOCATE ? `${transferType} submitted.` : `${transferType} successful.`

  return (
    <BaseItem
      title={`${transferAmount} ${collateralCurrency?.symbol} ${transferType}`}
      text={text}
      icon={icon}
      timestamp={modifyTime}
      accountName={account.name}
    />
  )
}
