import React from 'react'
import { useIsTermsAccepted } from 'state/user/hooks'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import TermsModal from 'components/ReviewModal/TermsModal'

export default function TermsAndServices({ onDismiss }: { onDismiss: () => void }) {
  const { account } = useActiveWeb3React()
  const isTermsAccepted = useIsTermsAccepted()

  if (account && !isTermsAccepted) {
    return <TermsModal onDismiss={onDismiss} />
  }
  return null
}
