import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import RankMedal1 from '/public/static/images/dibs/ranks/rankMedal1.svg'
import RankMedal2 from '/public/static/images/dibs/ranks/rankMedal2.svg'
import RankMedal3 from '/public/static/images/dibs/ranks/rankMedal3.svg'
import DefaultRankMedal from '/public/static/images/dibs/ranks/rankMedal.svg'
import SuperSkullDefault from '/public/static/images/dibs/SuperSkullDefault.svg'
import Sniper from '/public/static/images/badges/sniper.svg'
import Charger from '/public/static/images/badges/charger.svg'
import Medalist from '/public/static/images/badges/medalist.svg'
import Archer from '/public/static/images/badges/hunter.svg'
import { formatAmount, formatDollarAmount } from 'utils/numbers'
import { truncateAddress } from 'utils/address'
import useLeaderBoardData from 'hooks/useLeaderBoardData'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import CardPagination from 'components/CardPagination'
import { Row } from 'components/Row'
import ShimmerAnimation from 'components/ShimmerAnimation'
import Copy from 'components/Copy'

interface IRowData {
  topBorder?: boolean
  myRank: string
  rank: string
  accountName: string
  badges?: string[]
  accountAddress: string
  tradeVolume: string
  potentialReward: string
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.22fr 0.8fr 1fr 1fr 1fr;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
      grid-template-columns: 0.2fr 0.2fr 1fr 1fr 1fr; 
  }`};
`

const HeaderWrapper = styled(Container)`
  padding: 16px 16px 8px 25px;
  grid-template-columns: 0.22fr 0.79fr 1fr 1fr 1.15fr;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  grid-template-columns: 0.3fr 1.2fr 1fr 1.15fr; 

}`};
`

const HeaderText = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
`

const DotsWrapper = styled(Row)`
  justify-content: center;
  margin: 20px 0;
  gap: 6px;
`

const Dot = styled.div`
  background-color: ${({ theme }) => theme.color5};
  border-radius: 50%;
  width: 5px;
  height: 5px;
`

const RowWrapper = styled(Container)<{ currentAccount?: boolean }>`
  background: ${({ theme, currentAccount }) => (currentAccount ? theme.color4 : theme.color3)};
  padding: 6px 50px 4px 6px;
  margin: 2px 12px 0px 12px;
  border-raius: 6px;
`

const RowText = styled.div`
  font-size: 14px;
`

const Rank = styled.div`
  display: inline-block;
  position: relative;
`

const NftWrapper = styled.div`
  margin-right: 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;  
  }`};
`

const AccountName = styled.span`
  color: ${({ theme }) => theme.almostWhite};
  font-size: 14px;
  font-weight: 600;
  margin-right: 8px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  display: none;  
}`};
`

const Badges = styled(Row)`
  width: initial;
  gap: 6px;
`

const PaginationWrapper = styled.div`
  padding: 12px 0;
`

const CopyWrapper = styled.div`
  margin-left: 8px;
  margin-top: 4px;
`

const WrapperIconDefault = styled.div`
  padding: 4px 0px 4px 8px;
`

const NumberContainer = styled.div<{ upperTen: boolean }>`
  position: absolute;
  font-size: ${({ upperTen }) => (upperTen ? '24px' : '26px')};
  bottom: ${({ upperTen }) => (upperTen ? '13px' : '12px')};
  left: ${({ upperTen }) => (upperTen ? '17px' : '20px')};
  background: linear-gradient(0deg, rgba(239, 131, 227, 1) 12%, rgba(134, 191, 254, 1) 86%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; /* This makes the text transparent, showing only the background */
  -webkit-text-fill-color: transparent; /* For Safari */
`

interface RowData {
  rank: string
  accountAddress: string
  tradeVolume: string
  potentialReward: string
  accountName: string
}

function Header() {
  return (
    <HeaderWrapper>
      <HeaderText>Rank</HeaderText>
      <HeaderText>Trader</HeaderText>
      <HeaderText>Account Address</HeaderText>
      <HeaderText>Trade Volume</HeaderText>
      <HeaderText>Potential Reward</HeaderText>
    </HeaderWrapper>
  )
}

function ThreeDots() {
  return (
    <DotsWrapper>
      <Dot />
      <Dot />
      <Dot />
    </DotsWrapper>
  )
}

function TableRow({ myRank, ...data }: IRowData) {
  const { rank, accountName, badges, accountAddress, tradeVolume, potentialReward } = data as IRowData
  const isCurrentAccount = rank === myRank

  const getRankImage = (rank: string) => {
    switch (rank) {
      case '1':
        return <Image src={RankMedal1} alt={'rank medal'} />
      case '2':
        return <Image src={RankMedal2} alt={'rank medal'} />
      case '3':
        return <Image src={RankMedal3} alt={'rank medal'} />
      default:
        return (
          <WrapperIconDefault>
            <Image src={DefaultRankMedal} alt={'rank medal'} />
            <NumberContainer upperTen={Number(rank) > 9}>{rank}</NumberContainer>
          </WrapperIconDefault>
        )
    }
  }

  const getBadge = (badgeText: string) => {
    switch (badgeText) {
      case 'sniper':
        return Sniper
      case 'charger':
        return Charger
      case 'medalist':
        return Medalist
      case 'archer':
        return Archer
      default:
        return ''
    }
  }

  return (
    <RowWrapper currentAccount={isCurrentAccount}>
      <Rank>{getRankImage(rank)}</Rank>

      <Row>
        <NftWrapper>
          <Image src={SuperSkullDefault} alt={'super skull - default'} />
        </NftWrapper>
        <AccountName>{accountName}</AccountName>
        <Badges>
          {badges &&
            badges.map((badgeText, index) => (
              <span key={index}>
                <Image src={getBadge(badgeText)} alt={badgeText} />
              </span>
            ))}
        </Badges>
      </Row>
      <Row width={'unset'}>
        {truncateAddress(accountAddress)}
        <CopyWrapper>
          <Copy toCopy={accountAddress} text={''} />
        </CopyWrapper>
      </Row>
      <RowText>{tradeVolume ? formatDollarAmount(tradeVolume) : '-'}</RowText>
      <RowText>{potentialReward ? `${potentialReward} BASED` : '-'}</RowText>
    </RowWrapper>
  )
}

function Body({
  leaderData,
  myRank,
  page,
  setPage,
}: {
  leaderData: RowData[]
  myRank: string
  page: number
  setPage: (arg0: number) => void
}) {
  const rowsPerPage = 5
  const startRowRank = (page - 1) * rowsPerPage
  const endRowRank = startRowRank + rowsPerPage - 1

  const myData = leaderData.find((data) => data.rank === myRank)
  const pageCount = Math.ceil(leaderData.length / rowsPerPage)

  const onPageChange = (newPage: number) => {
    let localNewPage
    if (newPage > pageCount) localNewPage = pageCount
    else if (newPage < 1) localNewPage = 1
    else localNewPage = newPage
    setPage(localNewPage)
  }
  return (
    <>
      {Number(myRank) < startRowRank && myData && (
        <>
          <TableRow myRank={myRank} {...myData} />
          <ThreeDots />
        </>
      )}
      <div>
        {leaderData.slice(startRowRank, endRowRank + 1).map((data, index) => (
          <TableRow key={index} myRank={myRank} {...data} />
        ))}

        {Number(myRank) > endRowRank + 1 && myData && (
          <>
            <ThreeDots />
            <TableRow myRank={myRank} {...myData} />
          </>
        )}
      </div>
      <PaginationWrapper>
        <CardPagination
          pageCount={pageCount}
          itemsQuantity={leaderData.length}
          currentPage={page}
          rowsPerPage={rowsPerPage}
          onPageChange={onPageChange}
        />
      </PaginationWrapper>
    </>
  )
}

export default function LeaderboardTable({ activeDay }: { activeDay: number }) {
  const { account } = useActiveWeb3React()
  const { epochLeaderBoard: currentData, loading } = useLeaderBoardData(activeDay)
  const [page, setPage] = useState(1)
  useEffect(() => {
    setPage(1)
  }, [activeDay])
  const resultData = currentData.map((item, index) => {
    return {
      rank: (index + 1).toString(),
      accountAddress: item.user,
      accountName: item.name,
      tradeVolume: formatAmount(item.volume),
      potentialReward: formatAmount(item.reward),
    }
  })

  let myRank = (resultData.findIndex((inputData) => inputData.accountAddress === account?.toLowerCase()) + 1).toString()
  if (resultData.length > 0 && myRank === '0') {
    resultData.push({
      rank: (resultData.length + 1).toString(),
      accountAddress: account ?? ' ',
      accountName: 'Your Account',
      tradeVolume: '',
      potentialReward: '-',
    })
    myRank = resultData.length.toString()
  } else {
    const rankTarget = parseInt(myRank) - 1
    resultData[rankTarget] = { ...resultData[rankTarget], accountName: 'Your Account' }
  }

  return (
    <div>
      <Header />
      {loading ? (
        <div style={{ margin: '20px 20px 22px 15px' }}>
          <ShimmerAnimation width="auto" height="40px" />
        </div>
      ) : (
        <Body leaderData={resultData} myRank={myRank} page={page} setPage={setPage} />
      )}
    </div>
  )
}
