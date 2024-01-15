import React from 'react'

import USDC_ICON from '/public/static/images/tokens/USDC.svg'

import { Account } from 'types/user'
import { Quote } from 'types/quote'

import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import { NotificationDetails } from 'state/notifications/types'
import { useMarket } from 'hooks/useMarkets'

import { PartiallyFillTitle } from './styles'
import BaseItem from 'components/Notifications/Cards/BaseCard'
import ShimmerAnimation from 'components/ShimmerAnimation'

export default function Default({
  notification,
  account,
  quote,
  loading,
}: {
  notification: NotificationDetails
  account: Account
  quote?: Quote
  loading?: boolean
}): JSX.Element {
  const { modifyTime, actionStatus, failureMessage, lastSeenAction, quoteId } = notification
  const { symbol, asset } = useMarket(quote?.marketId) || {}
  const token1 = useCurrencyLogo(symbol)

  return (
    <BaseItem
      title={
        <PartiallyFillTitle>
          {loading ? (
            <ShimmerAnimation width={'55px'} height={'14px'} />
          ) : (
            <div>
              {symbol}-{asset}{' '}
            </div>
          )}
          <div> - Q{quoteId}</div>
        </PartiallyFillTitle>
      }
      text={`${failureMessage} - ${lastSeenAction} - ${actionStatus}`}
      token1={token1}
      token2={USDC_ICON}
      timestamp={modifyTime}
      accountName={account.name}
      loading={loading}
    />
  )
}
