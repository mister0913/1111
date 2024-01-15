import Image from 'next/image'
import styled from 'styled-components'
import AnimationLoader from 'components/Animation/AnimationLoader'

type IconSize = {
  height?: string
  width?: string
}

type TitlePosition = {
  left?: string
  right?: string
  bottom?: string
  top?: string
}

const Container = styled.div`
  height: 204px;
  width: 100%;
  z-index: 1;
  background: ${({ theme }) => theme.color2};
  position: relative;
  margin-top: 25px;
  margin-bottom: 40px;
`

const BackgroundWrapper = styled.div`
  position: absolute;
  right: 0;
`

const IconWrapper = styled.div`
  position: absolute;
`

const AnimationWrapper = styled.div`
  position: absolute;
  z-index: 2;
`

const HeaderTextWrapper = styled.div<{
  titlePosition?: TitlePosition
}>`
  padding: 12px 27px;
  font-weight: 600;
  position: absolute;
  color: white;
  top: ${({ titlePosition }) => (titlePosition?.top ? titlePosition.top : undefined)};
  right: ${({ titlePosition }) => (titlePosition?.right ? titlePosition.right : undefined)};
  left: ${({ titlePosition }) => (titlePosition?.left ? titlePosition.left : '11.5%')};
  bottom: ${({ titlePosition }) => (titlePosition?.bottom ? titlePosition.bottom : '28px')};
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

const DescriptionWrapper = styled.div<{ isSectionTitle?: boolean }>`
  font-size: ${({ isSectionTitle }) => (isSectionTitle ? '15px' : '20px')};
  color: ${({ theme, isSectionTitle }) => (isSectionTitle ? theme.coolGrey : theme.tempPink)};
`

export function Title({
  title,
  subtitle,
  description,
  isSectionTitle,
  titlePosition,
}: {
  title: string
  subtitle: string
  description?: string
  isSectionTitle?: boolean
  titlePosition?: TitlePosition
}) {
  return (
    <HeaderTextWrapper titlePosition={titlePosition}>
      <TitleWrapper>{title}</TitleWrapper>
      <DescriptionWrapper isSectionTitle={isSectionTitle}>{subtitle}</DescriptionWrapper>
      {description && <DescriptionWrapper>${description}</DescriptionWrapper>}
    </HeaderTextWrapper>
  )
}

export default function Header({
  backgroundImg,
  icon,
  animation,
  title,
  subtitle,
  description,
  iconStyle = {},
  iconSize = { width: '496', height: '242' },
}: {
  backgroundImg: string
  icon?: string
  animation?: string
  title: string
  subtitle: string
  description?: string
  iconStyle?: React.CSSProperties
  iconSize?: IconSize
}) {
  return (
    <Container>
      <BackgroundWrapper>
        <Image src={backgroundImg} alt={'background'} height={204} />
      </BackgroundWrapper>
      {!animation ? (
        <IconWrapper style={iconStyle}>
          ${icon && <Image src={icon} alt={'icon'} width={iconSize.width} height={iconSize.height} />}
        </IconWrapper>
      ) : (
        <AnimationWrapper style={iconStyle}>
          <AnimationLoader name={animation}></AnimationLoader>
        </AnimationWrapper>
      )}

      <Title title={title} subtitle={subtitle} description={description} />
    </Container>
  )
}
