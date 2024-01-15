import { useCallback, useMemo } from 'react'

import { useExpertMode } from 'state/user/hooks'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useTransactionAdder } from 'state/transactions/hooks'
import { ClaimTransactionInfo, TransactionType } from 'state/transactions/types'
import { createTransactionCallback, TransactionCallbackState } from 'utils/web3'

import { MuonVerificationData } from 'types/dibs'
import { SupportedChainId } from 'constants/chains'
import { useDibsContract } from 'hooks/useContract'

export default function useDibsClaim(): {
  state: TransactionCallbackState
  callback: null | ((verfication: MuonVerificationData) => Promise<string>)
  error: string | null
} {
  const { account, provider, chainId } = useActiveWeb3React()
  const DibsContract = useDibsContract()

  const isSupportedChainId = useMemo(() => chainId === SupportedChainId.BASE, [chainId])

  const addTransaction = useTransactionAdder()
  const userExpertMode = useExpertMode()

  const methodName = 'claim'

  const constructCall = useCallback(
    (muonVerificationData: MuonVerificationData) => {
      try {
        console.log('muonVerificationData2', muonVerificationData)
        if (!DibsContract || !isSupportedChainId || !muonVerificationData) {
          throw new Error('Missing dependencies.')
        }
        return {
          address: DibsContract.address,
          calldata:
            DibsContract.interface.encodeFunctionData(methodName, [
              muonVerificationData.result.data.result.day,
              muonVerificationData.result.data.result.userVolume,
              muonVerificationData.result.data.result.totalVolume,
              muonVerificationData.result.data.timestamp,
              muonVerificationData.result.reqId,
              {
                signature: muonVerificationData.result.signatures[0].signature,
                owner: muonVerificationData.result.signatures[0].owner,
                nonce: muonVerificationData.result.data.init.nonceAddress,
              },
              muonVerificationData.result.shieldSignature,
            ]) ?? '',
          value: 0,
        }
      } catch (error) {
        return {
          error,
        }
      }
    },
    [DibsContract, isSupportedChainId]
  )

  return useMemo(() => {
    if (!account || !DibsContract) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: 'Missing dependencies',
      }
    }

    //TODO: use correct summary for each request type
    // const summary = `${activeTab}: ${typedAmount}`
    const txInfo = {
      //TODO: add proper transaction type
      type: TransactionType.CLAIM,
      amount: 'dibs claim',
    } as ClaimTransactionInfo

    return {
      state: TransactionCallbackState.VALID,
      error: null,
      callback: (verfication: MuonVerificationData) =>
        createTransactionCallback(
          methodName,
          () => constructCall(verfication),
          addTransaction,
          txInfo,
          account,
          provider,
          undefined,
          userExpertMode
        ),
    }
  }, [account, provider, DibsContract, methodName, constructCall, addTransaction, userExpertMode])
}
