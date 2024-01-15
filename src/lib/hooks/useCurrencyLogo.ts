import { useMemo } from 'react'

import DefaultToken from '/public/static/images/tokens/default-token.svg'

const tokenNames = [
  'BTC',
  'USDT',
  'USDC',
  'ETH',
  'LINA',
  'ADA',
  'ARB',
  'AVAX',
  'DOGE',
  'FTM',
  'KLAY',
  'MATIC',
  'SOL',
  'XRP',
  'ZEC',
  'ALGO',
  'ATOM',
  'BAT',
  'BCH',
  'BNB',
  'DASH',
  'EOS',
  'ETC',
  'IOST',
  'IOTA',
  'LINK',
  'LTC',
  'PEPE',
  'QTUM',
  'THETA',
  'TRX',
  'VET',
  'XLM',
  'XTZ',
  'ZIL',
  'XMR',
  'ZRX',
  'YFI',
  'COMP',
  'CRV',
  'KNC',
  'OMG',
  'BAND',
  'KAVA',
  'UNI',
  'MKR',
  'SUSHI',
  'AAVE',
  'BASED',
]

const LogoMap: { [token: string]: any } = {}

tokenNames.forEach((token) => {
  LogoMap[token] = require(`/public/static/images/tokens/${token}.svg`)
})

export default function useCurrencyLogo(contractOrSymbol?: string): string {
  return useMemo(() => {
    try {
      if (contractOrSymbol && contractOrSymbol in LogoMap) {
        return LogoMap[contractOrSymbol]
      }
      return DefaultToken
      // return `https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/${contractOrSymbol}/logo.png`
    } catch (err) {
      return DefaultToken
    }
  }, [contractOrSymbol])
}
