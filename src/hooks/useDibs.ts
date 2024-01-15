import { useEffect, useState } from 'react'
import { BigNumber } from '@ethersproject/bignumber'

import { useBasedContract, useDibsContract } from 'hooks/useContract'

export function useDibs() {
  const DibsContract = useDibsContract()
  const BasedContract = useBasedContract()

  const [startTimestamp, setStartTimestamp] = useState<number | null>(null)
  const [activeDay, setActiveDay] = useState<number>(0)
  const [projectId, setProjectId] = useState<string | null>(null)

  useEffect(() => {
    BasedContract?.startTimestamp().then((timestamp: BigNumber) => {
      const isTestValue = !timestamp || timestamp.isZero() || timestamp.eq(BigNumber.from(10).pow(17))
      setStartTimestamp(isTestValue ? 1697932800 : timestamp.toNumber())
    })
  }, [BasedContract])

  useEffect(() => {
    const today = new Date()
    const tmpActiveDay = startTimestamp ? Math.floor((today.getTime() / 1000 - startTimestamp) / 86400) : 0
    setActiveDay(tmpActiveDay)
  }, [startTimestamp])

  useEffect(() => {
    DibsContract?.PROJECT_ID().then((value: string) => {
      setProjectId(value)
    })
  }, [DibsContract])

  function setCustomActiveDay(inputActiveDay: Date) {
    const inputActiveDayTimestamp = inputActiveDay.getTime()
    const tmpActiveDay = startTimestamp ? Math.ceil((inputActiveDayTimestamp / 1000 - startTimestamp) / 86400) : 0
    setActiveDay(tmpActiveDay)
  }

  function getActiveDate() {
    return startTimestamp ? new Date((startTimestamp + activeDay * 86400) * 1000) : new Date()
  }

  function getCustomDate(customActiveDay: number): Date {
    return startTimestamp ? new Date((startTimestamp + customActiveDay * 86400) * 1000) : new Date()
  }
  return { startTimestamp, activeDay, projectId, setCustomActiveDay, getActiveDate, getCustomDate }
}
