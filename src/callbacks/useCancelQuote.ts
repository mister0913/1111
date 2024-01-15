import { useCallback, useMemo } from 'react'

import { Quote } from 'types/quote'
import { CloseQuote } from 'types/trade'

import { useExpertMode } from 'state/user/hooks'
import { useTransactionAdder } from 'state/transactions/hooks'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'
import { CancelQuoteTransactionInfo, TransactionType } from 'state/transactions/types'
import { createTransactionCallback, TransactionCallbackState } from 'utils/web3'

import { useMarket } from 'hooks/useMarkets'
import { useDiamondContract } from 'hooks/useContract'
import { useMultiAccountable } from 'hooks/useMultiAccountable'

export function useCancelQuote(
  quote: Quote | null,
  closeQuote: CloseQuote | null
): {
  state: TransactionCallbackState
  callback: null | (() => Promise<string>)
  error: string | null
} {
  const { account, chainId, provider } = useActiveWeb3React()
  const isSupportedChainId = useSupportedChainId()
  const addTransaction = useTransactionAdder()
  const userExpertMode = useExpertMode()
  const Contract = useDiamondContract()
  const methodName = useMemo(() => {
    return closeQuote === CloseQuote.CANCEL_CLOSE_REQUEST
      ? 'requestToCancelCloseRequest'
      : closeQuote === CloseQuote.CANCEL_QUOTE
      ? 'requestToCancelQuote'
      : closeQuote === CloseQuote.FORCE_CLOSE
      ? 'forceCancelQuote'
      : null
  }, [closeQuote])

  const market = useMarket(quote?.marketId)

  const preConstructCall = useCallback(() => {
    try {
      if (!account || !Contract || !quote || !methodName || !isSupportedChainId) {
        throw new Error('Missing dependencies.')
      }

      const args = [quote.id]
      return {
        address: Contract.address,
        calldata: Contract.interface.encodeFunctionData(methodName, args) ?? '',
        value: 0,
      }

      // const calldata = Contract.interface.encodeFunctionData(methodName, args)
      // return {
      //   address: MultiAccountContract.address,
      //   calldata: MultiAccountContract.interface.encodeFunctionData('_call', [activeAccountAddress, [calldata]]) ?? '',
      //   value: 0,
      // }
    } catch (error) {
      return {
        error,
      }
    }
  }, [account, Contract, quote, methodName, isSupportedChainId])

  const constructCall = useMultiAccountable(preConstructCall)

  return useMemo(() => {
    if (!account || !chainId || !provider || !Contract || !market || !methodName || !quote) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: 'Missing dependencies',
      }
    }

    const txInfo = {
      type: TransactionType.CANCEL,
      name: market.name,
      id: quote.id.toString(),
      positionType: quote.positionType,
      closeQuote,
      hedger: '',
    } as CancelQuoteTransactionInfo

    return {
      state: TransactionCallbackState.VALID,
      error: null,
      callback: () =>
        createTransactionCallback(
          methodName,
          constructCall,
          addTransaction,
          txInfo,
          account,
          provider,
          undefined,
          userExpertMode
        ),
    }
  }, [
    quote,
    closeQuote,
    market,
    methodName,
    Contract,
    constructCall,
    addTransaction,
    account,
    chainId,
    provider,
    userExpertMode,
  ])
}
