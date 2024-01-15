import styled from 'styled-components'
import Image from 'next/image'

import { formatAmount } from 'utils/numbers'

import { ApplicationModal } from 'state/application/reducer'
import { useAccountPartyAStat, useActiveAccountAddress } from 'state/user/hooks'
import { useDepositModalToggle, useModalOpen } from 'state/application/hooks'

import { Row, RowStart, RowBetween, RowCenter, RowEnd } from 'components/Row'
import DepositModal from 'components/ReviewModal/DepositModal'
import { DepositButton, DepositButtonLabel, DepositButtonWrapper } from './CreateAccount'
import { useTour } from '@reactour/tour'
import { useEffect } from 'react'
import { Step } from 'components/Tour/Step'

const Wrapper = styled.div`
  border: none;
  width: 100%;
  min-height: 379px;
  background: ${({ theme }) => theme.bg0};
  ${({ theme }) => theme.mediaWidth.upToLarge`
    width: 100%;
  `};
`

const Title = styled(RowStart)`
  padding: 20px 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.text0};
`

const ContentWrapper = styled.div`
  display: flex;
  padding: 12px;
  flex-flow: column nowrap;
  /* height: 100%; */
  position: relative;
`

const ImageWrapper = styled(RowCenter)`
  margin-top: 25px;
  margin-bottom: 36px;
`

const Label = styled.div`
  justify-self: start;
  color: ${({ theme }) => theme.text3};
`

const Value = styled.div`
  justify-self: end;
`

const DepositText = styled.div`
  font-size: 14px;
  text-align: center;
  margin-bottom: 37px;

  color: ${({ theme }) => theme.primaryPink};
`

export default function StartTrading({ symbol }: { symbol?: string }) {
  const account = useActiveAccountAddress()
  const { collateralBalance } = useAccountPartyAStat(account)
  const showDepositModal = useModalOpen(ApplicationModal.DEPOSIT)
  const toggleDepositModal = useDepositModalToggle()
  const { setIsOpen, setSteps, setCurrentStep } = useTour()

  useEffect(() => {
    if (!setSteps) {
      return
    }

    if (localStorage.getItem('tour-part3') === 'done') {
      return
    }

    localStorage.setItem('tour-part1', 'done')
    localStorage.setItem('tour-part2', 'done')
    localStorage.setItem('tour-part3', 'done')

    setSteps([
      {
        selector: '.tour-step-4',
        content: <Step title={'Deposit funds'} content={'To start trading, deposit funds (USDbC)'} />,
      },
    ])
    setCurrentStep(0)
    setIsOpen(true)
  }, [setSteps])

  return (
    <Wrapper>
      <Row>
        <Title>Deposit {symbol}</Title>
        <RowEnd style={{ marginRight: '12px' }}>
          <Image src={'/static/images/etc/USDCAsset.svg'} alt="Asset" width={103} height={36} />
        </RowEnd>
      </Row>

      <ContentWrapper>
        <ImageWrapper>
          <Image src={'/static/images/etc/BasedTableau.svg'} alt="based-tableau" width={332} height={76} />
        </ImageWrapper>
        <DepositText>Deposit {symbol} and start trading</DepositText>
        <RowBetween style={{ marginBottom: '24px' }}>
          <Label>Account Balance:</Label>
          <Value>
            {formatAmount(collateralBalance)} {symbol}
          </Value>
        </RowBetween>
        <div className="tour-step-4">
          <DepositButtonWrapper>
            <DepositButton onClick={() => toggleDepositModal()}>
              <DepositButtonLabel>Deposit {symbol}</DepositButtonLabel>
            </DepositButton>
          </DepositButtonWrapper>
        </div>
      </ContentWrapper>
      {showDepositModal && <DepositModal />}
    </Wrapper>
  )
}
