import React from 'react'
import styled, { useTheme } from 'styled-components'
import { ArrowUpRight } from 'react-feather'

import DEPOSIT_USDC_ICON from '/public/static/images/etc/DepositUSDCPopUp.svg'
import WITHDRAW_USDC_ICON from '/public/static/images/etc/WithdrawUSDCPopUp.svg'

import { TransferTab } from 'types/transfer'
import { ExplorerDataType } from 'utils/explorers'
import { FALLBACK_CHAIN_ID } from 'constants/chains'

import { useTransaction } from 'state/transactions/hooks'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'

import TransactionSummary from 'components/Summaries/TransactionSummary '
import { ExplorerLink } from 'components/Link'
import { Row, RowEnd, RowStart } from 'components/Row'
import { CheckMark, Close } from 'components/Icons'
import ImageWithFallback from 'components/ImageWithFallback'

const Wrapper = styled(Row)<{ success?: boolean; color: string }>`
  height: 40px;
  padding: 11px 16px;

  background: ${({ theme, success }) => (success ? theme.color3 : theme.bgWarning)};
  color: ${({ color }) => color};
  border-radius: 4px;
`

const Text = styled(RowStart)`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.text0};
`

export default function TransactionPopup({
  hash,
  success,
  summary,
  removeThisPopup,
}: {
  hash: string
  success?: boolean
  summary?: string
  removeThisPopup: () => void
}) {
  const { chainId } = useActiveWeb3React()
  const theme = useTheme()
  const tx = useTransaction(hash)
  const status = success ? 'submitted' : 'failed'
  const transferType = (() => {
    if (tx?.info && 'transferType' in tx.info) {
      if (tx.info.transferType === TransferTab.DEALLOCATE || tx.info.transferType === TransferTab.WITHDRAW) {
        return WITHDRAW_USDC_ICON
      }
      return DEPOSIT_USDC_ICON
    }
    return undefined
  })()

  return (
    <Wrapper color={success ? theme.border1 : theme.warning} success={success}>
      <Text>
        <ExplorerLink
          chainId={chainId ?? FALLBACK_CHAIN_ID}
          type={ExplorerDataType.TRANSACTION}
          value={hash}
          style={{
            height: '100%',
            color: success ? theme.almostWhite : theme.warning,
            fontSize: '12px',
            fontWeight: '500',
          }}
        >
          <TransactionSummary info={tx?.info} summary={summary} status={status} />

          {/* {summary} */}
        </ExplorerLink>
        <ArrowUpRight
          size={'10px'}
          style={{
            marginLeft: '6px',
            color: success ? theme.blue : theme.warning,
          }}
        />
      </Text>
      <RowEnd width={'25%'} onClick={removeThisPopup} style={{ cursor: 'pointer' }}>
        {transferType ? (
          <ImageWithFallback src={transferType} width={46} height={24} alt={`transfer-type`} />
        ) : success ? (
          <CheckMark color={theme.blue} />
        ) : (
          <Close color={theme.warning} />
        )}
      </RowEnd>
    </Wrapper>
  )
}
