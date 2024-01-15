import React from 'react'

import USDC_ICON from '/public/static/images/tokens/USDC.svg'

import { Account } from 'types/user'
import { Quote } from 'types/quote'

import { NotificationMessages, NotificationDetails } from 'state/notifications/types'

import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import { useMarket } from 'hooks/useMarkets'

import { PartiallyFillText, PartiallyFillTitle } from './styles'
import BaseItem from 'components/Notifications/Cards/BaseCard'
import ShimmerAnimation from 'components/ShimmerAnimation'

export default function SeenCard({
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
  const { marketId, orderType } = quote || {}
  const { quoteId, modifyTime, lastSeenAction } = notification
  const { symbol, asset } = useMarket(marketId) || {}
  const token1 = useCurrencyLogo(symbol)

  const text = lastSeenAction !== null ? NotificationMessages[lastSeenAction] : ''

  return (
    <>
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
            <div>
              {' '}
              - Q{quoteId} | {orderType}
            </div>
          </PartiallyFillTitle>
        }
        text={
          <PartiallyFillText>
            <div>&#34;{text}&#34; received</div>
          </PartiallyFillText>
        }
        token1={token1}
        token2={USDC_ICON}
        timestamp={modifyTime}
        accountName={account.name}
        loading={loading}
      />
    </>
  )
}
