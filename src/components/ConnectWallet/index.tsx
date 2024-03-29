import { useToggleWalletModal } from 'state/application/hooks'
import { PrimaryButton } from 'components/Button'

export default function ConnectWallet(): JSX.Element | null {
  const toggleWalletModal = useToggleWalletModal()
  return (
    <PrimaryButton height={'48px'} onClick={toggleWalletModal}>
      Connect Wallet
    </PrimaryButton>
  )
}
