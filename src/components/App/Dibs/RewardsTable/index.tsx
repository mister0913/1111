import { useEffect, useState } from 'react'
import { Zero } from '@ethersproject/constants'
import styled from 'styled-components'

import { getFormattedDate } from 'utils/date'
import { formatAmount, formatDollarAmount } from 'utils/numbers'

import useDibsRewards from 'hooks/useDibsRewards'

import ClaimModal from '../Rewards/ClaimModal'
import CardPagination from 'components/CardPagination'
import ShimmerAnimation from 'components/ShimmerAnimation'
import { SadComponent } from 'components/SadComponent'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 228px;
  column-gap: 4px;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    grid-template-columns: 1.2fr 1fr 1fr 1fr;
  `}
`
const HeaderWrapper = styled(Container)`
  color: ${({ theme }) => theme.text};
  padding: 12px 16px 8px;
`

const HeaderText = styled.div`
  font-size: 12px;
`

const HeaderAction = styled.div`
  justify-self: end;
`

const RowWrapper = styled(Container)<{ topBorder?: boolean }>`
  background-color: ${({ theme }) => theme.color3};
  padding: 12px 12px 12px 16px;
  color: ${({ theme }) => theme.almostWhite};
  margin-top: 2px;
`

const RowText = styled.div`
  font-size: 14px;
`

const ButtonWrapper = styled.div<{ claimed?: boolean }>`
  width: 165px;

  justify-self: end;
  border-radius: 6px;
  background-color: ${({ theme, claimed }) => (claimed ? theme.color4 : theme.darkBlue)};
`

const RowButton = styled.button<{ claimed?: boolean; clicked: boolean }>`
  width: 165px;
  margin-bottom: 4px;
  padding: 10px 0;
  background-color: ${({ theme, claimed }) => (claimed ? theme.color4 : theme.blue)};
  color: ${({ claimed }) => (claimed ? '#788EBA' : '#001426')};
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  transition: width, transform 0ms ease-in-out;
  ${({ clicked }) =>
    clicked &&
    `
  transform: translateY(4px);
`}
`

const PaginationWrapper = styled.div`
  padding: 12px 0;
  color: ${({ theme }) => theme.almostWhite};
`

export interface RewardData {
  date: string
  dateDay: string
  tradeVolume: string
  myReward: string
  claimed: boolean
  originalDate: Date
}

function Header() {
  return (
    <HeaderWrapper>
      <HeaderText>Date</HeaderText>
      <HeaderText>My Trade Volume</HeaderText>
      <HeaderText>My Reward</HeaderText>
      <HeaderAction />
    </HeaderWrapper>
  )
}

function TableRow({
  topBorder,
  rowClick,
  claimSubmitted,
  ...data
}: {
  topBorder?: boolean
  date: string
  rowClick: () => void
  claimSubmitted?: boolean
  tradeVolume?: string
  myReward?: string
  claimed: boolean
  originalDate: Date
}) {
  const { date, tradeVolume, myReward, claimed, originalDate } = data
  const currentDate = new Date()
  const isCurrent = (currentDate.getTime() - originalDate.getTime()) / 86400000 < 1
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
      rowClick()
    }, 150) // Reset state after animation duration
  }
  return (
    <RowWrapper topBorder={topBorder}>
      <RowText>{date}</RowText>
      <RowText>{tradeVolume ? formatDollarAmount(tradeVolume) : '-'}</RowText>
      <RowText>{myReward ? `${myReward} BASED` : '-'}</RowText>
      <ButtonWrapper claimed={claimed || claimSubmitted}>
        <RowButton
          claimed={claimed || claimSubmitted}
          disabled={claimed || isCurrent || claimSubmitted}
          onClick={() => handleClick()}
          clicked={isClicked}
        >
          {isCurrent ? 'Claim (After Epoch)' : claimed ? 'Claimed' : claimSubmitted ? 'Claiming...' : 'Claim'}
        </RowButton>
      </ButtonWrapper>
    </RowWrapper>
  )
}

function Body({ rewardData }: { rewardData: RewardData[] }) {
  const [page, setPage] = useState(1)
  const [claimModalOpen, setClaimModalOpen] = useState(false)
  const [showSadComponent, setShowSadComponent] = useState(false)
  const [claimsSubmitted, setClaimsSubmitted] = useState<any[]>([])
  const [selectedReward, setSelectedReward] = useState({
    date: '',
    dateDay: '0',
    tradeVolume: '0',
    myReward: '0',
    originalDate: new Date(),
    claimed: false,
  })
  const rowsPerPage = 5
  const pageCount = Math.ceil(rewardData.length / rowsPerPage)
  const onPageChange = (newPage: number) => {
    let localNewPage
    if (newPage > pageCount) localNewPage = pageCount
    else if (newPage < 1) localNewPage = 1
    else localNewPage = newPage
    setPage(localNewPage)
  }
  function rowClick(data: RewardData) {
    setSelectedReward(data)
    setClaimModalOpen(true)
  }
  useEffect(() => {
    if (rewardData.length === 0) {
      const timer = setTimeout(() => {
        setShowSadComponent(true)
      }, 100)
      return () => clearTimeout(timer)
    }
    setShowSadComponent(false)
  }, [rewardData])
  return (
    <>
      <div>
        {rewardData
          .slice((page - 1) * rowsPerPage, Math.min(page * rowsPerPage, rewardData.length))
          .map((data, index) => (
            <TableRow
              key={index}
              topBorder={index === 0}
              rowClick={() => rowClick(data)}
              claimSubmitted={claimsSubmitted.includes(data.date)}
              {...data}
            />
          ))}
        {showSadComponent && <SadComponent text="You have no rewards" mode={true} iconSize={250} />}
      </div>
      <ClaimModal
        isOpen={claimModalOpen}
        onDismiss={(isSubmitted) => {
          console.log('isSubmitted', isSubmitted, selectedReward.date)
          if (isSubmitted) {
            setClaimsSubmitted([...claimsSubmitted, selectedReward.date])
          }
          setClaimModalOpen((prev) => !prev)
        }}
        data={selectedReward}
      />
      <PaginationWrapper>
        <CardPagination
          pageCount={pageCount}
          itemsQuantity={rewardData.length}
          currentPage={page}
          onPageChange={onPageChange}
          rowsPerPage={rowsPerPage}
        />
      </PaginationWrapper>
    </>
  )
}

export default function RewardsTable({
  selectedDay,
  customDayActive,
  getCustomDate,
}: {
  selectedDay: number
  customDayActive: boolean
  getCustomDate: (arg0: number) => Date
}) {
  const { rewards, loading } = useDibsRewards(selectedDay, customDayActive)
  const objReward =
    rewards?.map((reward) => {
      const originalDate = getCustomDate(parseInt(reward.day))
      return {
        date: getFormattedDate(originalDate),
        originalDate,
        dateDay: reward.day,
        tradeVolume: formatAmount(reward.volume),
        myReward: formatAmount(reward.reward),
        claimed: reward.unclaimedReward.eq(Zero),
      }
    }) || []

  return (
    <div>
      <Header />
      {loading ? (
        <div style={{ margin: '20px 20px 22px 15px' }}>
          <ShimmerAnimation width="auto" height="40px" />
        </div>
      ) : (
        <Body rewardData={objReward} />
      )}
    </div>
  )
}
