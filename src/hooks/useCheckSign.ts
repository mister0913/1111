import { useMemo } from 'react'

import { WEB_SETTING } from 'config'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'
import { useSingleContractMultipleMethods } from 'lib/hooks/multicall'
import { TermsStatus } from 'state/user/types'

import { useSignatureStoreContract } from './useContract'

export function useCheckSignedMessage(account: string | undefined): {
  isTermsAccepted: TermsStatus
} {
  const isSupportedChainId = useSupportedChainId()
  const Contract = useSignatureStoreContract()

  const calls = useMemo(
    () =>
      isSupportedChainId && WEB_SETTING.showSignModal
        ? account
          ? [{ methodName: 'hasCurrentVersionSignature', callInputs: [account] }]
          : []
        : [],
    [isSupportedChainId, account]
  )

  const [signResult] = useSingleContractMultipleMethods(Contract, calls)
  const isTermsAccepted = useMemo(
    () =>
      signResult?.result
        ? signResult.result[0]
          ? TermsStatus.ACCEPTED
          : TermsStatus.NOT_ACCEPTED
        : TermsStatus.UNCLEAR,
    [signResult]
  )

  return useMemo(
    () => ({
      isTermsAccepted,
    }),
    [isTermsAccepted]
  )
}

export function useGetMessage() {
  const isSupportedChainId = useSupportedChainId()
  const Contract = useSignatureStoreContract()

  const calls = useMemo(
    () =>
      isSupportedChainId && WEB_SETTING.showSignModal
        ? [{ methodName: 'getCurrentVersionMessage', callInputs: [] }]
        : [],
    [isSupportedChainId]
  )

  const [messageResult] = useSingleContractMultipleMethods(Contract, calls)
  const message = useMemo(() => (messageResult?.result ? messageResult.result[0] : ''), [messageResult])

  return message
}
