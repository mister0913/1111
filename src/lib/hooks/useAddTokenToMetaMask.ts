import { useCallback, useState } from 'react'
import { Currency, Token } from '@sushiswap/core-sdk'

import useCurrencyLogo from './useCurrencyLogo'
import useActiveWeb3React from './useActiveWeb3React'

export default function useAddTokenToMetaMask(currencyToAdd: Currency | undefined): {
  addToken: () => void
  success: boolean | undefined
} {
  const { connector } = useActiveWeb3React()
  const token: Token | undefined = currencyToAdd?.wrapped
  const logoURL = useCurrencyLogo(token?.address)

  const [success, setSuccess] = useState<boolean | undefined>()

  const addToken = useCallback(() => {
    if (!token?.symbol || !connector.watchAsset) return
    connector
      .watchAsset({
        address: token.address,
        symbol: token.symbol,
        decimals: token.decimals,
        image: logoURL,
      })
      .then(() => setSuccess(true))
      .catch(() => setSuccess(false))
  }, [connector, logoURL, token])

  return { addToken, success }
}
