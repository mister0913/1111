import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import Checkbox from 'components/CheckBox'
import { WEB_SETTING } from 'config'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { truncateAddress } from 'utils/address'
import { getTokenWithFallbackChainId } from 'utils/token'

import { useAddAccountToContract } from 'callbacks/useMultiAccount'
import { useIsTermsAccepted } from 'state/user/hooks'

import { useTour } from '@reactour/tour'
import Column from 'components/Column'
import AnimatedButton from 'components/Button/MainButton'
import { Client, Close as CloseIcon, DotFlashing, Wallet } from 'components/Icons'
import { Row, RowCenter, RowEnd, RowStart } from 'components/Row'
import TermsAndServices from 'components/TermsAndServices'
import { Step } from 'components/Tour/Step'
import ScreenEffect from './ScreenEffect'
import { ExternalLink } from 'components/Link'

const Wrapper = styled.div<{ modal?: boolean }>`
  border: none;
  width: 100%;
  min-height: 379px;
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
  color: ${({ theme }) => theme.white};
`

const ContentWrapper = styled(Column)`
  padding: 12px;
  position: relative;
`

export const DepositButtonWrapper = styled.div`
  padding: 1px;
  height: 40px;
  margin-top: 10px;
  width: unset;

  background: ${({ theme }) => theme.border1};
`

export const DepositButton = styled(RowCenter) <{ disabled?: boolean }>`
  flex-wrap: nowrap;
  height: 100%;
  border-radius: 6px;
  background: ${({ theme }) => theme.blue};
  border: 1px solid ${({ theme }) => theme.darkBlue};
  box-shadow: 0px 3px 0px 0px ${({ theme }) => theme.darkBlue};

  &:focus,
  &:hover,
  &:active {
    cursor: ${({ disabled }) => !disabled && 'pointer'};
    background: ${({ theme }) => theme.color4};
  }
`

export const DepositButtonLabel = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.text0};
`

const AccountWrapper = styled(Row)`
  height: 40px;
  margin-bottom: 16px;
  padding: 10px 12px;
  font-weight: 500;
  font-size: 12px;
  border-radius: 6px;

  background: ${({ theme }) => theme.color3};
  color: ${({ theme }) => theme.almostWhite};
`

const Account2Wrapper = styled(Row)`
  padding: 10px 12px;
  font-weight: 400;
  font-size: 16px;

  color: ${({ theme }) => theme.almostWhite};
`


const AccountNameWrapper = styled(AccountWrapper)`
  border-radius: 6px;

  background: ${({ theme }) => theme.color3};
  color: ${({ theme }) => theme.text2};
`

const Input = styled.input<{
  [x: string]: any
}>`
  height: fit-content;
  width: 90%;
  border: none;
  background: transparent;
  font-size: 12px;
  color: ${({ theme }) => theme.white};
  padding-left: 2px;

  &::placeholder {
    color: ${({ theme }) => theme.text3};
  }

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.white};
    outline: none;
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      font-size: 0.6rem;
    `}
`

const ImageWrapper = styled(RowCenter)`
  min-width: 108%;
  margin-left: -4%;
  width: 100%;
  height: 100%;
  margin-top: -30px;
`

const Close = styled.div`
  width: 24px;
  height: 24px;
  padding: 3px 6px;
  cursor: pointer;
  margin: 2px 12px 1px 0px;
`

const DescriptionText = styled.p`
  font-size: 11px;
  margin-top: 16px;
  color: ${({ theme }) => theme.pink};
`

const LabelDarkText = styled.p`
width: 80%
font-family: Alata;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;

color: ${({ theme }) => theme.text};
`

const TickWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  padding-left: 12px;
  color: ${({ theme }) => theme.white};
`

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`

const TermsText = styled.span`
  margin-left: 4px;
  text-decoration: underline;
  color: ${({ theme }) => theme.primaryBlue1};
`

export default function CreateAccount({ onClose, }: { onClose?: () => void; }) {
  const { account, chainId } = useActiveWeb3React();
  const [name, setName] = useState('');
  const [showTerms, setShowTerms] = useState<boolean>(false);
  const [, setTxHash] = useState('');
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId);
  const [awaitingConfirmation, setAwaitingConfirmation] = useState<boolean>(false);
  const [isContinued, setIsContinued] = useState<number>(0);
  const [isTermsAccepted, setIsTermsAccepted] = useState<boolean>(false);
  const [isTermsAccepted1, setIsTermsAccepted1] = useState<boolean>(false);

  const { callback: addAccountToContractCallback } = useAddAccountToContract(name);
  const { setIsOpen, setSteps, setCurrentStep } = useTour();

  const [screenEffect, setScreenEffect] = useState<boolean>(false);

  useEffect(() => {
    if (!setSteps) {
      return
    }

    if (localStorage.getItem('tour-part2') === 'done') {
      return
    }

    localStorage.setItem('tour-part1', 'done')
    localStorage.setItem('tour-part2', 'done')

    setSteps([
      {
        selector: '.tour-step-3',
        content: <Step title="Create account" content={'Create an account to continue'} />,
      },
    ])
    setCurrentStep(0)
    setIsOpen(true)
  }, [setSteps])

  const onAddAccount = useCallback(async () => {
    if (!addAccountToContractCallback) return
    try {
      setAwaitingConfirmation(true)
      const txHash = await addAccountToContractCallback()
      console.log({ txHash })
      setTxHash(txHash)
      setAwaitingConfirmation(false)
      onClose && onClose()
    } catch (e) {
      if (e instanceof Error) {
        console.error(e)
      } else {
        console.debug(e)
      }
    }
    setAwaitingConfirmation(false)
  }, [addAccountToContractCallback, onClose]);

  const continueAccount = () => {
    if (!screenEffect && setScreenEffect)
      setScreenEffect(true);
    setIsContinued(1);
  }

  console.log(isContinued, '+++iscontine')

  function getActionButton() {
    if (awaitingConfirmation) {
      return (
        <DepositButtonWrapper>
          <DepositButton>
            <DepositButtonLabel>Awaiting Confirmation</DepositButtonLabel>
            <DotFlashing />
          </DepositButton>
        </DepositButtonWrapper>
      )
    }

    if (isContinued === 0) {
      return (
        <DepositButtonWrapper>
          <AnimatedButton
            onClick={continueAccount}
            customText={name === '' ? 'Enter account name' : 'Create Account'}
            simpleMode
            height={40}
            disabled={(WEB_SETTING.showSignModal && !isTermsAccepted) || !name}
          />
        </DepositButtonWrapper>
      )
    }

    if (isContinued === 1) {
      return (
        <DepositButtonWrapper>
          <AnimatedButton
            onClick={() => setIsContinued(2)}
            customText={'Continue'}
            simpleMode
            height={40}
          />
        </DepositButtonWrapper>
      )
    }

    if (isContinued === 2) {
      return (
        <DepositButtonWrapper>
          <AnimatedButton
            onClick={() => onAddAccount()}
            customText={'Sign'}
            simpleMode
            height={40}
            disabled={!isTermsAccepted1}
          />
        </DepositButtonWrapper>
      )
    }
  }

  if (screenEffect) return (<ScreenEffect onClose={() => setScreenEffect(false)} />)

  return (
    <Wrapper modal={onClose ? true : false} className="tour-step-3">
      <Row>
        <Title>Create Account</Title>
        <RowEnd>
          {onClose && (
            <Close onClick={onClose}>
              {' '}
              <CloseIcon size={12} style={{ marginRight: '12px' }} />
            </Close>
          )}
        </RowEnd>
      </Row>
      <ContentWrapper>
        <ImageWrapper>
          <Image src={isContinued === 0 ?
            '/static/images/account/silhouette.png'
            :
            isContinued === 1 ? '/static/images/account/head.png'
              :
              '/static/images/account/head.png'}
            alt="based-tableau" width={414} height={278} />
        </ImageWrapper>
        {isContinued === 0 ?
          <AccountWrapper>
            <LabelWrapper>
              {account && truncateAddress(account)}
            </LabelWrapper>
            <RowEnd>
              <Wallet />
            </RowEnd>
          </AccountWrapper>
          :
          isContinued === 1 &&
          <Account2Wrapper>
            <LabelWrapper>
              <LabelDarkText>Wallet Address:</LabelDarkText>
              {account && truncateAddress(account)}
            </LabelWrapper>
            <RowEnd>
              <Wallet />
            </RowEnd>
          </Account2Wrapper>
        }

        {isContinued === 0 ?
          <AccountNameWrapper>
            <Input
              autoFocus
              type="text"
              placeholder={'Account Name'}
              spellCheck="false"
              onBlur={() => null}
              value={name}
              minLength={1}
              maxLength={20}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
            />
            <RowEnd>
              <Client />
            </RowEnd>
          </AccountNameWrapper>
          :
          isContinued === 1 &&
          <Account2Wrapper>
            <LabelWrapper>
              <LabelDarkText>Account Name:</LabelDarkText>
              {name}
            </LabelWrapper>
            <RowEnd>
              <Client />
            </RowEnd>
          </Account2Wrapper>
        }
        {isContinued === 0 &&
          <>
            <DescriptionText>Your account name is stored on-chain and is visible to other users.</DescriptionText>
            <TickWrapper>
              <Checkbox
                name={`user-accept-term-${onClose ? 0 : 1}`}
                id={`user-accept-term-${onClose ? 0 : 1}`}
                label={
                  <div>
                    Users interacting with this software do so entirely at their own risk
                  </div>
                }
                checked={isTermsAccepted}
                onChange={() => setIsTermsAccepted((prevValue) => !prevValue)}
              />
            </TickWrapper>
          </>
        }

        {isContinued === 2 &&
          <AccountWrapper>
            <TickWrapper>
              <Checkbox
                name={'user-accept-term-service'}
                id={'user-accept-term-service'}
                label={
                  <div>
                    I agree with
                    <ExternalLink href="https://docs.based.markets/brand-assets/terms-of-services">
                      <TermsText>Terms of Service</TermsText>
                    </ExternalLink>
                  </div>
                }
                checked={isTermsAccepted}
                onChange={() => setIsTermsAccepted1((prevValue) => !prevValue)}
              />
            </TickWrapper>
          </AccountWrapper>
        }

        {getActionButton()}
      </ContentWrapper>
      {showTerms ? <TermsAndServices onDismiss={() => setShowTerms(false)} /> : null}
    </Wrapper>
  )
}
