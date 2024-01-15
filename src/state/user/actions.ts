import { createAction } from '@reduxjs/toolkit'
import { ConnectionType } from 'connection'

import { TermsStatus } from './types'
import { ConnectionStatus } from 'state/hedger/types'
import { Account, AccountUpnl, UserPartyAStatDetail } from 'types/user'

export const updateMatchesDarkMode = createAction<{ matchesDarkMode: boolean }>('user/updateMatchesDarkMode')
export const updateUserDarkMode = createAction<{ userDarkMode: boolean }>('user/updateUserDarkMode')
export const updateUserExpertMode = createAction<{ userExpertMode: boolean }>('user/updateUserExpertMode')
export const updateSelectedWallet = createAction<{ wallet: ConnectionType | undefined }>('user/updateSelectedWallet')
export const updateUserFavorites = createAction<string[]>('user/updateUserFavorites')
export const updateUserLeverage = createAction<number>('user/updateUserLeverage')
export const updateUserSlippageTolerance = createAction<{ userSlippageTolerance: 'auto' }>(
  'user/updateUserSlippageTolerance'
)
export const updateAccount = createAction<Account | null>('user/updateAccount')
export const updateAccountUpnl = createAction<AccountUpnl>('user/updateAccountUpnl')
export const updateAllAccountsUpnl = createAction<{ account: string; upnl: AccountUpnl }>('user/updateAllAccountsUpnl')

export const updateUpnlWebSocketStatus = createAction<{ status: ConnectionStatus }>('user/updateUpnlWebSocketStatus')
export const updateAccountPartyAStat = createAction<{ address: string; value: UserPartyAStatDetail }>(
  'user/updateAccountPartyAStat'
)
export const updateAcceptTerms = createAction<TermsStatus>('user/updateAcceptTerms')
