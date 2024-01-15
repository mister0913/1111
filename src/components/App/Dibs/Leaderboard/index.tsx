import { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import { getFormattedDayMonth } from 'utils/date'
import { useFillDibsRewarder } from 'callbacks/useFillsDibsRewarder'
import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'
import { useDibs } from 'hooks/useDibs'
import { useIsRewardMinted } from 'hooks/useDibsRewards'
import { RowBetween, RowEnd } from 'components/Row'
import LeaderboardTable from '../LeaderboardTable'
import { RefreshContextProvider } from 'context/RefreshContext'
import useEpochTimer from 'hooks/useEpochTimer'
import { DateTitle, DibsCalender, SectionHeaderWrapper } from '../DibsCalender'
import { FillRewarder } from 'components/Icons'

const Container = styled.div`
  padding-top: 12px;
  background: ${({ theme }) => theme.color2};
  color: ${({ theme }) => theme.almostWhite};
  border-radius: 4px;
`

const FillRewardComponent = styled(SectionHeaderWrapper)`
  width: 149px;
  padding: 4px 12px;
  font-size: 16px;
  gap: 6px;
  color: ${({ theme }) => theme.text};
  margin-right: 24px;
  --rewarder-color: ${({ theme }) => theme.text};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.almostWhite};
    --rewarder-color: ${({ theme }) => theme.almostWhite};
  }
`

const EpochFlipHeader = styled(SectionHeaderWrapper)`
  width: 224px;
  margin-right: 24px;
  padding: 0px 13px;
  font-size: 16px;
`

function Timer() {
  const { hours, minutes, seconds } = useEpochTimer()
  return (
    <EpochFlipHeader>
      <div>Epoch Flip in:</div>
      <DateTitle>
        {hours}:{minutes}:{seconds}
      </DateTitle>
    </EpochFlipHeader>
  )
}

export default function Leaderboard() {
  const [showCalender, setShowCalender] = useState(false)
  const [customDay, setCustomDay] = useState(false)
  const { activeDay, setCustomActiveDay, getActiveDate } = useDibs()

  const ref_calender = useRef(null)
  useOnOutsideClick(ref_calender, () => setShowCalender(false))

  return (
    <RefreshContextProvider>
      <Container>
        <RowBetween padding={'0 16px'}>
          <div>Leaderboard: {getFormattedDayMonth(getActiveDate())}</div>
          <RowEnd width="unset">
            <MintRewards day={activeDay} />
            <Timer />
            <DibsCalender
              showCalender={showCalender}
              setShowCalender={setShowCalender}
              ref_calender={ref_calender}
              getActiveDate={getActiveDate}
              setCustomActiveDay={setCustomActiveDay}
              setCustomDay={setCustomDay}
              initialDate={true}
            />
          </RowEnd>
        </RowBetween>
        <LeaderboardTable activeDay={activeDay} />
      </Container>
    </RefreshContextProvider>
  )
}

function MintRewards({ day }: { day: number }) {
  const isMinted = useIsRewardMinted(day)
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)
  const { callback: rewardCallback } = useFillDibsRewarder(day)

  const handleAction = useCallback(async () => {
    if (!rewardCallback || awaitingConfirmation) {
      return
    }

    try {
      setAwaitingConfirmation(true)
      await rewardCallback()
      setAwaitingConfirmation(false)
    } catch (e) {
      setAwaitingConfirmation(false)
      if (e instanceof Error) {
        console.error(e)
      } else {
        console.error(e)
      }
    }
  }, [rewardCallback, awaitingConfirmation])

  return isMinted === false ? (
    <FillRewardComponent onClick={handleAction} disabled={awaitingConfirmation}>
      <div>Fill Rewarder</div>
      <FillRewarder color={'var(--rewarder-color)'} />
    </FillRewardComponent>
  ) : null
}
