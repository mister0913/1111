import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

import STAKING_ICON from '/public/static/images/staking/Icon.svg'
import TRADE2EARN_ICON from '/public/static/images/pages/Trade2Earn.svg'

import { Z_INDEX } from 'theme'
import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'

import { Analytics, Client, MarketPair, NavToggle, Trade, Link as ExternalLinkIcon } from 'components/Icons'
import { Card } from 'components/Card'
import { RowBetween, RowEnd, RowStart } from 'components/Row'
import { ExternalLink } from 'components/Link'
import NavButton from 'components/Button/NavButton'

const Container = styled(RowEnd)`
  flex-flow: row nowrap;
  width: unset;
`

const InlineModal = styled(Card)<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: absolute;
  width: 216px;
  height: 256px;
  transform: translateX(-215px) translateY(20px);
  z-index: ${Z_INDEX.modal};
  gap: 8px;
  padding: 0px;
  margin-top: 10px;
  background: ${({ theme }) => theme.color3};

  & > * {
    &:first-child {
      margin-top: 8px;
    }
  }
`

const Row = styled(RowBetween)<{ active?: boolean }>`
  width: unset;
  height: 40px;
  padding: 0px 11px;
  color: ${({ theme }) => theme.almostWhite};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }

  ${({ active, theme }) =>
    active &&
    ` background: ${theme.color4};
      pointer-events: none;
  `};
`

export default function Menu() {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const toggle = () => setIsOpen((prev) => !prev)
  useOnOutsideClick(ref, () => setIsOpen(false))

  return (
    <Container ref={ref}>
      <NavButton onClick={() => toggle()} customText={''} simpleMode width={40} height={36}>
        <NavToggle width={24} height={10} />
      </NavButton>
      <div>
        <InlineModal isOpen={isOpen} onClick={() => toggle()}>
          <Link href="/trade" passHref>
            <Row active={router.route.includes('/trade/')}>
              <div>Trade</div>
              <Trade size={20} />
            </Row>
          </Link>

          <ExternalLink href="https://analytics.based.markets/home">
            <Row>
              <div>
                Analytics
                <ExternalLinkIcon style={{ transform: 'translateX(8px)' }} />
              </div>
              <Analytics />
            </Row>
          </ExternalLink>

          <Link href="/staking" passHref>
            <Row active={router.route.includes('/staking')}>
              <div>Staking</div>
              <Image src={STAKING_ICON} width={'22px'} height={'20px'} alt={'staking icon'} />
            </Row>
          </Link>

          <Link href="/trade2earn" passHref>
            <Row active={router.route.includes('/trade2earn')}>
              <div>Trade2Earn</div>
              <Image src={TRADE2EARN_ICON} width={'32px'} height={'14px'} alt={'trade2earn icon'} />
            </Row>
          </Link>

          <Link href="/my-account" passHref>
            <Row>
              <RowStart>
                <RowStart width={'unset'}>My Account</RowStart>
                {/* <ComingSoonText>SOON...</ComingSoonText> */}
              </RowStart>
              <Client />
            </Row>
          </Link>
          <Link href="/markets" passHref>
            <Row>
              <RowStart>
                <RowStart width={'unset'}>Markets</RowStart>
                {/* <ComingSoonText>SOON...</ComingSoonText> */}
              </RowStart>
              <MarketPair />
            </Row>
          </Link>
        </InlineModal>
      </div>
    </Container>
  )
}
