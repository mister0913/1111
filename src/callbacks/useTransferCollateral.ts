import { useCallback, useMemo } from 'react'
import BigNumber from 'bignumber.js'
import toast from 'react-hot-toast'

import { createTransactionCallback, TransactionCallbackState } from 'utils/web3'
import { formatPrice } from 'utils/numbers'
import { COLLATERAL_TOKEN } from 'constants/tokens'
import { getTokenWithFallbackChainId } from 'utils/token'
import { TransferTab } from 'types/transfer'

import { useExpertMode, useActiveAccount } from 'state/user/hooks'
import { useTransactionAdder } from 'state/transactions/hooks'
import { TransactionType, TransferCollateralTransactionInfo } from 'state/transactions/types'

import { DeallocateCollateralClient } from 'lib/muon'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'
import { useDiamondContract, useMultiAccountContract } from 'hooks/useContract'

export function useTransferCollateral(
  typedAmount: string,
  activeTab: TransferTab
): {
  state: TransactionCallbackState
  callback: null | (() => Promise<string>)
  error: string | null
} {
  const { account, chainId, provider } = useActiveWeb3React()
  const DiamondContract = useDiamondContract()
  const MultiAccountContract = useMultiAccountContract()
  const activeAccount = useActiveAccount()
  const isSupportedChainId = useSupportedChainId()
  const collateralCurrency = getTokenWithFallbackChainId(COLLATERAL_TOKEN, chainId)

  const addTransaction = useTransactionAdder()
  const userExpertMode = useExpertMode()

  const getSignature = useCallback(async () => {
    if (!DeallocateCollateralClient) {
      throw new Error('Missing Muon Client ')
    }
    if (!chainId || !DiamondContract || !activeAccount) {
      throw new Error('Missing muon params')
    }

    const result = await DeallocateCollateralClient.getMuonSig(
      activeAccount.accountAddress,
      chainId,
      DiamondContract?.address
    )
    const { success, signature, error } = result
    if (success === false || !signature) {
      throw new Error(`Unable to fetch Muon signature: ${error}`)
    }
    return { signature }
  }, [DiamondContract, activeAccount, chainId])

  const methodName = useMemo(() => {
    return activeTab === TransferTab.DEPOSIT
      ? 'depositAndAllocateForAccount'
      : activeTab === TransferTab.DEALLOCATE
      ? 'deallocate'
      : activeTab === TransferTab.WITHDRAW
      ? 'withdrawFromAccount'
      : activeTab === TransferTab.ALLOCATE
      ? 'allocate'
      : ''
  }, [activeTab])

  const constructCall = useCallback(async () => {
    try {
      if (
        !account ||
        !activeAccount ||
        !DiamondContract ||
        !MultiAccountContract ||
        !collateralCurrency ||
        !typedAmount ||
        !isSupportedChainId
      ) {
        throw new Error('Missing dependencies.')
      }
      const amount = new BigNumber(typedAmount).shiftedBy(collateralCurrency.decimals).toFixed()
      const collateralShiftAmount = `1e${collateralCurrency.decimals}`

      if (activeTab === TransferTab.DEPOSIT) {
        return {
          address: MultiAccountContract.address,
          calldata:
            MultiAccountContract.interface.encodeFunctionData('depositAndAllocateForAccount', [
              activeAccount.accountAddress,
              amount,
            ]) ?? '',
          value: 0,
        }
      } else if (activeTab === TransferTab.DEALLOCATE) {
        const fixedAmount = formatPrice(typedAmount, collateralCurrency.decimals)
        const amount = new BigNumber(fixedAmount).times(1e18).toFixed()

        const { signature } = await getSignature()
        const calldata = DiamondContract.interface.encodeFunctionData('deallocate', [amount, signature])
        return {
          address: MultiAccountContract.address,
          calldata:
            MultiAccountContract.interface.encodeFunctionData('_call', [activeAccount.accountAddress, [calldata]]) ??
            '',
          value: 0,
        }
      } else if (activeTab === TransferTab.WITHDRAW) {
        const fixedAmount = formatPrice(typedAmount, collateralCurrency.decimals)
        const amount = new BigNumber(fixedAmount).times(collateralShiftAmount).toFixed()

        return {
          address: MultiAccountContract.address,
          calldata:
            MultiAccountContract.interface.encodeFunctionData('withdrawFromAccount', [
              activeAccount.accountAddress,
              amount,
            ]) ?? '',
          value: 0,
        }
      } else if (activeTab === TransferTab.ALLOCATE) {
        const fixedAmount = formatPrice(typedAmount, collateralCurrency.decimals)
        const amount = new BigNumber(fixedAmount).times(1e18).toFixed()

        const calldata = DiamondContract.interface.encodeFunctionData('allocate', [amount])
        return {
          address: MultiAccountContract.address,
          calldata:
            MultiAccountContract.interface.encodeFunctionData('_call', [activeAccount.accountAddress, [calldata]]) ??
            '',
          value: 0,
        }
      }

      return {
        address: MultiAccountContract.address,
        calldata: '',
        value: 0,
      }
    } catch (error: any) {
      toast.error(error.message)

      return {
        error,
      }
    }
  }, [
    account,
    activeAccount,
    DiamondContract,
    MultiAccountContract,
    collateralCurrency,
    typedAmount,
    isSupportedChainId,
    activeTab,
    getSignature,
  ])

  return useMemo(() => {
    if (
      !account ||
      !activeAccount ||
      !chainId ||
      !provider ||
      !DiamondContract ||
      !MultiAccountContract ||
      !collateralCurrency
    ) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: 'Missing dependencies',
      }
    }

    const txInfo = {
      type: TransactionType.TRANSFER_COLLATERAL,
      transferType: activeTab,
      accountName: activeAccount.name,
      amount: typedAmount,
      accountAddress: activeAccount.accountAddress,
    } as TransferCollateralTransactionInfo

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
    account,
    activeAccount,
    activeTab,
    chainId,
    provider,
    DiamondContract,
    MultiAccountContract,
    collateralCurrency,
    typedAmount,
    methodName,
    constructCall,
    addTransaction,
    userExpertMode,
  ])
}

// function useSig() {
//   const { upnl } = useAccountUpnl() || {}
//   const timestamp = Math.floor(Date.now() / 1000)

//   return useMemo(
//     () => [
//       '0x0000000000000000000000000000000000000000000000000000000000000000',
//       timestamp,
//       toWei(upnl),
//       '0x0000000000000000000000000000000000000000000000000000000000000000',
//       [0, '0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000'],
//     ],
//     [timestamp, upnl]
//   )
// }
