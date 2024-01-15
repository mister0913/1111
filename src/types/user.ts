export type Account = {
  accountAddress: string
  name: string
}

export type AccountUpnl = {
  upnl: number
  timestamp: number
}

export interface BalanceInfoResponse {
  address: string
  allocated_balance: number
  cva: number
  party_a_mm: number
  party_b_mm: number
  lf: number
  total_locked: number
  pending_cva: number
  pending_party_a_mm: number
  pending_party_b_mm: number
  pending_lf: number
  total_pending_locked: number
  upnl: number
  notional: number
  timestamp: number
  available_balance: number
}

export interface BalanceInfo {
  address: string
  allocatedBalance: number
  cva: number
  partyAMm: number
  partyBMm: number
  lf: number
  totalLocked: number
  pendingCva: number
  pendingPartyAMm: number
  pendingPartyBMm: number
  pendingLf: number
  totalPendingLocked: number
  upnl: number
  notional: number
  timestamp: number
  availableBalance: number
}

export type BalanceInfosType = {
  [address: string]: BalanceInfo
}

export type UserPartyAStatDetail = {
  collateralBalance: string
  accountBalance: string
  liquidationStatus: boolean
  accountBalanceLimit: string
  withdrawCooldown: string
  cooldownMA: string

  allocatedBalance: string
  lockedCVA: string
  lockedLF: string
  lockedPartyAMM: string
  lockedPartyBMM: string

  pendingLockedCVA: string
  pendingLockedLF: string
  pendingLockedPartyAMM: string
  pendingLockedPartyBMM: string

  positionsCount: number
  pendingCount: number
  nonces: number
  quotesCount: number
  loading: boolean
}

export const initialUserPartyAStatDetail: UserPartyAStatDetail = {
  collateralBalance: '0',
  accountBalance: '0',
  liquidationStatus: false,
  accountBalanceLimit: '0',
  withdrawCooldown: '0',
  cooldownMA: '0',

  allocatedBalance: '0',
  lockedCVA: '0',
  lockedLF: '0',
  lockedPartyAMM: '0',
  lockedPartyBMM: '0',

  pendingLockedCVA: '0',
  pendingLockedLF: '0',
  pendingLockedPartyAMM: '0',
  pendingLockedPartyBMM: '0',

  positionsCount: 0,
  pendingCount: 0,
  nonces: 0,
  quotesCount: 80,
  loading: false,
}

export type UserPartyAStatType = {
  [key: string]: UserPartyAStatDetail
}
