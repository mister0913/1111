import { OpenInterest } from 'types/hedger'
import { Hedger } from 'types/hedger'
import { SupportedChainId } from 'constants/chains'

export enum SupportedHedgerId {
  BASED = 'Based',
}

export interface HedgerInfoMap {
  [chainId: number]: Hedger
}

export interface DataMap {
  [chainId: number]: { domain: string; clientName?: string }
}

const HEDGER_DATA_MAP: DataMap = {
  [SupportedChainId.BASE]: { domain: 'base-hedger82.rasa.capital', clientName: 'BASED' },
}

export const HedgerInfo = duplicateHedgerInfo(
  HEDGER_DATA_MAP,
  'https://fapi.binance.com/',
  'wss://fstream.binance.com/stream'
)

export const DEFAULT_HEDGER = {
  apiUrl: 'https://fapi.binance.com/',
  webSocketUrl: 'wss://fstream.binance.com/stream',
  baseUrl: 'https://base-hedger82.rasa.capital',
  webSocketFundingRateUrl: 'wss://base-hedger82.rasa.capital/ws/funding-rate-ws',
  webSocketUpnlUrl: '',
  webSocketNotificationUrl: '',
  defaultMarketId: 1,
  markets: [],
  openInterest: { total: 0, used: 0 },
  id: SupportedHedgerId.BASED,
  fetchData: false,
} as Hedger

export function duplicateHedgerInfo(hedgerDataMap: DataMap, apiUrl: string, webSocketUrl: string): HedgerInfoMap {
  return Object.keys(hedgerDataMap)
    .map((chainId) => Number(chainId)) //convert string to number because of the object.keys() always returns string
    .reduce((acc: HedgerInfoMap, chainId: number) => {
      const { clientName, domain } = hedgerDataMap[chainId]
      acc[chainId] = {
        apiUrl,
        webSocketUrl,
        baseUrl: `https://${domain}`,
        webSocketUpnlUrl: `wss://${domain}/ws/upnl-ws`,
        webSocketFundingRateUrl: `wss://${domain}/ws/funding-rate-ws`,
        webSocketNotificationUrl: `wss://${domain}/ws/position-state-ws3`,
        defaultMarketId: 1,
        markets: [],
        openInterest: { total: 0, used: 0 } as OpenInterest,
        id: SupportedHedgerId.BASED,
        fetchData: true,
        clientName,
      }
      return acc
    }, {})
}

export function getHedgerInfo(hedgerId: any): Hedger | null {
  if (hedgerId) {
    return HedgerInfo[hedgerId] ?? DEFAULT_HEDGER
  }

  return DEFAULT_HEDGER
}

export function getKeyFromValue(obj: HedgerInfoMap, value: Hedger | null): number | undefined {
  const entries = Object.entries(obj)

  for (const [key, val] of entries) {
    if (val === value) {
      return Number(key) // Return the key if the value matches
    }
  }

  return undefined // Return undefined if no match is found
}
