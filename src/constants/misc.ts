import { RetryOptions } from 'utils/retry'
import { SupportedChainId } from 'constants/chains'

export const APP_NAME = 'BASED'
export const APP_URL = 'https://trade.based.markets'

export const DEFAULT_RETRY_OPTIONS: RetryOptions = { n: 1, minWait: 0, maxWait: 0 }

export const AVERAGE_L1_BLOCK_TIME = 12000

export const UNDER_MAINTENANCE = false

// Only applies to L2
export const RETRY_OPTIONS_BY_CHAIN_ID: { [chainId: number]: RetryOptions } = {
  [SupportedChainId.ARBITRUM]: { n: 10, minWait: 250, maxWait: 1000 },
  [SupportedChainId.FANTOM]: { n: 10, minWait: 250, maxWait: 1000 },
  [SupportedChainId.BSC]: { n: 10, minWait: 250, maxWait: 1000 },
  [SupportedChainId.BSC_TESTNET]: { n: 10, minWait: 250, maxWait: 1000 },
  [SupportedChainId.BASE]: { n: 10, minWait: 250, maxWait: 1000 },
}

// transaction popup dismissal amounts
export const DEFAULT_TXN_DISMISS_MS = 25000
export const L2_TXN_DISMISS_MS = 5000

export const DEFAULT_PRECISION = 2

export const GLOBAL_MULTI_ACCOUNTABLE_PAUSED = false

export const MARKET_PRICE_COEFFICIENT = 1.07

// this for limit orders price constraint
export const MARKET_ORDER_DEADLINE = 300 // 5 minutes
export const LIMIT_ORDER_DEADLINE = 311040120 // 10 years

export const MAX_LEVERAGE_VALUE = 40
export const MIN_LEVERAGE_VALUE = 1

export const MAX_PENDINGS_POSITIONS_NUMBER = 10
export const BALANCE_HISTORY_ITEMS_NUMBER = 10
