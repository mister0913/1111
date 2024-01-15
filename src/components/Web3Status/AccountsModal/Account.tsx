import { useMemo } from 'react'
import styled, { useTheme } from 'styled-components'
import { Z_INDEX } from 'theme'

import { Account as AccountType, BalanceInfo } from 'types/user'
import { useCustomAccountUpnl } from 'state/user/hooks'
import { toBN, formatAmount } from 'utils/numbers'
import { ApiState } from 'types/api'

import { RowBetween, RowEnd, RowStart } from 'components/Row'
import { Loader } from 'components/Icons'

const AccountWrapper = styled.div<{ active?: boolean }>`
  position: relative;
  padding: 10px 12px;
  height: 82px;
  margin: 8px 0px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color4};
  border: 1px solid ${({ theme, active }) => (active ? theme.text : 'none')};
  z-index: ${Z_INDEX.tooltip};
`

const Row = styled(RowBetween)`
  flex-flow: row nowrap;
  margin-bottom: 8px;
  gap: 0.5rem;
`

const Label = styled(RowStart)`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
`

const Value = styled(RowEnd)`
  font-size: 12px;
  color: ${({ theme }) => theme.almostWhite};
`

const UpnlText = styled(RowEnd)`
  font-size: 10px;
  color: ${({ theme }) => theme.text3};
`

const UpnlValue = styled.div<{ color?: string }>`
  font-size: 12px;
  justify-self: end;
  margin-left: 4px;
  color: ${({ theme, color }) => color ?? theme.text1};
`
export default function Account({
  account,
  balanceInfo,
  balanceInfoStatus,
  active,
  onClick,
}: {
  account: AccountType
  balanceInfo: BalanceInfo
  balanceInfoStatus: ApiState
  active: boolean
  onClick: () => void
}): JSX.Element {
  const theme = useTheme()
  const customAccount = useCustomAccountUpnl(account.accountAddress)

  const [value, color] = useMemo(() => {
    const upnlBN = toBN(customAccount?.upnl || 0)
    if (upnlBN.isGreaterThan(0)) return [`+ $${formatAmount(upnlBN)}`, theme.green1]
    else if (upnlBN.isLessThan(0)) return [`- $${formatAmount(Math.abs(upnlBN.toNumber()))}`, theme.red1]
    return [`-`, theme.almostWhite]
  }, [customAccount?.upnl, theme])

  const { availableForOrder, lockedMargin } = useMemo(() => {
    if (!balanceInfo || balanceInfoStatus !== ApiState.OK)
      return { availableForOrder: undefined, lockedMargin: undefined }

    let availableForOrder = '0'
    const { allocatedBalance, totalLocked, totalPendingLocked, partyAMm, cva, lf, upnl } = balanceInfo
    const upnlBN = value ? toBN(value) : toBN(upnl)
    if (upnlBN.isGreaterThanOrEqualTo(0))
      availableForOrder = toBN(allocatedBalance).plus(upnlBN).minus(totalLocked).minus(totalPendingLocked).toString()
    else {
      const considering_mm = upnlBN.times(-1).minus(partyAMm).gt(0) ? upnlBN.times(-1) : partyAMm
      availableForOrder = toBN(allocatedBalance)
        .minus(cva)
        .minus(lf)
        .minus(totalPendingLocked)
        .minus(considering_mm)
        .toString()
    }

    return { availableForOrder, lockedMargin: partyAMm }
  }, [balanceInfo, balanceInfoStatus, value])

  return (
    <AccountWrapper active={active} onClick={onClick}>
      <Row>
        <Label style={{ color: theme.almostWhite }}>{account.name}</Label>

        <UpnlText>
          uPNL:
          <UpnlValue color={color}>{value}</UpnlValue>
        </UpnlText>
      </Row>
      <Row>
        <Label>Available for Orders:</Label>
        <Value>
          {balanceInfoStatus === ApiState.LOADING ? (
            <Loader size={'12px'} stroke={theme.text0} />
          ) : availableForOrder ? (
            '$' + formatAmount(availableForOrder || 0, 4)
          ) : (
            '-'
          )}
        </Value>
      </Row>
      <Row>
        <Label>Locked Margin: </Label>
        <Value>
          {balanceInfoStatus === ApiState.LOADING ? (
            <Loader size={'12px'} stroke={theme.text0} />
          ) : lockedMargin ? (
            '$' + formatAmount(lockedMargin || 0, 4)
          ) : (
            '-'
          )}
        </Value>
      </Row>
    </AccountWrapper>
  )
}
