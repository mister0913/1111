import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import BASED_TERMS from '/public/static/images/etc/BasedTerms.svg'

import { useGetMessage } from 'hooks/useCheckSign'
import { useSignMessage } from 'callbacks/useSignMessage'
import { useWriteSign } from 'callbacks/useWriteSign'

import { Modal } from 'components/Modal'
import Checkbox from 'components/CheckBox'
import { Close as CloseIcon, DotFlashing } from 'components/Icons'
import { RowCenter, RowStart } from 'components/Row'
import TermButton from 'components/Button/MainButton'
import { ExternalLink } from 'components/Link'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 100%;
  padding: 16px 12px;
  border-radius: 8px;
`

const Title = styled(RowStart)`
  padding: 0px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.text0};
`

const ImageWrapper = styled(RowCenter)`
  margin-top: 15px;
  margin-bottom: 34px;
`

const Close = styled.div`
  position: absolute;
  right: 0px;
  width: 24px;
  height: 24px;
  padding: 3px 6px;
  cursor: pointer;
  margin: 2px 12px 1px 0px;
  background: ${({ theme }) => theme.bg6};
`

const AcceptRiskWrapper = styled.div`
  padding: 4px 0px 16px 12px;
`

const TermsText = styled.span`
  margin-left: 4px;
  text-decoration: underline;
  color: ${({ theme }) => theme.primaryBlue1};
`

export default function TermsModal({ isOpen = true, onDismiss }: { isOpen?: boolean; onDismiss: () => void }) {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false)

  return (
    <Modal isOpen={isOpen} onBackgroundClick={onDismiss} onEscapeKeydown={onDismiss}>
      <Wrapper>
        <Title>
          Terms of Service
          <Close onClick={onDismiss}>
            {' '}
            <CloseIcon size={12} style={{ marginRight: '12px' }} />
          </Close>
        </Title>

        <ImageWrapper>
          <Image src={BASED_TERMS} alt="based_logo" />
        </ImageWrapper>
        <AcceptRiskWrapper>
          <Checkbox
            name={'user-accept-risk'}
            id={'user-accept-risk'}
            label={
              <div>
                I confirm that I have read and I agree to the
                <ExternalLink href="https://docs.based.markets/brand-assets/terms-of-services">
                  <TermsText>Terms of Service</TermsText>
                </ExternalLink>
              </div>
            }
            checked={isTermsAccepted}
            onChange={() => setIsTermsAccepted((prevValue) => !prevValue)}
          />
        </AcceptRiskWrapper>
        <ActionButton isTermsAccepted={isTermsAccepted} />
      </Wrapper>
    </Modal>
  )
}

function ActionButton({ isTermsAccepted }: { isTermsAccepted: boolean }) {
  const [signature, setSignature] = useState('')
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false)

  const message = useGetMessage()
  const { callback: signMessageCallback } = useSignMessage(message)
  const { callback: writeSignCallback } = useWriteSign()

  const onSignMessage = useCallback(async () => {
    if (!signMessageCallback) return
    try {
      const sign = await signMessageCallback()
      return sign
    } catch (e) {
      if (e instanceof Error) {
        console.error(e)
      } else {
        console.debug(e)
      }
      throw new Error(e.message)
    }
  }, [signMessageCallback])

  const onWriteSignCb = useCallback(
    async (sign: string) => {
      if (!writeSignCallback || !sign) return
      try {
        await writeSignCallback(sign)
      } catch (e) {
        if (e instanceof Error) {
          console.error(e)
        } else {
          console.debug(e)
        }
      }
      setAwaitingConfirmation(false)
    },
    [writeSignCallback]
  )

  const onClickButton = useCallback(async () => {
    if (isTermsAccepted) {
      setAwaitingConfirmation(true)

      if (!signature) {
        onSignMessage()
          .then((sign) => {
            if (sign) {
              setSignature(sign)
              onWriteSignCb(sign)
            }
          })
          .catch(() => {
            setAwaitingConfirmation(false)
          })
      } else {
        onWriteSignCb(signature)
      }
    }
  }, [isTermsAccepted, onSignMessage, onWriteSignCb, signature])

  return (
    <TermButton
      disabled={awaitingConfirmation}
      customText={'Sign & Accept Terms of Service'}
      onClick={onClickButton}
      simpleMode
    >
      {awaitingConfirmation && <DotFlashing />}
    </TermButton>
  )
}
