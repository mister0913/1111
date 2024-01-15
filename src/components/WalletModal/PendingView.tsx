import styled from 'styled-components'
import { Connector } from '@web3-react/types'

import { PrimaryButton } from 'components/Button'
import { ColumnCenter } from 'components/Column'
import { RowCenter, RowStart } from 'components/Row'
import { ThemedText } from 'components/Text'
import { Warning } from 'components/Icons'
import { Row } from 'components/Row'
import Image from 'next/image'

const PendingSection = styled(RowCenter)`
  flex-flow: column nowrap;
  & > * {
    width: 100%;
  }
`

const LoadingMessage = styled(RowStart)<{ error?: boolean }>`
  flex-flow: row nowrap;
  color: ${({ error, theme }) => (error ? theme.red3 : 'inherit')};
  & > * {
    padding: 1rem;
  }
`

const ErrorGroup = styled(RowStart)`
  flex-flow: column nowrap;
  color: ${({ theme }) => theme.red1};
`

const LoadingWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
`

const LoaderContainer = styled(RowCenter)`
  width: unset;
  flex-wrap: nowrap;
  margin: 16px 0;
`

const Title = styled.div`
  font-size: 16px;
  margin: 20px 0px 12px 0px;
  color: ${({ theme }) => theme.warning};
`

const ConnectingText = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text0};
`

const Description = styled.div`
  font-size: 14px;
  text-align: center;
  margin-bottom: 35px;
  color: ${({ theme }) => theme.text1};
`

const Text = styled.div`
  font-size: 14px;
  padding-top: 18px;
  color: ${({ theme }) => theme.text1};
`

export default function PendingView({
  connector,
  error = false,
  tryActivation,
  openOptions,
}: {
  connector: Connector
  error?: boolean
  tryActivation: (connector: Connector) => void
  openOptions: () => void
}) {
  return (
    <PendingSection>
      <LoadingMessage error={error}>
        <LoadingWrapper>
          {error ? (
            <ErrorGroup>
              <Warning />

              <Title>Error connecting</Title>
              <Description>
                The connection attempt failed. Please click try again and follow the steps to connect in your wallet.
              </Description>
              <Row gap={'8px'}>
                <PrimaryButton
                  onClick={() => {
                    tryActivation(connector)
                  }}
                  style={{ marginLeft: 'auto' }}
                >
                  Try Again
                </PrimaryButton>
                <PrimaryButton onClick={openOptions} style={{ whiteSpace: 'nowrap' }}>
                  <p>Back to wallet selection</p>
                </PrimaryButton>
              </Row>
            </ErrorGroup>
          ) : (
            <>
              <ColumnCenter style={{ margin: '0px auto' }}>
                <LoaderContainer style={{ padding: '16px 0px' }}>
                  <Image src={'/static/images/etc/SimpleLogo.svg'} alt="Asset" width={72} height={78} />
                </LoaderContainer>
                <ThemedText.MediumHeader>
                  <ConnectingText>Connecting...</ConnectingText>
                </ThemedText.MediumHeader>
                <ThemedText.MediumHeader>
                  <Text>Confirm this connection in your wallet</Text>
                </ThemedText.MediumHeader>
              </ColumnCenter>
            </>
          )}
        </LoadingWrapper>
      </LoadingMessage>
    </PendingSection>
  )
}
