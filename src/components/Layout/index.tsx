import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  padding-bottom: 36px;
  flex-flow: column nowrap;
  background: ${({ theme }) => theme.color1};
`

const HeaderWrap = styled.div`
  width: 100%;
  margin-bottom: 4px;
  position: sticky;
  top: 0;
  z-index: 300;
  background: ${({ theme }) => theme.color2};
`

const Content = styled.div`
  position: relative;
  height: 100%;
  min-height: calc(100vh - 60px);
  background: ${({ theme }) => theme.color1};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    min-height: calc(100vh - 60px);
  `}

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding-bottom: 30px;
  `}
`

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <HeaderWrap>
        <NavBar />
      </HeaderWrap>
      <Content>{children}</Content>
      {/* <Footer /> */}
    </Wrapper>
  )
}
