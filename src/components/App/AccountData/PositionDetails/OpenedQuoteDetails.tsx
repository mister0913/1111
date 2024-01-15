import { useTheme } from 'styled-components'
import React, { useEffect, useState } from 'react'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import useFetchFundingRate, { shouldPayFundingRate, useGetPaidAmount } from 'lib/hooks/useFundingRate'

import { ApiState } from 'types/api'
import { PositionType } from 'types/trade'
import { Quote, QuoteStatus } from 'types/quote'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { formatTimestamp, getRemainingTime } from 'utils/time'
import { getTokenWithFallbackChainId } from 'utils/token'
import { formatAmount, toBN, formatCurrency } from 'utils/numbers'

import { FundingRateData } from 'state/hedger/types'
import { useMarketData } from 'state/hedger/hooks'
import { useMarket } from 'hooks/useMarkets'
import useBidAskPrice from 'hooks/useBidAskPrice'
import {
  useCheckQuoteIsExpired,
  useLockedMargin,
  useQuoteLeverage,
  useQuoteSize,
  useQuoteUpnlAndPnl,
} from 'hooks/useQuotes'
import { useNotionalValue } from 'hooks/useTradePage'

import { RowEnd, Row as RowComponent } from 'components/Row'
import ClosePendingDetails from './ClosedSizeDetails/ClosePendingDetails'
import ClosedAmountDetails from './ClosedSizeDetails/ClosedAmountDetails'
import { Loader, LongArrow, ShortArrow } from 'components/Icons'
import BlinkingPrice from 'components/App/FavoriteBar/BlinkingPrice'
import { PositionActionButton } from 'components/Button'
import {
  Wrapper,
  MarketName,
  Leverage,
  QuoteData,
  PositionInfoBox,
  TopWrap,
  PositionPnl,
  ContentWrapper,
  DataWrap,
  Label,
  Value,
  Row,
  Chevron,
  RowPnl,
  FlexColumn,
} from 'components/App/AccountData/PositionDetails/styles'
import PositionDetailsNavigator from './PositionDetailsNavigator'

export default function OpenedQuoteDetails({
  quote,
  platformFee,
  buttonText,
  disableButton,
  onClickButton,
  mobileVersion = false,
}: {
  quote: Quote
  platformFee: string
  buttonText?: string
  disableButton?: boolean
  onClickButton?: (event: React.MouseEvent<HTMLDivElement>) => void
  mobileVersion: boolean
}): JSX.Element {
  const theme = useTheme()
  const { chainId } = useActiveWeb3React()
  const {
    id,
    positionType,
    marketId,
    openedPrice,
    quoteStatus,
    avgClosedPrice,
    createTimestamp,
    statusModifyTimestamp,
  } = quote
  const market = useMarket(marketId)
  const { symbol, name, asset, pricePrecision } = market || {}
  const { ask: askPrice, bid: bidPrice } = useBidAskPrice(market)
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)
  const marketData = useMarketData(name)
  const quoteSize = useQuoteSize(quote)
  const leverage = useQuoteLeverage(quote)
  const lockedAmount = useLockedMargin(quote)
  const notionalValue = useNotionalValue(quoteSize, marketData?.markPrice || 0)
  const closePositionValue = toBN(avgClosedPrice).times(quoteSize)
  const [upnl, pnl] = useQuoteUpnlAndPnl(quote, marketData?.markPrice || 0, undefined, undefined, pricePrecision)
  const [expanded, setExpanded] = useState(!mobileVersion)
  const { expired } = useCheckQuoteIsExpired(quote)

  useEffect(() => {
    if (!mobileVersion) {
      setExpanded(true)
    }
  }, [mobileVersion])
  function getPnlData(value: string) {
    const valueBN = toBN(value)
    const valuePercent = valueBN.div(quoteSize).div(openedPrice).times(leverage).times(100).toFixed(2)
    if (!marketData?.markPrice) return ['-', '-', theme.text0]
    if (valueBN.isGreaterThan(0)) return [`+ $${formatAmount(valueBN)}`, valuePercent, theme.green1]
    else if (valueBN.isLessThan(0))
      return [`- $${formatAmount(Math.abs(valueBN.toNumber()))}`, valuePercent, theme.red1]
    return [`$${formatAmount(valueBN)}`, valuePercent, theme.text1]
  }

  const [uPnl, upnlPercent, upnlColor] = getPnlData(upnl)
  const [PNL, PNLPercent, PNLColor] = getPnlData(pnl)

  return (
    <>
      <TopWrap
        onClick={() => {
          if (mobileVersion) {
            setExpanded(!expanded)
          }
        }}
        mobileVersion={mobileVersion}
        expand={expanded}
      >
        <FlexColumn flex={buttonText ? 2 : 4} alignItems={'flex-start'}>
          <PositionInfoBox>
            <RowComponent width={'initial'}>
              <MarketName>
                <div>
                  {symbol}-{asset}
                </div>
                <div>-Q{id}</div>
              </MarketName>
              <Leverage>{leverage}x</Leverage>
              <QuoteData longOrShort={positionType === PositionType.LONG}>
                {positionType}
                {positionType === PositionType.LONG ? (
                  <LongArrow width={16} height={12} color={theme.green1} />
                ) : (
                  <ShortArrow width={16} height={12} color={theme.red1} />
                )}
              </QuoteData>
            </RowComponent>
            {!mobileVersion && <PositionDetailsNavigator />}
          </PositionInfoBox>

          {mobileVersion &&
            (quoteStatus === QuoteStatus.CLOSED ? ( // fix this - write ueseMemo
              <RowPnl>
                <Label>PNL:</Label>
                <PositionPnl color={PNLColor}>{`${PNL} (${Math.abs(Number(PNLPercent))}%)`}</PositionPnl>
              </RowPnl>
            ) : (
              <RowPnl>
                <Label>uPNL:</Label>
                <PositionPnl color={upnlColor}>
                  {uPnl === '-' ? uPnl : `${uPnl} (${Math.abs(Number(upnlPercent))}%)`}
                </PositionPnl>
              </RowPnl>
            ))}
        </FlexColumn>
        {mobileVersion && (
          <FlexColumn flex={1} alignItems={'flex-end'}>
            {buttonText && (
              <PositionActionButton expired={expired} disabled={disableButton} onClick={onClickButton}>
                {buttonText}
              </PositionActionButton>
            )}
            <Chevron open={expanded} />
          </FlexColumn>
        )}
      </TopWrap>

      {expanded && (
        <Wrapper>
          <ClosePendingDetails quote={quote} />

          <DataWrap>
            {quoteStatus === QuoteStatus.CLOSED ? (
              <Row>
                <Label>PNL:</Label>
                <RowEnd>
                  <PositionPnl color={PNLColor}>{`${PNL} (${Math.abs(Number(PNLPercent))}%)`}</PositionPnl>
                </RowEnd>
              </Row>
            ) : (
              <Row>
                <Label>uPNL:</Label>
                <RowEnd>
                  <PositionPnl color={upnlColor}>
                    {uPnl === '-' ? uPnl : `${uPnl} (${Math.abs(Number(upnlPercent))}%)`}
                  </PositionPnl>
                </RowEnd>
              </Row>
            )}
            {quoteStatus === QuoteStatus.CLOSED ? (
              <Row>
                <Label>Position Value:</Label>
                <Value>
                  {closePositionValue.isEqualTo(0)
                    ? '-'
                    : `${formatCurrency(closePositionValue)} ${collateralCurrency?.symbol}`}
                </Value>
              </Row>
            ) : (
              <Row>
                <Label>Position Value:</Label>
                <Value>
                  {toBN(notionalValue).isEqualTo(0)
                    ? '-'
                    : `${formatCurrency(notionalValue)} ${collateralCurrency?.symbol}`}
                </Value>
              </Row>
            )}
            <Row>
              <Label>Position Size:</Label>
              <Value>{`${formatAmount(quoteSize)} ${symbol}`}</Value>
            </Row>

            <Row>
              <Label>Open Price</Label>
              <Value>{`${formatAmount(openedPrice)} ${collateralCurrency?.symbol}`}</Value>
            </Row>

            {quoteStatus === QuoteStatus.CLOSED ? (
              <Row>
                <Label>Closed Price:</Label>
                <Value>{`${formatAmount(avgClosedPrice)} ${collateralCurrency?.symbol}`}</Value>
              </Row>
            ) : (
              <>
                {positionType === PositionType.LONG ? (
                  <Row>
                    <Label>Bid Price:</Label>
                    <Value>
                      {bidPrice === '0' ? (
                        '-'
                      ) : (
                        <BlinkingPrice data={bidPrice} textSize={mobileVersion ? '12px' : '14px'} />
                      )}
                    </Value>
                  </Row>
                ) : (
                  <Row>
                    <Label>Ask Price:</Label>
                    <Value>
                      {askPrice === '0' ? (
                        '-'
                      ) : (
                        <BlinkingPrice data={askPrice} textSize={mobileVersion ? '12px' : '14px'} />
                      )}
                    </Value>
                  </Row>
                )}
              </>
            )}
          </DataWrap>
          <ClosedAmountDetails quote={quote} />
          <ContentWrapper>
            <Row>
              <Label>Created Time:</Label>
              <Value>{formatTimestamp(createTimestamp * 1000)}</Value>
            </Row>
            <Row>
              <Label>{quoteStatus === QuoteStatus.CLOSED ? 'Close Time:' : 'Last modified Time:'}</Label>
              <Value>{formatTimestamp(statusModifyTimestamp * 1000)}</Value>
            </Row>

            <FundingRate
              notionalValue={notionalValue}
              name={name}
              quoteId={id}
              symbol={collateralCurrency?.symbol}
              positionType={positionType}
              quoteStatus={quoteStatus}
            />
            {quoteStatus !== QuoteStatus.CLOSED && (
              <Row>
                <Label>Locked Amount:</Label>
                <Value>{`${formatAmount(lockedAmount, 6, true)} ${collateralCurrency?.symbol}`}</Value>
              </Row>
            )}
            <Row>
              <Label>Platform Fee:</Label>
              <Value>{`${formatAmount(toBN(platformFee).div(2), 3, true)} (OPEN) / ${formatAmount(
                toBN(platformFee).div(2),
                3,
                true
              )} (CLOSE) ${collateralCurrency?.symbol}`}</Value>
            </Row>
          </ContentWrapper>
        </Wrapper>
      )}
    </>
  )
}

function FundingRate({
  notionalValue,
  positionType,
  quoteId,
  name,
  symbol,
  quoteStatus,
}: {
  notionalValue: string
  positionType: PositionType
  quoteId: number
  quoteStatus: QuoteStatus
  name?: string
  symbol?: string
}) {
  const theme = useTheme()
  const fundingRates = useFetchFundingRate(quoteStatus !== QuoteStatus.CLOSED ? name : undefined)
  const fundingRate =
    name && fundingRates
      ? fundingRates
      : ({ next_funding_time: 0, next_funding_rate_long: '', next_funding_rate_short: '' } as FundingRateData)

  const { paidAmount, status } = useGetPaidAmount(quoteId)

  const { next_funding_rate_long, next_funding_rate_short, next_funding_time } = fundingRate
  const { diff, hours, minutes, seconds } = getRemainingTime(next_funding_time)
  const nextFunding = positionType === PositionType.LONG ? next_funding_rate_long : next_funding_rate_short
  const color = shouldPayFundingRate(positionType, next_funding_rate_long, next_funding_rate_short)
    ? theme.red1
    : theme.green1

  const paidAmountBN = toBN(paidAmount).div(1e18)

  return (
    <React.Fragment>
      <Row>
        <Label>Paid Funding:</Label>
        <PositionPnl color={paidAmountBN.lt(0) ? theme.green1 : paidAmountBN.isEqualTo(0) ? theme.text0 : theme.red1}>
          {status === ApiState.LOADING ? (
            <Loader />
          ) : (
            `${formatAmount(
              paidAmountBN.isGreaterThanOrEqualTo(1) || paidAmountBN.lt(0) ? paidAmountBN.abs() : '0'
            )} ${symbol}`
          )}
        </PositionPnl>
      </Row>
      {quoteStatus !== QuoteStatus.CLOSED && (
        <Row>
          <Label>Next Funding:</Label>
          <Value>
            <PositionPnl color={color}>
              {!toBN(nextFunding).isNaN() ? `${formatAmount(toBN(notionalValue).times(nextFunding).abs())} ` : '-'}
            </PositionPnl>
            {symbol} in
            {diff > 0 &&
              ` ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
                .toString()
                .padStart(2, '0')}`}
          </Value>
        </Row>
      )}
    </React.Fragment>
  )
}
