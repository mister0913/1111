import Image from 'next/image'
import styled from 'styled-components'
import Header1 from '/public/static/images/dibs/Header1.svg'
import Header2 from '/public/static/images/dibs/Header2.svg'

const Container = styled.div`
  height: 204px;
  width: 100%;
  margin-top: 25px;
  background: ${({ theme }) => theme.color2};
  overflow: initial;
  position: relative;
`

const Plaid = styled.div`
  position: absolute;
  right: 0;
`

const Sun = styled.div`
  position: absolute;
  right: 0;
  top: -38px;
`

const HeaderTextWrapper = styled.div`
  padding: 12px 27px;
  font-weight: 600;
  position: absolute;
  color: white;
  left: 11.5%;
  bottom: 28px;
  margin-left: 220px;
  transform: translateX(-50%);
`

const TitleWrapper = styled.div`
  background: linear-gradient(183deg, #f9a2f3 28.97%, #fff 73.54%);
  font-family: Londrina Solid;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const DescriptionWrapper = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.tempPink};
  margin-top: 7px;
`

const LinkWrapper = styled.span`
  color: ${({ theme }) => theme.blue};
  cursor: pointer;
`

function Title() {
  return (
    <HeaderTextWrapper>
      <TitleWrapper>Trade 2 Earn </TitleWrapper>
      <DescriptionWrapper>Earn BASED by having high PnL or beastly volume</DescriptionWrapper>
      <DescriptionWrapper>
        Read the rules <LinkWrapper>here</LinkWrapper>.
      </DescriptionWrapper>
    </HeaderTextWrapper>
  )
}

export default function Header() {
  return (
    <Container>
      <Plaid>
        <Image src={Header2} alt={'plaid'} height={204} />
      </Plaid>
      <Sun>
        <Image src={Header1} alt={'Pink Sun'} width={496} height={242} />
      </Sun>
      <Title />
    </Container>
  )
}
