import { BigNumber } from '@ethersproject/bignumber'
import BigNumberJS from 'bignumber.js'

import { fromWeiBN } from 'utils/numbers'
import { RewardGetData } from 'types/dibs'

import { useSingleContractMultipleMethods } from 'lib/hooks/multicall'
import { useDibsContract } from 'hooks/useContract'

export const useUserRewardData = ({ days, totalVolumesBN, result, user }: RewardGetData, dataLoading: boolean) => {
  const DibsContract = useDibsContract()

  const totalRewardsCall = days.map((day) => ({
    methodName: 'totalReward',
    callInputs: [day.toString()],
  }))

  const claimsCall = days.map((day) => ({
    methodName: 'claimed',
    callInputs: [user, day.toString()],
  }))

  const allCalls = totalRewardsCall.concat(claimsCall)
  const estimateGasRequirement = { gasRequired: 100_000 }
  const multiCallResult = useSingleContractMultipleMethods(DibsContract, allCalls, estimateGasRequirement)

  const loadingFlag = multiCallResult.filter((semiData) => semiData.loading === true).length > 0
  if (loadingFlag || dataLoading) {
    return { loading: true, rewards: null }
  }
  const multiCallRefile = multiCallResult.map((semiData) =>
    semiData && semiData.result ? semiData.result[0] : new BigNumberJS(0)
  )
  const totalRewards: BigNumber[] = multiCallRefile.slice(0, totalRewardsCall.length)
  const claimed: BigNumber[] = multiCallRefile.slice(totalRewardsCall.length, allCalls.length)
  const rewards = result.map((ele, i) => {
    const rewardRaw = BigNumber.from(ele.amountAsUser).mul(totalRewards[i]).div(totalVolumesBN[i])
    return {
      ...ele,
      volume: fromWeiBN(ele.amountAsUser),
      rewardRaw,
      reward: fromWeiBN(rewardRaw.toString()),
      claimedReward: claimed[i],
      unclaimedReward: rewardRaw.sub(claimed[i]),
    }
  })
  return { loading: false, rewards }
}
