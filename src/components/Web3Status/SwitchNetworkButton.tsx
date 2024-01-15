import Image from 'next/image'
import styled from 'styled-components'

import useRpcChangerCallback from 'lib/hooks/useRpcChangerCallback'
import useActiveWeb3React from 'lib/hooks/useActiveWeb3React'
import { truncateAddress } from 'utils/address'
import { FALLBACK_CHAIN_ID } from 'constants/chains'

import { Row, RowBetween } from 'components/Row'
import { Status as StatusIcon } from 'components/Icons'

const Button = styled(RowBetween)`
  width: 165px;
  height: 36px;

  font-weight: 700;
  font-size: 13px;
  text-align: center;
  padding: 8px 16px;
  border-radius: 6px;
  position: relative;

  color: ${({ theme }) => theme.rootBeer};
  border: 1px solid ${({ theme }) => theme.red};
  background: ${({ theme }) => theme.bakerMillerPink};
`

const AccountAddress = styled(Row)<{ width?: string; color?: string }>`
  width: ${({ width }) => width ?? '133px'};
  height: 36px;
  font-size: 13px;
  border-radius: 6px;

  background: ${({ theme }) => theme.color3};
  color: ${({ theme, color }) => color ?? theme.almostWhite};
`

const IconWrap = styled.div<{ top: string }>`
  position: absolute;
  right: 15px;
  top: ${({ top }) => top ?? '14px'};
`

export default function SwitchNetworkButton({ text }: { text: string }) {
  const rpcChangerCallback = useRpcChangerCallback()
  const { account, ENSName } = useActiveWeb3React()

  return (
    <Row gap={'12px'}>
      <AccountAddress>
        <StatusIcon style={{ marginRight: '12px', marginLeft: '6px' }} />
        {account ? `${ENSName || truncateAddress(account)}` : 'not connected'}
      </AccountAddress>

      <Button onClick={() => rpcChangerCallback(FALLBACK_CHAIN_ID)}>
        {text}
        <IconWrap top={'8px'}>
          <Image src={'/static/images/networks/blueBase.svg'} alt="Asset" width={20} height={20} />
        </IconWrap>
      </Button>
    </Row>
  )
}
