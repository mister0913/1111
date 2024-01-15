import { Provider as ReduxProvider } from 'react-redux'
import { ModalProvider } from 'styled-react-modal'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { BlockNumberProvider } from 'lib/hooks/useBlockNumber'
import { TourProvider } from '@reactour/tour'

import store, { persistor } from 'state'

import ThemeProvider, { ThemedGlobalStyle } from 'theme'
import Popups from 'components/Popups'
import Layout from 'components/Layout'
import { ModalBackground } from 'components/Modal'
import { PersistGate } from 'redux-persist/integration/react'
import { DepositButton, DepositButtonLabel, DepositButtonWrapper } from 'components/App/AccountData/CreateAccount'
import { Close as CloseIcon } from 'components/Icons'
import styled from 'styled-components'

const Close = styled.div`
  width: 24px;
  height: 24px;
  padding: 3px 6px;
  cursor: pointer;
  margin: 2px 2px 1px 0px;
  background: ${({ theme }) => theme.bg6};
`

const Updaters = dynamic(() => import('state/updaters'), { ssr: false })
const Web3Provider = dynamic(() => import('components/Web3Provider'), {
  ssr: false,
})

if (typeof window !== 'undefined' && !!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Web3Provider>
          <ThemeProvider>
            <TourProvider
              steps={[]}
              showDots={false}
              showBadge={false}
              showCloseButton={true}
              disableInteraction={true}
              disableKeyboardNavigation={true}
              styles={{
                popover: (base) => ({
                  ...base,
                  padding: '0px',
                  paddingBottom: '20px',
                  background: '#D2DAEB',
                  border: '1px solid #123378',
                  minWidth: '300px',
                }),
              }}
              components={{
                Close: (onClick) => (
                  <Close
                    onClick={() => (onClick && onClick.onClick ? onClick.onClick() : null)}
                    style={{ float: 'right', margin: '10px' }}
                  >
                    <CloseIcon size={12} />
                  </Close>
                ),
              }}
              onClickHighlighted={(e, clickProps) => {
                clickProps.setIsOpen(false)
              }}
              onClickMask={(clickProps) => {
                //..
              }}
              prevButton={({ Button, currentStep, stepsLength, setIsOpen, setCurrentStep, steps }) => {
                if (steps && steps[currentStep].selector === '.tour-step-5') {
                  return
                }

                return (
                  <div
                    onClick={() => {
                      localStorage.setItem('tour-part1', 'done')
                      localStorage.setItem('tour-part2', 'done')
                      localStorage.setItem('tour-part3', 'done')
                      localStorage.setItem('tour-part4', 'done')
                      setIsOpen(false)
                    }}
                    style={{
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      color: 'rgb(10, 35, 87)',
                      position: 'absolute',
                      left: 'calc(50% - 45px)',
                      bottom: '9px',
                      fontSize: '12px',
                      textDecoration: 'underline',
                    }}
                  >
                    Skip Walkthrough
                  </div>
                )
              }}
              nextButton={({ Button, currentStep, stepsLength, setIsOpen, setCurrentStep, steps }) => {
                const last = currentStep === stepsLength - 1

                if (last) {
                  return (
                    // <div onClick={() => setIsOpen(false)} style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                    //   OK
                    // </div>

                    <DepositButtonWrapper style={{ width: '100%', margin: '10px', marginTop: '-5px' }}>
                      <DepositButton onClick={() => setIsOpen(false)}>
                        <DepositButtonLabel>OK</DepositButtonLabel>
                      </DepositButton>
                    </DepositButtonWrapper>
                  )
                }

                return (
                  <DepositButtonWrapper style={{ width: '100%', margin: '10px', marginTop: '-5px' }}>
                    <DepositButton
                      onClick={() => {
                        setCurrentStep((s) => (s === (steps?.length || 1) - 1 ? 0 : s + 1))
                      }}
                    >
                      <DepositButtonLabel>OK</DepositButtonLabel>
                    </DepositButton>
                  </DepositButtonWrapper>
                )
              }}
            >
              <ThemedGlobalStyle />
              <ModalProvider backgroundComponent={ModalBackground}>
                <Toaster position="bottom-center" />
                <BlockNumberProvider>
                  <Popups />
                  <Updaters />
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </BlockNumberProvider>
              </ModalProvider>
            </TourProvider>
          </ThemeProvider>
        </Web3Provider>
      </PersistGate>
    </ReduxProvider>
  )
}
