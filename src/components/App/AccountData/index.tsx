import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import { MEDIA_WIDTHS } from 'theme'
import { useQuoteDetail, useSetQuoteDetailCallback } from 'state/quotes/hooks'
import { Tab } from 'components/Tab'
import AccountOverview from 'components/App/AccountData/AccountOverview'
import PositionDetails from 'components/App/AccountData/PositionDetails'
import useWindowSize from 'lib/hooks/useWindowSize'

const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  min-height: 379px;
  display: flex;
  flex-flow: column nowrap;
  background: ${({ theme }) => theme.color2};
  border-radius: 4px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
  max-width: unset;
`};
`

export enum PanelType {
  POSITION_OVERVIEW = 'Position Details',
  ACCOUNT_OVERVIEW = 'Account Overview',
}

export default function Overviews() {
  const [panelType, setPanelType] = useState<PanelType>(PanelType.ACCOUNT_OVERVIEW)
  const quoteDetail = useQuoteDetail()
  const setQuoteDetail = useSetQuoteDetailCallback()
  const { width } = useWindowSize()
  const mobileVersion = useMemo(() => width <= MEDIA_WIDTHS.upToMedium, [width])

  useEffect(() => {
    if (quoteDetail) setPanelType(PanelType.POSITION_OVERVIEW)
  }, [quoteDetail])
  useEffect(() => {
    if (mobileVersion) setPanelType(PanelType.ACCOUNT_OVERVIEW)
  }, [mobileVersion])
  return (
    <Wrapper>
      {!mobileVersion && (
        <Tab
          tabOptions={[PanelType.ACCOUNT_OVERVIEW, PanelType.POSITION_OVERVIEW]}
          activeOption={panelType}
          onChange={(option: string) => {
            setPanelType(option as PanelType)
            if (option === PanelType.ACCOUNT_OVERVIEW) setQuoteDetail(null)
          }}
        />
      )}
      {panelType === PanelType.ACCOUNT_OVERVIEW ? (
        <AccountOverview mobileVersion={mobileVersion} />
      ) : (
        <PositionDetails quote={quoteDetail} />
      )}
    </Wrapper>
  )
}
