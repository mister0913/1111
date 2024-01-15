import Image from 'next/image'
import styled, { css, useTheme } from 'styled-components'

import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'

import Column from 'components/Column'
import { Row, RowBetween, RowEnd, RowStart } from 'components/Row'
import External from 'components/Icons/External'
import AerodromeLogo from 'components/Icons/AerodromeLogo'
import VelocimeterLogo from 'components/Icons/VelocimeterLogo'
import { ExternalLink } from 'components/Link'
import { Title } from 'components/Banner/Header'

const Container = styled(Column)`
  position: relative;
  padding: 16px 24px 0;
  border-radius: 6px;
  justify-content: space-between;
  background: ${({ theme }) => theme.color2};
  height: 319px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
      grid-column: auto;
  `}
`

const HeaderWrapper = styled(Column)`
  position: relative;
  margin-left: -6.5%;
`

const TableWrapper = styled(Column)`
  width: 85%;
  height: 48px;
  gap: 3px;
  margin: auto;
  color: ${({ theme }) => theme.text7};
  border-bottom: 1px solid ${({ theme }) => theme.border1};
  font-size: 12px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: 100%;
  `}
`

const RowWrapper = styled(Row)`
  background-color: ${({ theme }) => theme.color3};
  border-radius: 4px;
  padding: 8px 16px;
`

const Col = styled.div<{
  flex?: string
}>`
  flex: ${({ flex }) => flex || '1'};
`

const RowContent = styled(RowStart)`
  & > * {
    ${({ theme }) => theme.mediaWidth.upToSmall`
      ${css`
        &:nth-child(3) {
          display: none;
        }
      `}
    `}

    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      ${css`
        &:nth-child(2) {
          display: none;
        }
      `}
    `}
  }
`

const Tokens = styled(Row)`
  width: auto;

  & > * {
    :not(:first-child) {
      margin-left: -8px !important;
    }

    :nth-child(n) {
      min-width: 24px;
    }
  }
`

const Name = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.almostWhite};
`

const RowText = styled.span<{
  isBlue?: boolean
  color?: string
}>`
  font-weight: 400;
  color: ${({ theme, isBlue, color }) => (color ? color : isBlue ? theme.primaryBlue1 : theme.green7)};
`

const FarmButton = styled.button<{
  isBlue?: boolean
}>`
  width: 164px;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  box-sizing: border-box;
  border-radius: 4px;
  color: ${({ isBlue, theme }) => (isBlue ? theme.blue4 : theme.green5)};
  background: ${({ isBlue, theme }) => (isBlue ? theme.blue5 : theme.green6)};
  border: 1px solid ${({ isBlue, theme }) => (isBlue ? theme.RYB : theme.slateGray)};
  padding: ${({ isBlue }) => `8px ${isBlue ? '12px' : '8px'} 8px 8px`};
  box-shadow: 0px 2px 0px 0px ${({ isBlue, theme }) => (isBlue ? theme.RYB : theme.slateGray)};
`

const FarmTitle = styled.span`
  margin-right: 6px;
`

export default function LPStake() {
  const theme = useTheme()
  return (
    <Container>
      <Header />
      <TableWrapper>
        <LPRow name="vAMM-WETH/BASED" apr="XX" votingBribe="XX" color={theme.almostWhite} type="aerodrome" />
        <LPRow name="vAMM-WETH/BASED" apr="XX" votingBribe="XX" color={theme.almostWhite} type="velocimeter" />
      </TableWrapper>
    </Container>
  )
}

function Header() {
  return (
    <HeaderWrapper>
      <Title
        title="LP Staking"
        subtitle="Add Liquidity to these WETH/BASED pools to earn"
        titlePosition={{ top: '0' }}
        isSectionTitle={true}
      ></Title>
    </HeaderWrapper>
  )
}

function LPRow({
  name,
  apr,
  color,
  votingBribe,
  type,
}: {
  name: string
  apr: string
  color?: string
  votingBribe: string
  type: 'aerodrome' | 'velocimeter'
}) {
  const theme = useTheme()
  const ethLogo = useCurrencyLogo('ETH')
  const basedLogo = useCurrencyLogo('BASED')
  const link = type === 'aerodrome' ? 'https://aerodrome.finance' : 'https://www.velocimeter.xyz'

  return (
    <RowWrapper>
      <Col flex="2">
        <RowContent gap="24px">
          <RowStart gap="8px" width="auto">
            <Tokens>
              <Image src={basedLogo} alt={'based logo'} width={'32'} height={'32'} />
              <Image src={ethLogo} alt="eth logo" width={'32'} height={'32'} />
            </Tokens>
            <Name>{name}</Name>
          </RowStart>
          <RowText isBlue={type === 'aerodrome'} color={color}>
            APR: {apr}%
          </RowText>
          {/* <RowText isBlue={type === 'aerodrome'}>Voting Bribe: {votingBribe}% Trading Fees</RowText> */}
        </RowContent>
      </Col>
      <Col>
        <RowEnd gap="12px">
          <ExternalLink href={link}>
            <FarmButton isBlue={type === 'aerodrome'}>
              <RowBetween>
                <div>
                  <FarmTitle>Farm on {`${type.at(0)?.toUpperCase()}${type.slice(1)}`} </FarmTitle>
                  <External color={type === 'aerodrome' ? theme.RYB : theme.slateGray} />
                </div>
                {type === 'aerodrome' ? <AerodromeLogo /> : <VelocimeterLogo />}
              </RowBetween>
            </FarmButton>
          </ExternalLink>
        </RowEnd>
      </Col>
    </RowWrapper>
  )
}
