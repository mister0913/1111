import gql from 'graphql-tag'

export const ORDER_HISTORY_DATA = gql`
  query OrderHistory($address: String!, $first: Int!, $skip: Int!) {
    resultEntities(
      first: $first
      skip: $skip
      orderBy: timeStamp
      orderDirection: desc
      where: { partyA: $address, quoteStatus_in: [3, 7, 8, 9] }
    ) {
      orderTypeOpen
      partyAmm
      partyBmm
      lf
      cva
      partyA
      partyB
      quoteId
      quoteStatus
      symbol
      positionType
      quantity
      orderTypeClose
      openedPrice
      requestedOpenPrice
      closedPrice
      quantityToClose
      timeStamp
      closePrice
      deadline
      partyBsWhiteList
      symbolId
      fillAmount
      marketPrice
      averageClosedPrice
      liquidateAmount
      liquidatePrice
      closedAmount
      initialData {
        cva
        lf
        partyAmm
        partyBmm
        timeStamp
      }
    }
  }
`

export const GET_PAID_AMOUNT = gql`
  query GetPaidAmount($id: String!) {
    resultEntities(where: { quoteId: $id }) {
      fee
    }
  }
`

export const BALANCE_CHANGES_DATA = gql`
  query BalanceChanges($account: String!, $first: Int!, $skip: Int!) {
    balanceChanges(
      where: { account: $account, type_not: "ALLOCATE_PARTY_A" }
      first: $first
      skip: $skip
      orderBy: timestamp
      orderDirection: desc
    ) {
      amount
      timestamp
      transaction
      account
      type
    }
  }
`

export const TOTAL_DEPOSITS_AND_WITHDRAWALS = gql`
  query TotalDepositsAndWithdrawals($id: String!) {
    accounts(where: { id: $id }) {
      id
      timestamp
      withdraw
      deposit
      updateTimestamp
    }
  }
`

/*
{
  dailyGeneratedVolumes(first: 5, where: {day: 4, amountAsUser_gt: 0, pair: "0x0000000000000000000000000000000000000000"} orderBy: amountAsUser orderDirection: desc) {
    id
    day
    user
    amountAsUser
  }
}
 */
export const DailyData = gql`
  query DailyDataForPairQuery($skip: Int!, $day: BigInt!) {
    dailyGeneratedVolumes(
      first: 100
      skip: $skip
      where: { day: $day, amountAsUser_gt: 0, pair: "0x0000000000000000000000000000000000000000" }
      orderBy: amountAsUser
      orderDirection: desc
    ) {
      user
      amountAsUser
    }
  }
`

/*
{
dailyGeneratedVolumes(first: 100, where: {user: "0x0000000000000000000000000000000000000000", amountAsUser_gt: 0, pair: "0x0000000000000000000000000000000000000000"} orderBy: day orderDirection: desc) {
  id
  day
  user
  amountAsUser
}
}
*/

export const TotalVolumeForDaysData = gql`
  query DailyDataForPairQuery($days: [BigInt!]) {
    dailyGeneratedVolumes(
      where: {
        user: "0x0000000000000000000000000000000000000000"
        pair: "0x0000000000000000000000000000000000000000"
        day_in: $days
      }
      orderBy: day
      orderDirection: desc
    ) {
      user
      day
      amountAsUser
    }
  }
`

export const UserRewardData = gql`
  query DailyDataForPairQuery($skip: Int!, $user: Bytes!) {
    dailyGeneratedVolumes(
      first: 100
      skip: $skip
      where: { user: $user, day_gte: 0, amountAsUser_gt: 0, pair: "0x0000000000000000000000000000000000000000" }
      orderBy: day
      orderDirection: desc
    ) {
      user
      day
      amountAsUser
    }
  }
`

export const UserRewardDataCustomDay = gql`
  query DailyDataForPairQuery($user: Bytes!, $skip: Int!, $day: BigInt!) {
    dailyGeneratedVolumes(
      first: 100
      skip: $skip
      where: { user: $user, day: $day, amountAsUser_gt: 0, pair: "0x0000000000000000000000000000000000000000" }
      orderBy: day
      orderDirection: desc
    ) {
      user
      day
      amountAsUser
    }
  }
`

export const AccountsNameData = gql`
  query AccountsNameData($first: Int!, $ids: [ID!]!) {
    accounts(first: $first, where: { id_in: $ids }) {
      id
      user
      name
    }
  }
`

export const TotalTradingFee = gql`
  query TotalTradingFee {
    totalHistories(where: { accountSource: "0x5de6949717f3aa8e0fbed5ce8b611ebcf1e44ae9" }) {
      platformFee
    }
  }
`
