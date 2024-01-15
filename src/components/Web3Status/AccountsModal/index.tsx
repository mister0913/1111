import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Account as AccountType, BalanceInfosType } from 'types/user'
import { ApiState } from 'types/api'

import { AppThunkDispatch, useAppDispatch } from 'state'
import { updateAccount } from 'state/user/actions'
import { useActiveAccountAddress } from 'state/user/hooks'
import { useCreateAccountModalToggle, useModalOpen } from 'state/application/hooks'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { ApplicationModal } from 'state/application/reducer'
import { useHedgerInfo } from 'state/hedger/hooks'
import { getBalanceInfo } from 'state/user/thunks'

import Column from 'components/Column'
import { Card } from 'components/Card'
import Account from './Account'
import CreateAccountModal from 'components/ReviewModal/CreateAccountModal'
import MainButton from 'components/Button/MainButton'
import { MinimizedAccountDetails } from 'components/AccountDetails'
import { useMultiAccountContract } from 'hooks/useContract'

const ContentContainer = styled(Column)`
  gap: 12px;
  border-radius: 4px;
  position: absolute;
  top: 60px;
  right: 10px;
  width: clamp(200px, 360px, 99%);
  background: ${({ theme }) => theme.color3};
`

const DropdownContent = styled(Card)<{ isOpen: boolean }>`
  gap: 12px;
  padding: 0px 10px 10px 10px;
  border: none;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  background: ${({ theme }) => theme.color3};
`

const Title = styled.div`
  font-size: 14px;
  font-weight: 400;
  padding: 10px 9px 0px 9px;
  color: ${({ theme }) => theme.almostWhite};
`

export default function AccountsModal({ data, onDismiss }: { data: AccountType[]; onDismiss: () => void }) {
  const dispatch = useAppDispatch()
  const activeAccountAddress = useActiveAccountAddress()
  const showCreateAccountModal = useModalOpen(ApplicationModal.CREATE_ACCOUNT)
  const toggleCreateAccountModal = useCreateAccountModalToggle()
  const { balanceInfo, balanceInfoStatus } = useBalanceInfos()

  const onClick = (account: AccountType) => {
    dispatch(updateAccount(account))
    onDismiss()
  }

  function getInnerContent() {
    return (
      <div>
        {data.map((account, index) => {
          return (
            <Account
              account={account}
              key={index}
              active={activeAccountAddress ? activeAccountAddress === account.accountAddress : false}
              balanceInfo={balanceInfo[account.accountAddress.toLowerCase()]}
              balanceInfoStatus={balanceInfoStatus}
              onClick={() => onClick(account)}
            />
          )
        })}

        <MainButton simpleMode customText={'Create New Account'} onClick={toggleCreateAccountModal} height={40} />
      </div>
    )
  }

  return (
    <ContentContainer>
      <Title>Wallet and Accounts</Title>
      <MinimizedAccountDetails />
      <DropdownContent isOpen={true}>{getInnerContent()}</DropdownContent>
      {showCreateAccountModal && <CreateAccountModal />}
    </ContentContainer>
  )
}

function useBalanceInfos() {
  const [balanceInfo, setBalanceInfo] = useState<BalanceInfosType>({})
  const [balanceInfoStatus, setBalanceInfoStatus] = useState<ApiState>(ApiState.OK)

  const hedger = useHedgerInfo()
  const { baseUrl } = hedger || {}
  const { account } = useActiveWeb3React()
  const multiAccountContract = useMultiAccountContract()
  const dispatch: AppThunkDispatch = useAppDispatch()

  useEffect(() => {
    setBalanceInfoStatus(ApiState.LOADING)
    dispatch(getBalanceInfo({ account, baseUrl, multiAccountAddress: multiAccountContract?.address }))
      .unwrap()
      .then((res) => {
        setBalanceInfo(res)
        setBalanceInfoStatus(ApiState.OK)
      })
      .catch(() => {
        setBalanceInfo({})
        setBalanceInfoStatus(ApiState.ERROR)
      })
  }, [account, baseUrl, dispatch, multiAccountContract?.address])

  return { balanceInfo, balanceInfoStatus }
}
