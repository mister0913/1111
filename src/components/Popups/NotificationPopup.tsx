import React from 'react'
import styled, { useTheme } from 'styled-components'

import { Quote } from 'types/quote'
import { useGetExistedQuoteByIdsCallback } from 'state/quotes/hooks'
import { NotificationDetails, NotificationType } from 'state/notifications/types'

import LIQUIDATION_ALERT_ICON from '/public/static/images/etc/RedErrorTriangle.svg'

import { useGetQuoteByIds } from 'hooks/useQuotes'

import { Row, RowEnd, RowStart } from 'components/Row'
import NotificationSummary from 'components/Summaries/NotificationSummary'
import ImageWithFallback from 'components/ImageWithFallback'
import NotificationPopupIcon from './NotificationPopupIcon'

const Wrapper = styled(Row)<{ border?: string; bg?: string }>`
  /* height: 40px; */
  /* padding: 11px 16px; */
  padding: 7px 16px;
  color: ${({ theme }) => theme.text0};
  background: ${({ theme, bg }) => (bg ? bg : theme.bg4)};
  border: 1px solid ${({ theme, border }) => (border ? border : theme.primaryBlue)};
`

export default function NotificationPopup({
  content,
  removeThisPopup,
}: {
  content: NotificationDetails
  removeThisPopup: () => void
}) {
  const theme = useTheme()
  const { quoteId, notificationType } = content
  const existedQuoteCallback = useGetExistedQuoteByIdsCallback()
  const existedQuote = existedQuoteCallback(quoteId)
  const { quotes, loading } = useGetQuoteByIds([Number(quoteId)])
  const quoteData = existedQuote ? existedQuote : !loading ? quotes[0] : ({} as Quote)

  const [bg, border] =
    notificationType === NotificationType.LIQUIDATION_ALERT
      ? [theme.bgLoose, theme.red1]
      : notificationType === NotificationType.EXPIRED_ORDER || notificationType === NotificationType.HEDGER_ERROR
      ? [theme.bgWarning, theme.warning]
      : []

  return (
    <Wrapper bg={bg} border={border}>
      <RowStart>
        <NotificationSummary notification={content} />
      </RowStart>
      <RowEnd width={'35%'} onClick={removeThisPopup} style={{ cursor: 'pointer' }}>
        {notificationType === NotificationType.LIQUIDATION_ALERT ? (
          <ImageWithFallback src={LIQUIDATION_ALERT_ICON} width={25} height={22} alt={`icon`} />
        ) : (
          <NotificationPopupIcon quote={quoteData} />
        )}
      </RowEnd>
    </Wrapper>
  )
}
