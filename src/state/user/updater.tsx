import { useEffect, useMemo } from 'react'
import isEmpty from 'lodash/isEmpty'
import { AppDispatch, AppThunkDispatch, useAppDispatch } from 'state'
import useWebSocket, { ReadyState } from 'react-use-websocket'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import useIsWindowVisible from 'lib/hooks/useIsWindowVisible'

import { AccountUpnl } from 'types/user'
import { useHedgerInfo } from 'state/hedger/hooks'

import { updateAccountUpnl, updateMatchesDarkMode } from './actions'
import { useActiveAccountAddress, useSetUpnlWebSocketStatus } from './hooks'
import { getIsWhiteList, getTotalDepositsAndWithdrawals } from './thunks'
import { ConnectionStatus } from './types'
import { useMultiAccountContract } from 'hooks/useContract'

export function UserUpdater(): null {
  const dispatch = useAppDispatch()
  const thunkDispatch: AppThunkDispatch = useAppDispatch()
  const { account, chainId } = useActiveWeb3React()
  const activeAccountAddress = useActiveAccountAddress()
  const MultiAccountContract = useMultiAccountContract()

  const { baseUrl, fetchData } = useHedgerInfo() || {}
  useUpnlWebSocket(dispatch)

  useEffect(() => {
    if (fetchData && MultiAccountContract)
      thunkDispatch(getIsWhiteList({ baseUrl, account, multiAccountAddress: MultiAccountContract.address }))
  }, [thunkDispatch, baseUrl, account, fetchData, MultiAccountContract])

  useEffect(() => {
    if (chainId) thunkDispatch(getTotalDepositsAndWithdrawals({ account: activeAccountAddress, chainId }))
  }, [activeAccountAddress, chainId, thunkDispatch])

  // keep dark mode in sync with the system
  useEffect(() => {
    const darkHandler = (match: MediaQueryListEvent) => {
      dispatch(updateMatchesDarkMode({ matchesDarkMode: match.matches }))
    }

    const match = window?.matchMedia('(prefers-color-scheme: dark)')
    dispatch(updateMatchesDarkMode({ matchesDarkMode: match.matches }))

    if (match?.addListener) {
      match?.addListener(darkHandler)
    } else if (match?.addEventListener) {
      match?.addEventListener('change', darkHandler)
    }

    return () => {
      if (match?.removeListener) {
        match?.removeListener(darkHandler)
      } else if (match?.removeEventListener) {
        match?.removeEventListener('change', darkHandler)
      }
    }
  }, [dispatch])

  return null
}

function useUpnlWebSocket(dispatch: AppDispatch) {
  const windowVisible = useIsWindowVisible()
  const activeAccountAddress = useActiveAccountAddress()
  const updateWebSocketStatus = useSetUpnlWebSocketStatus()
  const { webSocketUpnlUrl } = useHedgerInfo() || {}

  const url = useMemo(() => {
    if (webSocketUpnlUrl) {
      return webSocketUpnlUrl
    }
    return null
  }, [webSocketUpnlUrl])

  const {
    readyState: upnlWebSocketState,
    sendMessage: sendAddress,
    lastJsonMessage: upnlWebSocketMessage,
  } = useWebSocket(url, {
    reconnectAttempts: 5,
    retryOnError: true,
    onOpen: () => {
      console.log('WebSocket connection established.')
    },
    shouldReconnect: () => true,
    onError: (e) => console.log('WebSocket connection has error ', e),
  })

  const connectionStatus = useMemo(() => {
    if (upnlWebSocketState === ReadyState.OPEN) {
      return ConnectionStatus.OPEN
    } else {
      return ConnectionStatus.CLOSED
    }
  }, [upnlWebSocketState])

  useEffect(() => {
    updateWebSocketStatus(connectionStatus)
  }, [connectionStatus, updateWebSocketStatus])

  useEffect(() => {
    if (upnlWebSocketState === ReadyState.OPEN && activeAccountAddress) {
      sendAddress(activeAccountAddress)
    }
  }, [upnlWebSocketState, activeAccountAddress, sendAddress, windowVisible])

  useEffect(() => {
    try {
      if (!upnlWebSocketMessage || isEmpty(upnlWebSocketMessage)) {
        dispatch(
          updateAccountUpnl({
            upnl: 0,
            timestamp: 0,
          })
        )
        return
      }

      // TODO: we should add type checking here
      const lastMessage: AccountUpnl = (upnlWebSocketMessage as any) ?? {
        upnl: 0,
        timestamp: 0,
        available_balance: 0,
      }
      dispatch(updateAccountUpnl(lastMessage))
    } catch (error) {
      dispatch(
        updateAccountUpnl({
          upnl: 0,
          timestamp: 0,
        })
      )
    }
  }, [dispatch, upnlWebSocketMessage, windowVisible, upnlWebSocketState])
}
