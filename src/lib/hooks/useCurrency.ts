import { useMemo } from 'react'
import { arrayify } from '@ethersproject/bytes'
import { parseBytes32String } from '@ethersproject/strings'
import { Currency, Token } from '@sushiswap/core-sdk'

import { TOKEN_SHORTHANDS } from 'constants/tokens'
import { isSupportedChain } from 'constants/chains'
import { DEFAULT_ERC20_DECIMALS } from 'utils/token'
import { isAddress } from 'utils/validate'
import { supportedChainId } from 'utils/supportedChainId'

import { NEVER_RELOAD, useSingleCallResult } from 'lib/hooks/multicall'
import { useBytes32TokenContract, useERC20Contract } from 'hooks/useContract'
import useNativeCurrency from 'lib/hooks/useNativeCurrency'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

// parse a name or symbol from a token response
const BYTES32_REGEX = /^0x[a-fA-F0-9]{64}$/

function parseStringOrBytes32(str: string | undefined, bytes32: string | undefined, defaultValue: string): string {
  return str && str.length > 0
    ? str
    : // need to check for proper bytes string and valid terminator
    bytes32 && BYTES32_REGEX.test(bytes32) && arrayify(bytes32)[31] === 0
    ? parseBytes32String(bytes32)
    : defaultValue
}

const UNKNOWN_TOKEN_SYMBOL = 'UNKNOWN'
const UNKNOWN_TOKEN_NAME = 'Unknown Token'

/**
 * Returns a Token from the tokenAddress.
 * Returns null if token is loading or null was passed.
 * Returns undefined if tokenAddress is invalid or token does not exist.
 */
export function useTokenFromActiveNetwork(tokenAddress: string | undefined): Token | null | undefined {
  const { chainId } = useActiveWeb3React()

  const formattedAddress = isAddress(tokenAddress)
  const tokenContract = useERC20Contract(formattedAddress ? formattedAddress : undefined, false)
  const tokenContractBytes32 = useBytes32TokenContract(formattedAddress ? formattedAddress : undefined, false)

  // TODO: Fix redux-multicall so that these values do not reload.
  const tokenName = useSingleCallResult(tokenContract, 'name', undefined, NEVER_RELOAD)
  const tokenNameBytes32 = useSingleCallResult(tokenContractBytes32, 'name', undefined, NEVER_RELOAD)
  const symbol = useSingleCallResult(tokenContract, 'symbol', undefined, NEVER_RELOAD)
  const symbolBytes32 = useSingleCallResult(tokenContractBytes32, 'symbol', undefined, NEVER_RELOAD)
  const decimals = useSingleCallResult(tokenContract, 'decimals', undefined, NEVER_RELOAD)

  const isLoading = useMemo(
    () => decimals.loading || symbol.loading || tokenName.loading,
    [decimals.loading, symbol.loading, tokenName.loading]
  )
  const parsedDecimals = useMemo(() => decimals?.result?.[0] ?? DEFAULT_ERC20_DECIMALS, [decimals.result])

  const parsedSymbol = useMemo(
    () => parseStringOrBytes32(symbol.result?.[0], symbolBytes32.result?.[0], UNKNOWN_TOKEN_SYMBOL),
    [symbol.result, symbolBytes32.result]
  )
  const parsedName = useMemo(
    () => parseStringOrBytes32(tokenName.result?.[0], tokenNameBytes32.result?.[0], UNKNOWN_TOKEN_NAME),
    [tokenName.result, tokenNameBytes32.result]
  )

  return useMemo(() => {
    // If the token is on another chain, we cannot fetch it on-chain, and it is invalid.
    if (typeof tokenAddress !== 'string' || !isSupportedChain(chainId) || !formattedAddress) return undefined
    if (isLoading || !chainId) return null

    return new Token(chainId, formattedAddress, parsedDecimals, parsedSymbol, parsedName)
  }, [chainId, tokenAddress, formattedAddress, isLoading, parsedDecimals, parsedSymbol, parsedName])
}

type TokenMap = { [address: string]: Token }

/**
 * Returns a Token from the tokenAddress.
 * Returns null if token is loading or null was passed.
 * Returns undefined if tokenAddress is invalid or token does not exist.
 */
export function useTokenFromMapOrNetwork(tokens: TokenMap, tokenAddress?: string | null): Token | null | undefined {
  const address = isAddress(tokenAddress)
  const token: Token | undefined = address ? tokens[address] : undefined

  const tokenFromNetwork = useTokenFromActiveNetwork(token ? undefined : address ? address : undefined)

  return tokenFromNetwork ?? token
}

/**
 * Returns a Currency from the currencyId.
 * Returns null if currency is loading or null was passed.
 * Returns undefined if currencyId is invalid or token does not exist.
 */
export function useCurrencyFromMap(tokens: TokenMap, currencyId?: string | null): Currency | null | undefined {
  const nativeCurrency = useNativeCurrency()
  const { chainId } = useActiveWeb3React()
  const isNative = Boolean(nativeCurrency && currencyId?.toUpperCase() === 'ETH')
  const shorthandMatchAddress = useMemo(() => {
    const chain = supportedChainId(chainId)
    //TODO
    return chain && currencyId ? TOKEN_SHORTHANDS[currencyId.toUpperCase()]?.[chain] : undefined
  }, [chainId, currencyId])

  const token = useTokenFromMapOrNetwork(tokens, isNative ? undefined : shorthandMatchAddress ?? currencyId)

  if (currencyId === null || currencyId === undefined || !isSupportedChain(chainId)) return null

  // this case so we use our builtin wrapped token instead of wrapped tokens on token lists
  const wrappedNative = nativeCurrency?.wrapped
  if (wrappedNative?.address?.toUpperCase() === currencyId?.toUpperCase()) return wrappedNative

  return isNative ? nativeCurrency : token
}