import { useSingleContractMultipleMethods } from 'lib/hooks/multicall'

import { useSupportedChainId } from 'lib/hooks/useSupportedChainId'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import useDebounce from 'lib/hooks/useDebounce'

import { fromWei } from 'utils/numbers'
import { getSingleBN } from 'utils/multicall'

import { useQuoterV2, useStakingContract } from 'hooks/useContract'

export function useStakingData(): { stakedAmount: string; reward: string } {
  const { account } = useActiveWeb3React()
  const isSupportedChainId = useSupportedChainId()
  const StakingContract = useStakingContract()

  const stakingDataCall = isSupportedChainId
    ? !account
      ? []
      : [
          {
            methodName: 'balanceOf',
            callInputs: [account],
          },

          {
            methodName: 'earned',
            callInputs: [account, '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA'],
          },
        ]
    : []

  const estimateGasRequirement = { gasRequired: 1000_000 }
  const [balance, earned] = useSingleContractMultipleMethods(StakingContract, stakingDataCall, estimateGasRequirement)

  return {
    stakedAmount: fromWei(getSingleBN(balance)),
    reward: fromWei(getSingleBN(earned), 6),
  }
}

export function useStakingValue(): { totalSupply: string; rewardRate: string } {
  const StakingContract = useStakingContract()

  const contractDataCall = [
    {
      methodName: 'totalSupply',
      callInputs: [],
    },
    {
      methodName: 'rewardData',
      callInputs: ['0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA'],
    },
  ]

  const estimateGasRequirement = { gasRequired: 100_000 }
  const [totalSupply, rewardData] = useSingleContractMultipleMethods(
    StakingContract,
    contractDataCall,
    estimateGasRequirement
  )

  return { totalSupply: fromWei(getSingleBN(totalSupply)), rewardRate: fromWei(getSingleBN(rewardData, 2), 6) }
}

export function useBasedPrice() {
  const QuoterContract = useQuoterV2()

  const contractDataCall = [
    {
      methodName: 'quoteExactInput',
      callInputs: [
        '0xba5e6fa2f33f3955f0cef50c63dcc84861eab663000bb842000000000000000000000000000000000000060001f4d9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca',
        '1000000000000000000',
      ],
    },
  ]

  const [basedPrice] = useSingleContractMultipleMethods(QuoterContract, contractDataCall)
  const loading = useDebounce(basedPrice ? basedPrice.loading : true, 1000)

  return { basedPrice: fromWei(getSingleBN(basedPrice), 6), loading }
}
