import { CurrencyAmount, Token } from '@sushiswap/core-sdk'

type TokenAddress = string

export type TokenBalancesMap = Record<TokenAddress, CurrencyAmount<Token>>

export interface Wallet {
  walletType: string
  account: string
}
