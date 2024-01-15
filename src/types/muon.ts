export type UpnlSigType = {
  reqId: string
  timestamp: number
  upnl: string
  sigs: SchnorrerSign
} | null

export type SchnorrerSign = {
  signature: string
  owner: string
  nonce: string
} | null

export type PriceSig = {
  reqId: string
  timestamp: number
  quoteIds: string[]
  prices: string[]
  sigs: SchnorrerSign
} | null

export type SingleUpnlAndPriceSig = {
  reqId: string
  timestamp: number
  upnl: string
  price: string
  gatewaySignature: string
  sigs: SchnorrerSign
} | null
