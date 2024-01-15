import { Contract } from '@ethersproject/contracts'

import { useContract } from 'lib/hooks/contract'
import {
  ERC20_BYTES32_ABI,
  ERC20_ABI,
  DIAMOND_ABI,
  MULTICALL3_ABI,
  ERC721_ABI,
  MULTI_ACCOUNT_ABI,
  COLLATERAL_ABI,
  DIBS_ABI,
  STAKING_ABI,
  BASED_ABI,
  SIGNATURE_STORE_ABI,
  QUOTER_V2_ABI,
} from 'constants/abi'
import {
  COLLATERAL_ADDRESS,
  DIAMOND_ADDRESS,
  MULTI_ACCOUNT_ADDRESS,
  MULTICALL3_ADDRESS,
  DIBS_REWARDER_ADDRESS,
  BASED_ADDRESS,
  STAKING_ADDRESS,
  SIGNATURE_STORE_ADDRESS,
  QUOTER_V2,
} from 'constants/addresses'

/* ###################################
                        Based
################################### */

export function useCollateralContract(withSignerIfPossible?: boolean) {
  return useContract(COLLATERAL_ADDRESS, COLLATERAL_ABI, withSignerIfPossible)
}

export function useDiamondContract(withSignerIfPossible?: boolean) {
  return useContract(DIAMOND_ADDRESS, DIAMOND_ABI, withSignerIfPossible)
}

export function useMultiAccountContract(withSignerIfPossible?: boolean) {
  return useContract(MULTI_ACCOUNT_ADDRESS, MULTI_ACCOUNT_ABI, withSignerIfPossible)
}

export function useDibsContract(withSignerIfPossible?: boolean) {
  return useContract(DIBS_REWARDER_ADDRESS, DIBS_ABI, withSignerIfPossible)
}

export function useBasedContract(withSignerIfPossible?: boolean) {
  return useContract(BASED_ADDRESS, BASED_ABI, withSignerIfPossible)
}

export function useStakingContract(withSignerIfPossible?: boolean) {
  return useContract(STAKING_ADDRESS, STAKING_ABI, withSignerIfPossible)
}

export function useSignatureStoreContract(withSignerIfPossible?: boolean) {
  return useContract(SIGNATURE_STORE_ADDRESS, SIGNATURE_STORE_ABI, withSignerIfPossible)
}

export function useQuoterV2(withSignerIfPossible?: boolean) {
  return useContract(QUOTER_V2, QUOTER_V2_ABI, withSignerIfPossible)
}

/* ###################################
                      THIRD PARTY
################################### */

export function useERC20Contract(tokenAddress: string | null | undefined, withSignerIfPossible?: boolean) {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible)
}
export function useERC721Contract(tokenAddress: string | null | undefined, ABI?: any, withSignerIfPossible?: boolean) {
  return useContract(tokenAddress, ABI ?? ERC721_ABI, withSignerIfPossible)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function useMultiCall3Contract() {
  return useContract(MULTICALL3_ADDRESS, MULTICALL3_ABI, false)
}
