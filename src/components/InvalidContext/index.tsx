import { useMemo } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import { FALLBACK_CHAIN_ID } from 'constants/chains'
import { ChainInfo } from 'constants/chainInfo'

import { useToggleWalletModal } from 'state/application/hooks'
import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'
import useRpcChangerCallback from 'lib/hooks/useRpcChangerCallback'

import MainButton from 'components/Button/MainButton'
import { SwitchWallet } from 'components/Icons'
import GradientButton from 'components/Button/GradientButton'

const IconWrap = styled.div`
  position: absolute;
  right: 10px;
  top: 6px;
`
const ConnectWrap = styled.div`
  position: absolute;
  right: 10px;
`

export enum ContextError {
  ACCOUNT,
  CHAIN_ID,
  VALID,
}

export function useInvalidContext() {
  const { chainId, account } = useActiveWeb3React()
  const isSupportedChainId = useSupportedChainId()
  return useMemo(
    () =>
      !account || !chainId ? ContextError.ACCOUNT : !isSupportedChainId ? ContextError.CHAIN_ID : ContextError.VALID,
    [account, chainId, isSupportedChainId]
  )
}

export function InvalidContext() {
  const invalidContext = useInvalidContext()
  const toggleWalletModal = useToggleWalletModal()
  const rpcChangerCallback = useRpcChangerCallback()
  const fallbackChainInfo = ChainInfo[FALLBACK_CHAIN_ID]

  return useMemo(() => {
    if (invalidContext === ContextError.ACCOUNT) {
      return (
        <>
          <MainButton onClick={toggleWalletModal}>
            Connect Wallet
            <ConnectWrap>
              <SwitchWallet />
            </ConnectWrap>
          </MainButton>
        </>
      )
    }
    if (invalidContext === ContextError.CHAIN_ID) {
      return (
        <>
          <GradientButton
            label={`Switch Network to ${fallbackChainInfo.chainName}`}
            onClick={() => rpcChangerCallback(FALLBACK_CHAIN_ID)}
          >
            <IconWrap>
              <Image src={fallbackChainInfo.logoUrl} alt={fallbackChainInfo.label} width={24} height={24} />
            </IconWrap>
          </GradientButton>
        </>
      )
    }
    return null
  }, [fallbackChainInfo, invalidContext, rpcChangerCallback, toggleWalletModal])
}
