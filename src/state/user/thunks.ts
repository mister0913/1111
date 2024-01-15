import { createAsyncThunk } from '@reduxjs/toolkit'

import { makeHttpRequest } from 'utils/http'
import { BALANCE_HISTORY_ITEMS_NUMBER } from 'constants/misc'
import { BalanceHistoryData, DepositWithdrawalsData } from './types'
import { getAppNameHeader } from 'state/hedger/thunks'

import { getBalanceHistoryApolloClient } from 'apollo/client/balanceHistory'
import { BALANCE_CHANGES_DATA, TOTAL_DEPOSITS_AND_WITHDRAWALS } from 'apollo/queries'
import { WEB_SETTING } from 'config'
import { BalanceInfo, BalanceInfosType } from 'types/user'
import { toBN } from 'utils/numbers'

export const getIsWhiteList = createAsyncThunk(
  'user/getWalletWhitelist',
  async (payload: { baseUrl: string | undefined; account: string | undefined; multiAccountAddress: string }) => {
    const { baseUrl: hedgerUrl, account, multiAccountAddress } = payload

    if (!hedgerUrl) {
      throw new Error('hedgerUrl is empty')
    }
    if (!account) {
      throw new Error('account is empty')
    }
    if (!multiAccountAddress) {
      throw new Error('multiAccountAddress is empty')
    }

    const { href: isWhiteListUrl } = new URL(`/check_in-whitelist/${account}/${multiAccountAddress}`, hedgerUrl)

    let isWhiteList = null
    try {
      if (!WEB_SETTING.checkWhiteList) return { isWhiteList: true }

      const [whiteListRes] = await Promise.allSettled([makeHttpRequest(isWhiteListUrl, getAppNameHeader())])
      if (whiteListRes.status === 'fulfilled') {
        isWhiteList = whiteListRes.value
      }
    } catch (error) {
      isWhiteList = false
      console.error(error, ' happened in check-in-whitelist')
    }

    return { isWhiteList }
  }
)

export const getBalanceHistory = createAsyncThunk(
  'user/getBalanceHistory',
  async ({
    account,
    chainId,
    skip,
    first,
  }: {
    account: string | null | undefined
    chainId: number | undefined
    skip: number
    first: number
  }) => {
    if (!account) {
      throw new Error('account is undefined')
    }
    if (!chainId) {
      throw new Error('chainId is empty')
    }

    try {
      const client = getBalanceHistoryApolloClient(chainId)
      if (!client) return {}
      let hasMore = true

      const {
        data: { balanceChanges },
      } = await client.query<{
        balanceChanges: BalanceHistoryData[]
      }>({
        query: BALANCE_CHANGES_DATA,
        variables: { account: account.toLowerCase(), first, skip },
        fetchPolicy: 'no-cache',
      })

      if (balanceChanges.length !== BALANCE_HISTORY_ITEMS_NUMBER) {
        hasMore = false
      }

      return { result: balanceChanges, hasMore }
    } catch (error) {
      console.error(error)
      throw new Error(`Unable to query data from Client`)
    }
  }
)

export const getTotalDepositsAndWithdrawals = createAsyncThunk(
  'user/getTotalDepositsAndWithdrawals',
  async ({ account, chainId }: { account: string | null | undefined; chainId: number | undefined }) => {
    if (!account) {
      throw new Error('account is undefined')
    }
    if (!chainId) {
      throw new Error('chainId is empty')
    }

    try {
      const client = getBalanceHistoryApolloClient(chainId)
      if (!client) return { result: null }

      const {
        data: { accounts },
      } = await client.query<{ accounts: DepositWithdrawalsData[] }>({
        query: TOTAL_DEPOSITS_AND_WITHDRAWALS,
        variables: { id: account.toLowerCase() },
        fetchPolicy: 'no-cache',
      })

      if (accounts.length) return { result: accounts[0] }
      return { result: null }
    } catch (error) {
      console.error(error)
      throw new Error(`Unable to query data from Client`)
    }
  }
)

export const getBalanceInfo = createAsyncThunk(
  'user/getBalanceInfo',
  async (payload: {
    baseUrl: string | undefined
    account: string | undefined
    multiAccountAddress: string | undefined
  }) => {
    const { baseUrl: hedgerUrl, account, multiAccountAddress } = payload

    if (!hedgerUrl) {
      throw new Error('hedgerUrl is empty')
    }
    if (!account) {
      throw new Error('account is empty')
    }
    if (!multiAccountAddress) {
      throw new Error('multiAccountAddress is empty')
    }

    const { href: balanceInfoUrl } = new URL(`/get_balance_info/${account}/${multiAccountAddress}`, hedgerUrl)

    const balanceInfos: BalanceInfosType = {}
    try {
      const [balanceInfoRes] = await Promise.allSettled([makeHttpRequest(balanceInfoUrl, getAppNameHeader())])

      if (balanceInfoRes.status === 'fulfilled') {
        const value = balanceInfoRes.value
        const keys = Object.keys(balanceInfoRes.value)

        keys.forEach((key) => {
          const info = value[key]['party_a']

          const totalLocked = toBN(info.party_a_mm).plus(info.cva).plus(info.lf).toNumber()
          const totalPendingLocked = toBN(info.pending_party_a_mm)
            .plus(info.pending_cva)
            .plus(info.pending_lf)
            .toNumber()

          balanceInfos[info.address.toLowerCase()] = {
            allocatedBalance: info.allocated_balance,
            cva: info.cva,
            partyAMm: info.party_a_mm,
            partyBMm: info.party_b_mm,
            lf: info.lf,
            totalLocked,
            pendingCva: info.pending_cva,
            pendingPartyAMm: info.pending_party_a_mm,
            pendingPartyBMm: info.pending_party_b_mm,
            pendingLf: info.pending_lf,
            totalPendingLocked,
            upnl: info.upnl,
            notional: info.notional,
            timestamp: info.timestamp,
            availableBalance: info.available_balance,
          } as BalanceInfo
        })
      }
    } catch (error) {
      console.error(error, ' happened in getBalanceInfo')
      throw error
    }

    return balanceInfos
  }
)
