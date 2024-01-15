import styled from 'styled-components'
import Image from 'next/image'
import Calendar from 'components/Calendar'
import { formatDate } from 'utils/date'
import CalenderSvg from '/public/static/images/dibs/calender.svg'
import LineSvg from '/public/static/images/dibs/line.svg'
import { RowBetween } from 'components/Row'

export const SectionHeaderWrapper = styled(RowBetween)`
  width: 236px;
  background-color: ${({ theme }) => theme.color3};
  padding: 4px 8px 4px 12px;
  font-size: 14px;
  height: 34px;
  font-size: 13px;
  color: ${({ theme }) => theme.text};
  border-radius: 6px;
  &:hover {
    cursor: pointer;
  }
`

export const DateTitle = styled.div`
  color: ${({ theme }) => theme.almostWhite};
`
const ContainerCalender = styled.div`
  display: inline-flex;
  align-items: center;
  height: 100%;
`

const CalenderIconWrapper = styled.div`
  margin: 3px 5px 0px auto;
`

const BreakerIconWrapper = styled.div`
  margin: 5px 15px 0px 15px;
`

export function DibsCalender({
  showCalender,
  setShowCalender,
  ref_calender,
  getActiveDate,
  setCustomActiveDay,
  setCustomDay,
  initialDate,
}: {
  showCalender: boolean
  setShowCalender: (input: boolean) => void
  ref_calender: any
  getActiveDate: () => Date
  setCustomActiveDay: (input: Date) => void
  setCustomDay: (input: boolean) => void
  initialDate: boolean
}) {
  return (
    <SectionHeaderWrapper
      onClick={() => {
        if (!showCalender) setShowCalender(true)
      }}
    >
      <div>Select Date</div>
      <BreakerIconWrapper>
        <Image src={LineSvg} alt="Asset" width={1} height={20} />
      </BreakerIconWrapper>
      <DateTitle>{initialDate ? formatDate(getActiveDate()) : '--/--/----'}</DateTitle>{' '}
      <CalenderIconWrapper>
        <Image src={CalenderSvg} alt="Asset" width={20} height={20} />
      </CalenderIconWrapper>
      <ContainerCalender ref={ref_calender}>
        <Calendar
          xPosition="-343px"
          yPosition="150px"
          isOpen={showCalender}
          setIsOpen={setShowCalender}
          setNewTime={setCustomActiveDay}
          setCustomDayActivate={setCustomDay}
          currentDate={getActiveDate()}
        />
      </ContainerCalender>
    </SectionHeaderWrapper>
  )
}
