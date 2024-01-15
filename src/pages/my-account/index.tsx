import styled from 'styled-components'

import AccountBalance from 'components/App/AccountData/MyAccount/AccountBalance'
import BalanceHistory from 'components/App/AccountData/MyAccount/BalanceHistory'
import WithdrawBar from 'components/App/AccountData/MyAccount/WithdrawBar'
import AccountOverview from 'components/App/AccountData/MyAccount/AccountOverview'
import AccountPositions from 'components/App/AccountData/MyAccount/AccountPositions'
import { Container } from 'pages/trade/[symbol]'
import WrapperBanner from 'components/Banner'

const Wrapper = styled(Container)`
  max-width: 1200px;
  margin: auto;
  padding: 0px 12px;
`

const WithdrawRow = styled.div`
  margin-bottom: 16px;
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  gap: 16px;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    grid-template-columns: 1.4fr 1fr;
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
    grid-template-columns: 1fr;
  `}
`

export default function MyAccount() {
  return (
    <Wrapper>
      <WrapperBanner />
      <WithdrawRow>
        <WithdrawBar />
      </WithdrawRow>
      <Layout>
        <AccountOverview />
        <AccountBalance />
        <AccountPositions />
        <BalanceHistory />
      </Layout>
    </Wrapper>
  )
}
