import { useCallback } from 'react'
import { BigNumber as BN } from 'bignumber.js'
import { useActiveAccountAddress } from 'state/user/hooks'
import { useMultiAccountContract } from './useContract'
import { GLOBAL_MULTI_ACCOUNTABLE_PAUSED } from 'constants/misc'

export function useMultiAccountable(
  constructCall: () =>
    | { address: string; calldata: string; value: BN.Value; error?: undefined }
    | { address?: undefined; calldata?: undefined; value?: undefined; error: any }
    | Promise<any>,
  disable?: boolean
) {
  const activeAccountAddress = useActiveAccountAddress()
  const MultiAccountContract = useMultiAccountContract()

  return useCallback(async () => {
    if (disable || GLOBAL_MULTI_ACCOUNTABLE_PAUSED) return constructCall

    try {
      if (!constructCall || !activeAccountAddress || !MultiAccountContract) {
        throw new Error('Missing in generating constructCall.')
      }

      const call = await constructCall()
      const { calldata, value } = call

      return {
        address: MultiAccountContract.address,
        calldata: MultiAccountContract.interface.encodeFunctionData('_call', [activeAccountAddress, [calldata]]) ?? '',
        value: value || 0,
      }
    } catch (error) {
      // console.error(error?.message)
      // DefaultHandlerError(error)
      return {
        error,
      }
    }
  }, [MultiAccountContract, activeAccountAddress, constructCall, disable])
}
