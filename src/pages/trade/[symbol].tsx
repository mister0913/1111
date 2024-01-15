import React, { useEffect } from 'react'
import styled from 'styled-components'

import WhitelistUpdater from 'components/App/Whitelist/updater'

import Column from 'components/Column'
import Chart from 'components/App/Chart'
import UserPanel from 'components/App/UserPanel'
import MarketBar from 'components/App/MarketBar'
import TradePanel from 'components/App/TradePanel'
import AccountOverview from 'components/App/AccountData'
import { UpdaterRoot } from 'components/EmptyComponent'
import WrapperBanner from 'components/Banner'
import { useTour } from '@reactour/tour'
import { Step } from 'components/Tour/Step'
import { Debugger } from 'components/Debugger/debugger'

export const Container = styled(Column)`
  background: ${({ theme }) => theme.color1};
`

export const ItemsRow = styled.div<{ gap?: string; padding?: string; margin?: string }>`
  display: flex;
  gap: ${({ gap }) => gap ?? '8px'};
  margin: ${({ margin }) => margin ?? '4px 0px'};
  padding: ${({ padding }) => padding ?? '0px 8px'};

  & > * {
    &:nth-child(2) {
      flex: 1;
    }
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: column;
  }
  `};
`

export const LeftColumn = styled(Column)<{ gap?: string }>`
  overflow-y: scroll;
  background: ${({ theme }) => theme.color1};
  gap: ${({ gap }) => gap ?? '8px'};
  flex: 2;
  & > * {
    width: 100%;
  }
`

export default function Symbol() {
  const { setIsOpen, setSteps } = useTour()

  useEffect(() => {
    if (!setSteps) {
      return
    }

    if (localStorage.getItem('wagmi.wallet')) {
      localStorage.setItem('tour-part1', 'done')
      localStorage.setItem('tour-part2', 'done')
      localStorage.setItem('tour-part3', 'done')
      localStorage.setItem('tour-part4', 'done')
      return
    }

    if (localStorage.getItem('tour-part1') === 'done') {
      return
    }

    localStorage.setItem('tour-part1', 'done')

    setSteps([
      {
        selector: '.tour-step-1',
        content: <Step title={'Based Markets Tour'} content={'Welcome to Based Markets!'} />,
        position: 'center',
      },
      {
        selector: '.tour-step-2',
        content: <Step title={'Step 1: Connect wallet'} content={"Let's get started by connecting your wallet"} />,
      },
    ])
    setIsOpen(true)
  }, [setSteps])

  return (
    <Container>
      <WrapperBanner />
      <UpdaterRoot />
      <WhitelistUpdater />
      <ItemsRow>
        <LeftColumn>
          <MarketBar />
          <Chart />
        </LeftColumn>
        <TradePanel />
      </ItemsRow>
      <ItemsRow>
        <LeftColumn>
          <UserPanel />
        </LeftColumn>
        <AccountOverview />
      </ItemsRow>
      <Debugger />
    </Container>
  )
}
