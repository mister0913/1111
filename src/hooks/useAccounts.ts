import { useMemo } from 'react'

import { Account } from 'types/user'

import { useMultiAccountContract } from './useContract'
import { useSingleContractMultipleMethods } from 'lib/hooks/multicall'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import useDebounce from 'lib/hooks/useDebounce'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'

export function useUserAccounts(): { accounts: Account[] } {
  const { account } = useActiveWeb3React()
  const MultiAccountContract = useMultiAccountContract()
  const isSupportedChainId = useSupportedChainId()
  const { accountLength } = useAccountsLength()

  const calls = useMemo(
    () =>
      isSupportedChainId
        ? !account || !accountLength
          ? []
          : [
              {
                methodName: 'getAccounts',
                callInputs: [account, 0, accountLength],
              },
            ]
        : [],
    [account, accountLength, isSupportedChainId]
  )
  const [accounts] = useSingleContractMultipleMethods(MultiAccountContract, calls)
  const parsed = useMemo(
    () => (!calls.length ? [] : !accounts.result ? [] : accounts.result[0]),
    [accounts, calls.length]
  )
  const accountsUnsorted: Account[] = useMemo(
    () =>
      parsed
        .filter((account: any) => account[0].toString() !== '0') //remove garbage outputs
        .map((account: any) => ({
          accountAddress: account[0].toString(),
          name: account[1],
        })),
    [parsed]
  )

  return useMemo(
    () => ({
      accounts: accountsUnsorted,
    }),
    [accountsUnsorted]
  )
}

export function useAccountsLength(): { accountLength: number; loading: boolean } {
  const { account } = useActiveWeb3React()
  const isSupportedChainId = useSupportedChainId()
  const MultiAccountContract = useMultiAccountContract()

  const calls = useMemo(
    () =>
      isSupportedChainId
        ? !account
          ? []
          : [
              {
                methodName: 'getAccountsLength',
                callInputs: [account],
              },
            ]
        : [],
    [account, isSupportedChainId]
  )
  const [accountLengthResult] = useSingleContractMultipleMethods(MultiAccountContract, calls)
  const loading = useDebounce(accountLengthResult ? accountLengthResult.loading : true, 1000)

  return useMemo(
    () => ({
      accountLength: accountLengthResult?.result ? accountLengthResult.result[0].toNumber() : 0,
      loading,
    }),
    [accountLengthResult, loading]
  )
}
