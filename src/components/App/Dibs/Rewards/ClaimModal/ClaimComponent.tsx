import { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import axios from 'axios'

import { MuonVerificationData } from 'types/dibs'
import { useDibsContract } from 'hooks/useContract'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import useDibsClaim from 'callbacks/useDibsClaim'
import { RewardData } from '../../RewardsTable'

import Column, { ColumnCenter } from 'components/Column'
import { Row, RowCenter, RowEnd, RowStart } from 'components/Row'
import { Close as CloseIcon } from 'components/Icons'
import RewardLogo from 'components/Icons/RewardLogo'
import MainButton from 'components/Button/MainButton'
import { DotFlashing } from 'components/Icons'
import { getShortFormattedDate } from 'utils/date'

const Wrapper = styled(ColumnCenter)<{ modal?: boolean }>`
  border: none;
  width: 100%;
  height: 380px;
  justify-content: space-between;
  background: ${({ theme }) => theme.color2};
  ${({ theme }) => theme.mediaWidth.upToLarge`
    width: 100%;
  `};
`

const Title = styled(RowStart)`
  padding: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.almostWhite};
`

const DateText = styled(RowStart)`
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: ${({ theme }) => theme.text};
`

const ContentWrapper = styled(Column)`
  width: 100%;
  padding: 0px 12px;
  position: relative;
  background-color: ${({ theme }) => theme.color2};
`

const AccountWrapper = styled(Row)`
  height: 40px;
  padding: 10px 12px;
  font-weight: 500;
  font-size: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color4};
  color: ${({ theme }) => theme.text};
`

const ImageWrapper = styled(RowCenter)`
  margin-top: 15px;
  margin-bottom: 34px;
  position: absolute;
  top: 0px;
  bottom: 20px;
`

const Close = styled.div`
  padding: 3px 9px 4px 8px;
  cursor: pointer;
  margin: 2px 12px 1px 0px;
  border-radius: 6px;
  &:hover {
    background-color: ${({ theme }) => theme.primaryDarkBg};
  }
`

const RewardText = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.almostWhite};
  margin-right: 20px;
`

const ExtraSpace = styled.div`
  background-color: ${({ theme }) => theme.color2};
  padding-top: 20px;
  width: 100%;
`

export default function ClaimComponent({
  onClose,
  data,
}: {
  onClose?: (isSubmitted?: boolean) => void
  data: RewardData
}) {
  const { account } = useActiveWeb3React()
  const DibsContract = useDibsContract()

  const mounted = useRef(false)
  const [loading, setLoading] = useState(false)
  const [submittedTxHash, setSubmittedTxHash] = useState<string | null>(null)

  const { callback: claimAllCallback } = useDibsClaim()

  const claim = useCallback(async () => {
    if (loading) return
    setLoading(true)
    let isSubmitted = false
    try {
      const axiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_REACT_APP_MUON_API_URL,
      })
      const projectId = await DibsContract?.PROJECT_ID()
      const verificationData = await axiosInstance.get<MuonVerificationData>(
        `/v1/?app=dibsGlobal&method=userVolume&params[projectId]=${projectId}&params[day]=${data.dateDay}&params[pair]=0x0000000000000000000000000000000000000000&params[user]=${account}`
      )
      console.log('verificationData', verificationData)
      const txHash = await claimAllCallback?.(verificationData.data)
      if (txHash) {
        setSubmittedTxHash(txHash)
        isSubmitted = true
      }
    } catch (e) {
      console.log('claim failed')
      console.log(e)
    }
    if (mounted.current) {
      setLoading(false)
    }
    if (onClose) {
      onClose(true)
    }
  }, [DibsContract, account, claimAllCallback, data.dateDay, loading])

  function getActionButton() {
    if (loading) {
      return (
        <MainButton simpleMode onClick={() => claim()} disabled>
          {'Requesting data from Muon...'}
          <DotFlashing />
        </MainButton>
      )
    }
    return <MainButton customText={'Claim Reward'} simpleMode onClick={() => claim()} />
  }

  return (
    <Wrapper modal={onClose ? true : false}>
      <ImageWrapper>
        <Image src={'/static/images/dibs/Rewards_small.gif'} alt="based-tableau" width={380} height={326} />
      </ImageWrapper>
      <Row style={{ zIndex: '2' }}>
        <Title>Claim Reward</Title>
        <RowEnd>
          {onClose && (
            <Close onClick={() => onClose(false)}>
              <CloseIcon size={12} />
            </Close>
          )}
        </RowEnd>
      </Row>

      <ContentWrapper>
        <AccountWrapper>
          <DateText>{getShortFormattedDate(data?.originalDate, true)} Reward</DateText>
          <RowEnd>
            <RewardText>{data?.myReward} BASED</RewardText>
            <RewardLogo size={24} />
          </RowEnd>
        </AccountWrapper>
        <ExtraSpace />
        {getActionButton()}
        <ExtraSpace />
      </ContentWrapper>
    </Wrapper>
  )
}
