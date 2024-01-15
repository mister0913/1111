import { useRef, useState } from 'react'
import styled from 'styled-components'
import { truncateAddress } from 'utils/address'
import { useDibs } from 'hooks/useDibs'
import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import Copy from 'components/Copy'
import RewardsTable from '../RewardsTable'
import { Row, RowBetween } from 'components/Row'
import { DibsCalender } from '../DibsCalender'
import { SadComponent } from 'components/SadComponent'

const Container = styled.div`
  padding-top: 12px;
  background: ${({ theme }) => theme.color2};
  border-radius: 4px;
`

const LeftWrapper = styled(RowBetween)`
  width: unset;
  color: ${({ theme }) => theme.almostWhite};
`

const AccountAddress = styled(Row)`
  color: ${({ theme }) => theme.pink};
  width: unset;
`

const CopyWrapper = styled.div`
  margin-left: 2px;
  margin-top: 4px;
`

export default function Rewards() {
  const { account } = useActiveWeb3React()
  const [showCalender, setShowCalender] = useState(false)
  const [customDay, setCustomDay] = useState(false)
  const { activeDay, setCustomActiveDay, getActiveDate, getCustomDate } = useDibs()
  const ref_calender = useRef(null)
  console.log('account', account)
  useOnOutsideClick(ref_calender, () => setShowCalender(false))
  return (
    <Container>
      <RowBetween padding={'0 16px'}>
        <LeftWrapper>
          {'Total rewards for'} &nbsp;
          {account && (
            <AccountAddress>
              {truncateAddress(account)}
              <CopyWrapper>
                <Copy toCopy={account} text={''} />
              </CopyWrapper>
            </AccountAddress>
          )}
        </LeftWrapper>
        <DibsCalender
          showCalender={showCalender}
          setShowCalender={setShowCalender}
          ref_calender={ref_calender}
          getActiveDate={getActiveDate}
          setCustomActiveDay={setCustomActiveDay}
          setCustomDay={setCustomDay}
          initialDate={customDay}
        />
      </RowBetween>
      {account ? (
        <RewardsTable selectedDay={activeDay} customDayActive={customDay} getCustomDate={getCustomDate} />
      ) : (
        <SadComponent text={'Wallet is not connected'} mode={false} iconSize={200} />
      )}
    </Container>
  )
}
