import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import isEqual from 'lodash/isEqual'

import { useAppDispatch, useAppSelector } from 'state'
import { getConnection } from 'connection/utils'
import { V3_CHAIN_IDS } from 'constants/chains'
import { WEB_SETTING } from 'config'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { ApplicationModal } from 'state/application/reducer'
import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'
import usePrevious from 'lib/hooks/usePrevious'
import { useAccountPartyAStat, useActiveAccount } from 'state/user/hooks'
import { useCreateAccountModalToggle, useModalOpen, useToggleWalletModal } from 'state/application/hooks'
import { updateAccount } from 'state/user/actions'
import { AllAccountsUpdater } from 'state/user/allAccountsUpdater'

import { useAccountsLength, useUserAccounts } from 'hooks/useAccounts'

import AnimatedButton from 'components/Button/MainButton'
import { ChevronDown } from 'components/Icons'
import { Row, RowCenter, RowEnd, RowStart } from 'components/Row'
import AccountsModal from './AccountsModal'
import CreateAccountModal from 'components/ReviewModal/CreateAccountModal'
import AccountUpnl from 'components/App/AccountData/AccountUpnl'
import Badge from './Badge'
import SwitchNetworkButton from './SwitchNetworkButton'

const InnerContentWrapper = styled(Row)`
  padding: 11px 8px 10px 12px;
  height: 36px;
  font-size: 12px;
  border-radius: 6px;
  color: ${({ theme }) => theme.almostWhite};
  background: ${({ theme }) => theme.color3};
`

const UserStatus = styled(RowStart)`
  overflow: hidden;
  gap: 4px;
`

const NameWrapper = styled.div<{ nameLength: number }>`
  overflow: hidden;
  width: 80px;
  padding: 8px 0;
  font-size: 13px;

  @keyframes scrolling-forward {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-${({ nameLength }) => nameLength * 10}%);
    }
  }

  &:hover .account-name {
    animation: scrolling-forward ${({ nameLength }) => nameLength * 0.5}s linear infinite;
  }
`

const Button = styled.div<{ error?: boolean }>`
  width: 204px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  color: ${({ theme }) => theme.border1};
  background: ${({ theme }) => theme.gradLight};
  padding: 8px 0px;

  ${({ error, theme }) =>
    error &&
    `
    font-weight: 600;
    color: #2d2ae1;
    border-left: 1px solid ${theme.red1};
    background: #efdee6;
  `}
`

const ChooseAccountButton = styled(Button)`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.almostWhite};
`

const UpnlText = styled(RowCenter)`
  font-size: 10px;
  color: ${({ theme }) => theme.text};
  margin-right: 12px;
`

const CreateAccountWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 226px;
  height: 36px;
  border-radius: 6px;
  justify-content: space-between;
  color: ${({ theme }) => theme.almostWhite};
  background: ${({ theme }) => theme.color4};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: unset;
  `};
`

const Chevron = styled(ChevronDown)<{ open: boolean }>`
  transform: rotateX(${({ open }) => (open ? '180deg' : '0deg')});
  transition: 0.5s;
`

export default function MultiAccount() {
  const { accounts } = useUserAccounts()
  const previousAccounts = usePrevious(accounts)
  const { account, connector, chainId } = useActiveWeb3React()
  const connectionType = getConnection(connector).type

  const activeAccount = useActiveAccount()
  const toggleWalletModal = useToggleWalletModal()
  const showCreateAccountModal = useModalOpen(ApplicationModal.CREATE_ACCOUNT)
  const showDepositModal = useModalOpen(ApplicationModal.DEPOSIT)
  const showWalletModal = useModalOpen(ApplicationModal.WALLET)
  const dispatch = useAppDispatch()

  const { accountAddress, name } = activeAccount || {}
  const { loading: accountsLoading } = useAccountsLength()

  const { loading: statsLoading } = useAccountPartyAStat(accountAddress)
  const ref = useRef(null)
  useOnOutsideClick(ref, () => {
    if (!showCreateAccountModal && !showDepositModal && !showWalletModal) setClickAccounts(false)
  })

  const [clickAccounts, setClickAccounts] = useState(false)
  const toggleCreateAccountModal = useCreateAccountModalToggle()

  const error = useAppSelector((state) => state.connection.errorByConnectionType[connectionType])

  const standardAccountName = (() => {
    if (name && name.length > 10) return `${name.slice(0, 10)}...`
    return name
  })()
  const [accountName, setAccountName] = useState(standardAccountName)

  // Choose last sub account
  useEffect(() => {
    if (accounts !== null && !isEqual(accounts, previousAccounts)) {
      const lastSubAccount = accounts[accounts.length - 1]
      dispatch(updateAccount(lastSubAccount))
    }
  }, [accounts, dispatch, previousAccounts])

  useEffect(() => {
    standardAccountName && setAccountName(standardAccountName)
  }, [standardAccountName])

  const showCallbackError: boolean = useMemo(() => {
    if (!chainId || !account) return false
    return !V3_CHAIN_IDS.includes(chainId)
  }, [chainId, account])

  function getInnerContent() {
    return (
      <InnerContentWrapper onClick={() => setClickAccounts((previousValue) => !previousValue)}>
        {activeAccount ? (
          <>
            <UserStatus>
              <NameWrapper
                nameLength={name?.length ?? 0}
                onMouseOver={() => {
                  setAccountName(name)
                }}
                onMouseLeave={() => {
                  setAccountName(standardAccountName)
                }}
              >
                <div className="account-name">{accountName}</div>
              </NameWrapper>
              {WEB_SETTING.showBadge && <Badge />}
            </UserStatus>
            <UpnlText>
              uPNL:
              <AccountUpnl size={'10px'} />
            </UpnlText>
            <RowEnd width={'10%'}>
              <Chevron open={clickAccounts} />
            </RowEnd>
          </>
        ) : (
          <CreateAccountWrapper>
            <ChooseAccountButton>Choose Account</ChooseAccountButton>

            <RowEnd width={'10%'} marginRight={'14px'}>
              <Chevron open={clickAccounts} />
            </RowEnd>
          </CreateAccountWrapper>
        )}
      </InnerContentWrapper>
    )
  }

  function getContent() {
    if (showCallbackError) {
      return <SwitchNetworkButton text={'Switch Network'} />
    }

    if (account) {
      if (accountsLoading || statsLoading) {
        return (
          <CreateAccountWrapper>
            <p style={{ padding: '6px 14px' }}>Loading...</p>
          </CreateAccountWrapper>
        )
      }
      if (accounts.length === 0) {
        return (
          <React.Fragment>
            <AnimatedButton
              onClick={toggleCreateAccountModal}
              customText={'Create Account'}
              simpleMode
              width={144}
              height={36}
            />
            {showCreateAccountModal && <CreateAccountModal />}
          </React.Fragment>
        )
      }
      return (
        <CreateAccountWrapper ref={ref}>
          {clickAccounts && (
            <div>
              <AccountsModal onDismiss={() => setClickAccounts((previousValue) => !previousValue)} data={accounts} />
              <AllAccountsUpdater />
            </div>
          )}
          {getInnerContent()}
        </CreateAccountWrapper>
      )
    } else if (error) {
      return <SwitchNetworkButton text={'Error'} />
    } else {
      return (
        <div onClick={toggleWalletModal}>
          <AnimatedButton className="tour-step-2" customText={'Connect Wallet'} simpleMode width={144} height={36} />
        </div>
      )
    }
  }

  return <React.Fragment> {getContent()} </React.Fragment>
}
