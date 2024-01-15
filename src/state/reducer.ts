import { combineReducers } from '@reduxjs/toolkit'

import application from './application/reducer'
import transactions from './transactions/reducer'
import user from './user/reducer'
import connection from './connection/reducer'
import wallets from './wallet/reducer'
import multicall from 'lib/state/multicall'
import hedger from './hedger/reducer'
import trade from './trade/reducer'
import notifications from './notifications/reducer'
import quotes from './quotes/reducer'

const reducer = combineReducers({
  application,
  transactions,
  user,
  connection,
  wallets,
  multicall: multicall.reducer,
  hedger,
  trade,
  notifications,
  quotes,
})

export default reducer
