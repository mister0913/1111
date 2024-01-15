import { useCallback, useEffect, useState } from 'react'
import { FetchPolicy, DocumentNode } from '@apollo/client'
import { BigNumber } from '@ethersproject/bignumber'

import { getSingleBoolean } from 'utils/multicall'

import { dibsClient } from 'apollo/client/balanceHistory'
import { TotalVolumeForDaysData, UserRewardData, UserRewardDataCustomDay } from 'apollo/queries'

import { useBasedContract, useDibsContract } from 'hooks/useContract'
import { useUserRewardData } from './useUserRewardData'
import { RewardGetData, UserDailyGeneratedVolumesRecord } from 'types/dibs'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { useSingleContractMultipleMethods } from 'lib/hooks/multicall'

const useDibsRewards = (selectedDay: number, customDayActive: boolean) => {
  const DibsContract = useDibsContract()
  const { account } = useActiveWeb3React()
  const [getData, setGetData] = useState<RewardGetData>({ days: [], totalVolumesBN: [], result: [], user: '' })
  const [getDataLoading, setGetDataLoading] = useState(false)
  const getDailyLeaderboardData = useCallback(
    async (user: string) => {
      if (!DibsContract) return []

      let offset = 0
      const result: UserDailyGeneratedVolumesRecord[] = []
      let chunkResult: UserDailyGeneratedVolumesRecord[] = []
      setGetDataLoading(true)
      do {
        const queryParam: {
          query: DocumentNode
          variables: { user: string; skip: number; day?: number }
          fetchPolicy: FetchPolicy
        } = customDayActive
          ? {
              query: UserRewardDataCustomDay,
              variables: { user, skip: offset, day: selectedDay },
              fetchPolicy: 'cache-first',
            }
          : {
              query: UserRewardData,
              variables: { user, skip: offset },
              fetchPolicy: 'cache-first',
            }
        chunkResult = (await dibsClient.query(queryParam)).data.dailyGeneratedVolumes
        result.push(...chunkResult)
        offset += chunkResult.length
      } while (chunkResult.length)
      const days = result.map((res) => Number(res.day))

      const totalVolumesBN: BigNumber[] = (
        await dibsClient.query({
          query: TotalVolumeForDaysData,
          variables: { days },
          fetchPolicy: 'cache-first',
        })
      ).data.dailyGeneratedVolumes.map((ele: UserDailyGeneratedVolumesRecord) => BigNumber.from(ele.amountAsUser))
      setGetDataLoading(false)
      setGetData({ days, totalVolumesBN, result, user })
    },
    [DibsContract, customDayActive, selectedDay]
  )

  useEffect(() => {
    const fetchInfo = async () => {
      if (!account) return
      try {
        await getDailyLeaderboardData(account)
      } catch (error) {
        console.log('leaderboard get error :>> ', error)
      }
    }
    fetchInfo()
  }, [account, getDailyLeaderboardData, selectedDay])

  return useUserRewardData(getData, getDataLoading)
}

export function useIsRewardMinted(day: number | null) {
  const BasedContract = useBasedContract()
  const contractDataCall = day
    ? [
        {
          methodName: 'isRewardMinted',
          callInputs: [day],
        },
      ]
    : []

  const [isRewardMintedData] = useSingleContractMultipleMethods(BasedContract, contractDataCall)
  return getSingleBoolean(isRewardMintedData, 0)
}

export default useDibsRewards
