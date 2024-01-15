import { useState } from 'react'
import styled from 'styled-components'

import { Row } from 'components/Row'
import Header from 'components/App/Dibs/header'
import Rewards from 'components/App/Dibs/Rewards'
import Leaderboard from 'components/App/Dibs/Leaderboard'
import { useModalOpen } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'
import DepositModal from 'components/ReviewModal/DepositModal'

const TabsWrapper = styled(Row)`
  padding: 40px 0 16px 0;
  gap: 12px;
`

const Tab = styled.button<{ active?: boolean }>`
  width: 50%;
  height: 40px;
  color: white;
  background-color: ${({ theme, active }) => (active ? theme.color5 : theme.color3)};
  border-radius: 6px;
  text-align: center;
  font-weight: 500;

  &:hover {
    cursor: ${({ active }) => (active ? 'auto' : 'pointer')};
  }
`
const BottomWrapper = styled.div`
  margin: 0px 12%;
`

export default function Dibs() {
  const showDepositModal = useModalOpen(ApplicationModal.DEPOSIT)
  const [isInMyRewardsPage, setIsInMyRewardsPage] = useState(true)

  return (
    <div>
      <Header />
      <BottomWrapper>
        <TabsWrapper>
          <Tab
            active={isInMyRewardsPage}
            onClick={() => {
              !isInMyRewardsPage && setIsInMyRewardsPage(true)
            }}
          >
            My Rewards
          </Tab>
          <Tab
            active={!isInMyRewardsPage}
            onClick={() => {
              isInMyRewardsPage && setIsInMyRewardsPage(false)
            }}
          >
            Leaderboard
          </Tab>
        </TabsWrapper>
        {isInMyRewardsPage ? <Rewards /> : <Leaderboard />}
        {showDepositModal && <DepositModal />}
      </BottomWrapper>
    </div>
  )
}
