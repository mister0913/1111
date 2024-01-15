import styled from 'styled-components'

import { ApplicationModal } from 'state/application/reducer'
import { useModalOpen } from 'state/application/hooks'
import { usePositionType } from 'state/trade/hooks'

import Column from 'components/Column'
import TradeOverview from 'components/App/TradePanel/TradeOverview'

import OpenPositionModal from 'components/ReviewModal/OpenPositionModal'
import AmountsPanel from './AmountsPanel'
import OrderTypeTab from './OrderTypeTab'
import MinPositionInfo from './MinPositionInfo'
import TradeActionButtons from './TradeActionButton'

const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  overflow: scroll;
  border-radius: 4px;
  background: ${({ theme }) => theme.color2};
  padding-top: 16px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
  max-width: unset;
`};
`

const Container = styled(Column)`
  padding: 12px;
  gap: 12px;
  /* overflow-x: hidden; // for some reason this panel can overflow horizontally */
  & > * {
    &:first-child {
      margin-top: 8px;
    }
  }
`

export default function TradePanel() {
  const showTradeInfoModal = useModalOpen(ApplicationModal.OPEN_POSITION)
  const positionType = usePositionType()

  return (
    <Wrapper>
      <OrderTypeTab />
      <Container>
        <AmountsPanel />
        <MinPositionInfo />
        <TradeActionButtons />
        <TradeOverview />
      </Container>
      {showTradeInfoModal && <OpenPositionModal positionType={positionType} />}
    </Wrapper>
  )
}
