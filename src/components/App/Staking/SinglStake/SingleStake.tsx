import React, { ReactNode, useCallback, useMemo, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import { BASED_TOKEN } from 'constants/tokens'
import { STAKING_ADDRESS } from 'constants/addresses'
import { SupportedChainId } from 'constants/chains'
import { tryParseAmount } from 'utils/parse'
import { formatAmount, toBN } from 'utils/numbers'

import { useBasedPrice, useStakingData, useStakingValue } from 'hooks/useStakingData'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { ApprovalState, useApproveCallback } from 'lib/hooks/useApproveCallback'

import { useStakeToken } from '../../../../callbacks/useStakeToken'
import { useCurrencyBalance } from 'state/wallet/hooks'

import { Tab } from 'components/Tab'
import { DotFlashing } from 'components/Icons'
import MainButton from 'components/Button/MainButton'
import { Title } from 'components/Banner/Header'
import { InputBox } from 'components/InputBox'
import basedIcon from '/public/static/images/tokens/BASED.svg'
import ChipList from 'components/ChipList'
import StakeTable from 'components/App/Staking/SinglStake/StakeTable'
import { lighten } from 'polished'

const Container = styled.div`
  position: relative;
  margin-bottom: 29px;
`
const ContentContainer = styled.div`
  margin-top: 36px;
  border-radius: 6px;
  position: relative;
  padding: 16px 24px 0;
  background: ${({ theme }) => theme.color2};
`
const Layout = styled.div`
  //margin: 25px 80px 0;
  width: 85%;
  margin: auto;
  padding: 0 12px;
`

const TitleWrapper = styled.div`
  position: relative;
  margin-top: 191px;
  margin-left: -60px;
`
const APRWrapper = styled.div`
  margin-top: 25px;
  text-align: center;
  margin-bottom: 9px;
`

const APRText = styled.div<{ fading?: boolean }>`
  color: ${({ theme }) => theme.tempPink};
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const APRValue = styled.div`
  color: ${({ theme }) => theme.tempPink};
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const TabWrapper = styled.div<{ width?: string }>`
  width: ${({ width }) => (width ? width : '')};
  margin: auto;
`

const SectionTitle = styled.div<{ hasIndent?: boolean; titleSize?: string; marginTop?: string; indent?: string }>`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 'initial')};
  color: ${({ theme }) => theme.tempPink};
  font-size: ${({ titleSize }) => (titleSize ? titleSize : '20px')};
  font-weight: 400;
  text-align: left;
  margin-left: ${({ hasIndent, indent }) => (hasIndent ? (indent ? indent : '17px') : '0')};
  margin-bottom: 7px;
`

const InputWrapper = styled.div`
  display: flex;
  gap: 19px;
  margin-bottom: 16px;
`

const ButtonWrap = styled.div`
  margin-top: 38px;
`

export enum StakeState {
  STAKE = 'Stake',
  UNSTAKE = 'Unstake',
}

export default function SingleStake() {
  const theme = useTheme()
  const [value, setValue] = useState('')
  const [boost, setBoost] = useState('')
  const [duration, setDuration] = useState('')
  const [activeTab, setActiveTab] = useState<StakeState>(StakeState.STAKE)
  const { stakedAmount } = useStakingData()
  const text = activeTab === StakeState.STAKE ? 'Balance:' : 'Staked Amount:'

  return (
    <Container>
      <ContentContainer>
        <TitleWrapper>
          <Title title="$BASED Staking" subtitle="Stake BASED to earn trading fees in USDbC" isSectionTitle={true} />
        </TitleWrapper>

        <TabWrapper width={'85%'}>
          <Tab
            hasBackground={false}
            tabOptions={[StakeState.STAKE, StakeState.UNSTAKE]}
            activeOption={activeTab}
            onChange={(option: string) => {
              setActiveTab(option as StakeState)
            }}
            width={'50%'}
            height={'40px'}
            fontSize={'16px'}
            borderRadius={'6px'}
            activeColor={theme.color5}
          ></Tab>
        </TabWrapper>
        <Layout>
          <div>
            <APR />
            <TitledSection title={'Amount'} marginTop={'9px'}>
              <InputWrapper>
                <InputBox
                  title="Stake Amount"
                  value={value}
                  currency={BASED_TOKEN}
                  symbolIcon={basedIcon}
                  symbolColor={theme.almostWhite}
                  onChange={(newValue: string) => {
                    setValue(newValue)
                  }}
                  max={true}
                  autoFocus={true}
                  balanceTitle={text}
                  balance={activeTab === StakeState.UNSTAKE ? stakedAmount : undefined}
                />
              </InputWrapper>
              <ChipList
                values={['25%', '50%', '75%', '100%']}
                chipSize={{ width: '185px', height: '24px' }}
                gap={'27px'}
                onChange={(chip) => {
                  Number(chip.replace('%', '') && stakedAmount && activeTab === StakeState.UNSTAKE)
                    ? setValue(String((Number(stakedAmount) * Number(chip.replace('%', ''))) / 100))
                    : ''
                }}
              ></ChipList>
            </TitledSection>

            {activeTab === StakeState.STAKE && (
              <>
                <TitledSection title={'Booster'} marginTop={'20px'}>
                  <InputWrapper>
                    <InputBox
                      autoFocus={false}
                      title="Duration (weeks)"
                      value={duration}
                      onChange={(newValue: string) => {
                        setDuration(newValue)
                      }}
                    />
                    <InputBox
                      autoFocus={false}
                      title="APR Boost"
                      value={boost}
                      readOnly={true}
                      onChange={(newValue: string) => {
                        setBoost(newValue)
                      }}
                    />
                  </InputWrapper>
                </TitledSection>
                <TitledSection title={'weeks'} hasIndent={false} titleSize={'16px'} marginTop={'5px'}>
                  <ChipList
                    values={['0', '6', '12', '18', '24', '30', '36', '42', '48']}
                    chipSize={{ width: '73px', height: '24px' }}
                    gap={'17px'}
                    onChange={(chip) => {
                      setDuration(chip)
                    }}
                  ></ChipList>
                </TitledSection>
              </>
            )}
            <ButtonWrap>
              <StakeButton
                value={value}
                activeTab={activeTab}
                onSuccess={() => {
                  setValue('')
                }}
              ></StakeButton>
            </ButtonWrap>

            <TitledSection title={'Locked Staking Portfolio'} marginTop={'72px'}>
              <StakeTable></StakeTable>
            </TitledSection>
          </div>
        </Layout>
      </ContentContainer>
    </Container>
  )
}

function StakeButton({ value, activeTab, onSuccess }: { value: string; activeTab: StakeState; onSuccess: () => void }) {
  const theme = useTheme()
  const { account } = useActiveWeb3React()
  const BASED_LOGO = useCurrencyLogo('BASED')
  const { stakedAmount } = useStakingData()
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)

  const borderColor = theme.darkPink
  const bgColor = theme.pink
  const hoverColor = lighten(0.05, theme.pink)
  const spender = STAKING_ADDRESS[SupportedChainId.BASE]

  const { callback: stakeCallback } = useStakeToken(value, activeTab)
  const basedBalance = useCurrencyBalance(account ?? undefined, BASED_TOKEN)

  const inputAmount = useMemo(() => {
    return tryParseAmount(value, BASED_TOKEN || undefined)
  }, [value])

  const insufficientBalance = useMemo(() => {
    if (!inputAmount) return false
    if (activeTab === StakeState.STAKE) return basedBalance?.lessThan(inputAmount)
    else return toBN(stakedAmount).isLessThan(value)
  }, [activeTab, basedBalance, inputAmount, stakedAmount, value])

  const [approvalState, approveCallback] = useApproveCallback(BASED_TOKEN, value ?? '0', spender)
  const [showApprove, showApproveLoader] = useMemo(() => {
    const show = BASED_TOKEN && approvalState !== ApprovalState.APPROVED && !!value && activeTab === StakeState.STAKE
    return [show, show && approvalState === ApprovalState.PENDING]
  }, [activeTab, approvalState, value])

  const handleAction = useCallback(async () => {
    if (!stakeCallback) {
      // toast.error(stakeError)
      return
    }

    try {
      setAwaitingConfirmation(true)
      await stakeCallback()
      setAwaitingConfirmation(false)
      onSuccess()
    } catch (e) {
      setAwaitingConfirmation(false)
      if (e instanceof Error) {
        console.log(e.message)
      } else {
        console.error(e)
      }
    }
  }, [stakeCallback])

  const handleApprove = async () => {
    try {
      setAwaitingConfirmation(true)
      const result = await approveCallback()

      if (result) {
        const waitResult = await result.wait()
        if (waitResult.status === 1) {
          handleAction()
          return
        }
      }

      setAwaitingConfirmation(false)

      // toggleDepositModal()
    } catch (err) {
      console.error(err)
      setAwaitingConfirmation(false)
      // toggleDepositModal()
    }
  }

  if (awaitingConfirmation) {
    return (
      <MainButton borderColor={borderColor} bgColor={bgColor} icon={BASED_LOGO}>
        Awaiting Confirmation <DotFlashing />
      </MainButton>
    )
  }

  if (insufficientBalance) return <MainButton disabled>Insufficient Balance</MainButton>

  if (showApproveLoader) {
    return (
      <MainButton borderColor={borderColor} bgColor={bgColor} hoverColor={hoverColor} icon={BASED_LOGO}>
        Approving <DotFlashing />
      </MainButton>
    )
  }

  if (showApprove) {
    return (
      <MainButton
        onClick={handleApprove}
        borderColor={borderColor}
        bgColor={bgColor}
        hoverColor={hoverColor}
        customText="Approve and Stake BASED"
        icon={BASED_LOGO}
      />
    )
  }

  return (
    <MainButton
      onClick={handleAction}
      borderColor={borderColor}
      bgColor={bgColor}
      hoverColor={hoverColor}
      customText={activeTab === StakeState.STAKE ? 'Stake BASED' : 'Unstake BASED'}
      icon={BASED_LOGO}
    />
  )
}

function APR() {
  const { basedPrice } = useBasedPrice()
  const { rewardRate, totalSupply } = useStakingValue()
  const aprValue = toBN(rewardRate).times(31536000).div(toBN(totalSupply).times(basedPrice)).times(100)

  return (
    <APRWrapper>
      <APRText>Your calculated APR:</APRText>
      <APRValue>{!aprValue.isNaN() ? `${formatAmount(aprValue, 4, true)}%` : '0'}</APRValue>
    </APRWrapper>
  )
}

interface TitledSectionProps {
  title: string
  children: ReactNode
  hasIndent?: boolean
  indent?: string
  titleSize?: string
  marginTop?: string
  style?: React.CSSProperties
}

export function TitledSection({
  title,
  children,
  hasIndent = true,
  titleSize,
  marginTop,
  indent,
  style,
}: TitledSectionProps) {
  return (
    <>
      <SectionTitle hasIndent={hasIndent} titleSize={titleSize} marginTop={marginTop} indent={indent}>
        {title}
      </SectionTitle>
      <div style={style}>{children}</div>
    </>
  )
}
