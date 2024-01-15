import { COLLATERAL_ADDRESS } from 'constants/addresses'
import { useToken } from 'lib/hooks/useTokens'
import { useSingleContractMultipleMethods } from 'lib/hooks/multicall'

import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'
import { useTokenBalance } from 'state/wallet/hooks'

import { fromWei } from 'utils/numbers'
import { getMultipleBN, getSingleBN, getSingleBoolean } from 'utils/multicall'

import { useDiamondContract } from 'hooks/useContract'
import { UserPartyAStatDetail } from 'types/user'

//we converted all BigNumbers to string to avoid spurious rerenders
export function usePartyAStats(account: string | null | undefined): UserPartyAStatDetail {
  const isSupportedChainId = useSupportedChainId()
  const DiamondContract = useDiamondContract()
  const cToken = useToken(COLLATERAL_ADDRESS)

  const partyAStatsCallsFirstCall = isSupportedChainId
    ? !account
      ? []
      : [
          {
            methodName: 'balanceOf',
            callInputs: [account],
          },
          {
            methodName: 'partyAStats',
            callInputs: [account],
          },
        ]
    : []

  const partyAStatsCallsSecondCall = isSupportedChainId
    ? !account
      ? []
      : [
          {
            methodName: 'getBalanceLimitPerUser',
            callInputs: [],
          },
          {
            methodName: 'withdrawCooldownOf',
            callInputs: [account],
          },
          {
            methodName: 'coolDownsOfMA',
            callInputs: [],
          },
        ]
    : []

  const estimateGasRequirement = { gasRequired: 100_000 }
  const cBalance = useTokenBalance(account ?? undefined, cToken ?? undefined)?.toExact() || '0'
  const [accountBalanceResult, partyAStatsResult] = useSingleContractMultipleMethods(
    DiamondContract,
    partyAStatsCallsFirstCall,
    estimateGasRequirement
  )

  const [accountBalanceLimitResult, withdrawCooldownResult, cooldownOfMARes] = useSingleContractMultipleMethods(
    DiamondContract,
    partyAStatsCallsSecondCall,
    estimateGasRequirement
  )
  const loading =
    accountBalanceResult && partyAStatsResult && accountBalanceLimitResult && withdrawCooldownResult && cooldownOfMARes
      ? accountBalanceResult.loading &&
        partyAStatsResult.loading &&
        accountBalanceLimitResult.loading &&
        withdrawCooldownResult.loading &&
        cooldownOfMARes.loading
      : false

  const multipleBNResult = getMultipleBN(partyAStatsResult)
  // const cooldownBNResult = getMultipleBN(cooldownOfMARes)

  return {
    collateralBalance: cBalance,
    accountBalance: fromWei(getSingleBN(accountBalanceResult)),
    liquidationStatus: getSingleBoolean(partyAStatsResult, 0) ?? false,
    accountBalanceLimit: fromWei(getSingleBN(accountBalanceLimitResult)),
    withdrawCooldown: getSingleBN(withdrawCooldownResult)?.toString() ?? '0',
    cooldownMA: getSingleBN(cooldownOfMARes)?.toString() ?? '0',

    allocatedBalance: fromWei(multipleBNResult[1]),
    lockedCVA: fromWei(multipleBNResult[2]),
    lockedLF: fromWei(multipleBNResult[3]),
    lockedPartyAMM: fromWei(multipleBNResult[4]),
    lockedPartyBMM: fromWei(multipleBNResult[5]),

    pendingLockedCVA: fromWei(multipleBNResult[6]),
    pendingLockedLF: fromWei(multipleBNResult[7]),
    pendingLockedPartyAMM: fromWei(multipleBNResult[8]),
    pendingLockedPartyBMM: fromWei(multipleBNResult[9]),

    positionsCount: multipleBNResult[10]?.toNumber() ?? 0,
    pendingCount: multipleBNResult[11]?.toNumber() ?? 0,
    nonces: multipleBNResult[12]?.toNumber() ?? 0,
    quotesCount: (multipleBNResult[13]?.toNumber() ?? 75) + 5,
    loading,
  }
}
