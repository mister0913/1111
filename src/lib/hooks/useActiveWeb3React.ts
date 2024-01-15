import { Web3ContextType, useWeb3React } from '@web3-react/core'
import { useInjectedAddress } from 'lib/hooks/useInjectedAddress'
import { Web3Provider } from '@ethersproject/providers'

export default function useActiveWeb3React(): Web3ContextType<Web3Provider> {
  const context = useWeb3React()
  const { account } = context
  const injectedAddress = useInjectedAddress()
  const injectedContext =
    injectedAddress && account ? { ...context, account: injectedAddress, accounts: [injectedAddress] } : context

  return injectedContext
}
