import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useAccountPartyAStat, useActiveAccountAddress, useIsTermsAccepted } from './hooks'
import { usePartyAStats } from 'hooks/usePartyAStats'
import { useEffect } from 'react'
import { updateAcceptTerms, updateAccountPartyAStat } from './actions'
import { useAppDispatch } from 'state'
import { useCheckSignedMessage } from 'hooks/useCheckSign'

export function UpdaterUserContract() {
  const dispatch = useAppDispatch()
  // const [time, setTime] = useState(0)
  const { account } = useActiveWeb3React()
  const previousAcountPartyAStat = useAccountPartyAStat(account)
  const activeAccountAddress = useActiveAccountAddress()
  const previousActiveAcountPartyAStat = useAccountPartyAStat(activeAccountAddress)
  const accountPartyAStat = usePartyAStats(account)
  const activePartyAStat = usePartyAStats(activeAccountAddress)
  const previousAcceptTerms = useIsTermsAccepted()
  const { isTermsAccepted } = useCheckSignedMessage(account)

  useEffect(() => {
    if (account !== undefined && JSON.stringify(previousAcountPartyAStat) !== JSON.stringify(accountPartyAStat)) {
      dispatch(updateAccountPartyAStat({ address: account, value: accountPartyAStat }))
    }
  }, [accountPartyAStat, account])

  useEffect(() => {
    if (
      activeAccountAddress !== null &&
      JSON.stringify(previousActiveAcountPartyAStat) !== JSON.stringify(activePartyAStat)
    ) {
      dispatch(updateAccountPartyAStat({ address: activeAccountAddress, value: activePartyAStat }))
    }
  }, [activePartyAStat, activeAccountAddress])

  useEffect(() => {
    if (account !== undefined && previousAcceptTerms !== isTermsAccepted) {
      dispatch(updateAcceptTerms(isTermsAccepted))
    }
  }, [account, isTermsAccepted])

  return null
}
