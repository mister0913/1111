import { useCallback, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import Image from 'next/image'
import BigNumber from 'bignumber.js'

import { AppThunkDispatch, useAppDispatch } from 'state'
import { formatAmount, formatCurrency, fromWei } from 'utils/numbers'
import { ApiState } from 'types/api'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import { useStakingData, useStakingValue } from 'hooks/useStakingData'

import { getTotalTradingFee } from 'state/hedger/thunks'
import { ITotalTradingFee } from 'state/hedger/types'
import { useClaimReward } from 'callbacks/useStakeToken'

import { RowBetween } from 'components/Row'
import Column from 'components/Column'
import MainButton from 'components/Button/MainButton'
import { DotFlashing } from 'components/Icons'
import { TransactionCallbackState } from 'utils/web3'
import { Title } from 'components/Banner/Header'
import { TitledSection } from 'components/App/Staking/SinglStake/SingleStake'

const Layout = styled(Column)`
  height: 736px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color2};
  padding: 16px 24px 0;
  margin-top: 36px;
`

const HeaderWrapper = styled(Column)`
  position: relative;
  margin-left: -2%;
`

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 80%;
  margin-top: 130px;
  height: 100%;
`

const FeeWrapper = styled(RowBetween)`
  height: 50px;
  font-size: 14px;
  padding: 16px 12px;
  background-color: ${({ theme }) => theme.bgPink1};
  color: ${({ theme }) => theme.primaryBlue1};
  border-bottom: 1px solid ${({ theme }) => theme.primaryPink};
`

const MainWrapper = styled(Column)`
  height: calc(100% - 72px);
  border-radius: 6px;
  padding: 16px 12px;
  background: ${({ theme }) => theme.color3};
  justify-content: space-between;
`

const Separator = styled.hr`
  border: 1.5px solid ${({ theme }) => theme.color2};
`

const InfoWrapper = styled(Column)`
  gap: 8px;
  padding: 0 24px;
`

const InfoHeader = styled.span`
  font-size: 32px;
  margin-left: 15px;
  font-weight: 400;
  word-wrap: break-word;
  color: ${({ theme }) => theme.almostWhite};
`

const InfoRow = styled(RowBetween)<{ margin?: string }>`
  color: ${({ theme }) => theme.periwinkle};
  font-size: 18px;
  font-weight: 400;
  word-wrap: break-word;
  margin: ${({ margin }) => margin};
`

const InfoValue = styled.span<{ hasValue?: boolean }>`
  color: ${({ theme, hasValue }) => theme.almostWhite};
  font-weight: 400;
  font-size: 18px;
`

const RewardWrapper = styled(Column)`
  gap: 6px;
`

const Bar = styled(Column)`
  padding: 16px 12px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color4};
  gap: 8px;
`

const BarRowWrapper = styled(RowBetween)<{ hasValue: boolean }>`
  font-size: 12px;
  ${({ hasValue, theme }) => !hasValue && `color: ${theme.lightPink};`}
`

const BarValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 17px;
`

const BarValueTitle = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.periwinkle};
`

const BarValue = styled.div`
  color: ${({ theme }) => theme.almostWhite};
  font-size: 20px;
  font-weight: 400;
`

const BarIcon = styled(RowBetween)`
  color: ${({ theme }) => theme.almostWhite};
  width: initial;
  font-size: 20px;
  font-weight: 600;
  gap: 7px;
  margin-right: 14px;
`

export default function Rewards() {
  return (
    <Layout>
      <Header></Header>
      <Container>
        <MainWrapper>
          <InfoSection />
          <RewardSection />
        </MainWrapper>
      </Container>
    </Layout>
  )
}

function Header() {
  return (
    <HeaderWrapper>
      <Title
        title="Staking Rewards"
        subtitle="Claim your USDbC staking rewards"
        titlePosition={{ top: '0' }}
        isSectionTitle={true}
      ></Title>
    </HeaderWrapper>
  )
}

function InfoSection() {
  const { totalSupply } = useStakingValue()
  const { stakedAmount } = useStakingData()
  const { chainId } = useActiveWeb3React()
  const [totalTrading, setTotalTrading] = useState('-')
  const [tradingFeeStatus, setTradingFeeStatus] = useState<ApiState>(ApiState.LOADING)
  const dispatch: AppThunkDispatch = useAppDispatch()

  useEffect(() => {
    setTradingFeeStatus(ApiState.LOADING)
    dispatch(getTotalTradingFee({ chainId }))
      .unwrap()
      .then((res: ITotalTradingFee) => {
        const { platformFee } = res
        setTotalTrading(fromWei(platformFee))
        setTradingFeeStatus(ApiState.OK)
      })
      .catch(() => {
        setTotalTrading('')
        setTradingFeeStatus(ApiState.ERROR)
      })
  }, [chainId, dispatch])

  return (
    <InfoWrapper>
      <InfoHeader>Your Rewards</InfoHeader>
      <Separator />
      <TitledSection title={'Info'} titleSize={'24px'} hasIndent={true} indent={'12px'} style={{ padding: '0 12px' }}>
        <InfoRow>
          <span>Total BASED Staked:</span>
          <InfoValue hasValue={Boolean(Number(totalSupply))}>{formatAmount(totalSupply, 6, true)}</InfoValue>
        </InfoRow>
        <InfoRow>
          <span>Your BASED Staked:</span>
          <InfoValue hasValue={Boolean(Number(stakedAmount))}>{formatAmount(stakedAmount, 6, true)}</InfoValue>
        </InfoRow>
        <InfoRow>
          <span>Your Percentage Staked:</span>
          <InfoValue hasValue={Boolean(Number(stakedAmount && totalSupply))}>
            {formatAmount((Number(stakedAmount) / Number(totalSupply)) * 100, 6, true)}%
          </InfoValue>
        </InfoRow>
        <InfoRow margin={'16px 0 0 0'}>
          <span>Total Fees Generated:</span>
          <InfoValue hasValue={true}>
            {tradingFeeStatus === ApiState.LOADING ? (
              <DotFlashing />
            ) : tradingFeeStatus === ApiState.OK ? (
              `${formatAmount(totalTrading, 4, true)} USDbC`
            ) : (
              '- USDbC'
            )}
          </InfoValue>
        </InfoRow>
      </TitledSection>
    </InfoWrapper>
  )
}

function RewardSection() {
  const icon = useCurrencyLogo('USDC')
  const { reward } = useStakingData()
  const rewardValue = formatAmount(reward, 6, false)
  return (
    <RewardWrapper>
      <TitledSection
        title={'Rewards'}
        titleSize={'24px'}
        hasIndent={true}
        indent={'38px'}
        style={{ padding: '0 20px' }}
      >
        <Bar>
          <BarRowWrapper hasValue={Boolean(reward)}>
            <BarValueWrapper>
              <BarValueTitle>Staking Reward</BarValueTitle>
              <BarValue>{Boolean(reward) ? <span>{formatDollarAmount(rewardValue)}</span> : '-'}</BarValue>
            </BarValueWrapper>
            <BarIcon>
              <Image src={icon} alt={'USDbC icon'} width={'28'} height={'28'} /> USDbC
            </BarIcon>
          </BarRowWrapper>
        </Bar>
        <ClaimRewardButton reward={rewardValue} />
      </TitledSection>
    </RewardWrapper>
  )
}

function ClaimRewardButton({ reward }: { reward: string }) {
  const icon = useCurrencyLogo('USDC')
  const theme = useTheme()
  const bgColor = theme.blue
  const borderColor = theme.darkBlue
  const textColor = theme.color1
  const hoverColor = theme.lightSkyBlue
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)

  const { callback: claimCallback, state } = useClaimReward()

  const handleAction = useCallback(async () => {
    if (!claimCallback) {
      // toast.error(stakeError)
      return
    }

    try {
      setAwaitingConfirmation(true)
      await claimCallback()
      setAwaitingConfirmation(false)
    } catch (e) {
      setAwaitingConfirmation(false)
      if (e instanceof Error) {
        console.log(e.message)
      } else {
        console.error(e)
      }
    }
  }, [claimCallback])

  if (awaitingConfirmation || state === TransactionCallbackState.PENDING) {
    return (
      <MainButton borderColor={borderColor} bgColor={bgColor} hoverColor={hoverColor} icon={icon}>
        Awaiting Confirmation <DotFlashing />
      </MainButton>
    )
  }

  return (
    <MainButton
      icon={icon}
      customText={`Claim ${formatDollarAmount(reward)} USDbC`}
      bgColor={bgColor}
      borderColor={borderColor}
      textColor={textColor}
      hoverColor={hoverColor}
      onClick={handleAction}
      style={{ marginTop: '20px', marginBottom: '48px' }}
    />
  )
}

export const formatDollarAmount = (amount: BigNumber.Value | undefined | null) => {
  const formattedAmount = formatCurrency(amount, 4, true)
  if (formattedAmount === '< 0.001') {
    return '< 0.001'
  }
  return formattedAmount !== '-' ? `${formattedAmount}` : '-'
}
