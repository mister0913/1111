import styled, { useTheme } from 'styled-components'

import LPStake from 'components/App/Staking/LPStake'
import SingleStake from 'components/App/Staking/SinglStake/SingleStake'
import Header from 'components/Banner/Header'
import { useModalOpen } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'
import background from '/public/static/images/dibs/Header2.svg'
import Rewards from 'components/App/Staking/Rewards'
import React, { useState } from 'react'
import { Tab } from 'components/Tab'
import basedIcon from '/public/static/images/tokens/BASED.svg'
import USDC_ICON from '/public/static/images/tokens/USDC.svg'
import DepositModal from 'components/ReviewModal/DepositModal'

const Layout = styled.div`
  justify-content: center;
  gap: 16px;
  margin-left: 12.6%;
  margin-right: 12.3%;
`
const TabWrapper = styled.div<{ width?: string }>`
  width: ${({ width }) => (width ? width : '')};
  margin: auto;
`

export enum StakeMode {
  STAKING = 'Staking',
  REWARDS = 'Rewards',
}

export default function StakingPage() {
  const theme = useTheme()
  const showDepositModal = useModalOpen(ApplicationModal.DEPOSIT)
  const [activeSection, setActiveSection] = useState<StakeMode>(StakeMode.STAKING)

  return (
    <>
      <Header
        backgroundImg={background}
        animation={'stake2earn'}
        iconStyle={{ top: '2px', right: '0px', transform: 'scaleX(-1)' }}
        iconSize={{ width: '280px', height: '251px' }}
        title={'Stake 2 Earn'}
        subtitle={'Stake BASED to earn trading fees in USDbC'}
      />
      <Layout>
        <TabWrapper width={'90%'}>
          <Tab
            tabOptions={[StakeMode.STAKING, StakeMode.REWARDS]}
            activeOption={activeSection}
            hasBackground={false}
            activeColor={activeSection === StakeMode.STAKING ? theme.darkPink : theme.buttonBlue}
            borderColor={theme.color3}
            borderSize={'2px'}
            fontSize="24px"
            width="50%"
            height="56px"
            icons={{
              [StakeMode.STAKING]: basedIcon,
              [StakeMode.REWARDS]: USDC_ICON,
            }}
            onChange={(option: string) => {
              setActiveSection(option as StakeMode)
            }}
            outerBorder={false}
          />
        </TabWrapper>

        {activeSection === StakeMode.STAKING ? (
          <>
            <SingleStake></SingleStake>
            <LPStake></LPStake>
          </>
        ) : (
          <Rewards></Rewards>
        )}
        {showDepositModal && <DepositModal />}
      </Layout>
    </>
  )
}
