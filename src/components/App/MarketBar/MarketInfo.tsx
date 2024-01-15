import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'
import Image from 'next/image'

import DEFAULT_TOKEN from '/public/static/images/tokens/default-token.svg'

import { useActiveMarket } from 'state/trade/hooks'
import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'
import useCurrencyLogo from 'lib/hooks/useCurrencyLogo'
import { useFavorites } from 'state/user/hooks'

import { ChevronDown, Loader, Star } from 'components/Icons'
import { Row, RowEnd, RowStart } from 'components/Row'
import { MarketsModal } from 'components/App/MarketBar/MarketsModal'

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  height: 100%;
`

const Wrapper = styled(Row)`
  gap: 16px;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }
`

const InnerContentWrapper = styled(Row)`
  padding: 11px 8px 10px 12px;
  height: 38px;
  max-width: 150px;
  border-radius: 3px;
  background: ${({ theme }) => theme.color3};
  &:hover {
    background: ${({ theme }) => theme.color4};
  }
`

const Chevron = styled(ChevronDown)<{ open: boolean }>`
  transform: rotateX(${({ open }) => (open ? '180deg' : '0deg')});
  transition: 0.5s;
`

const MarketText = styled(Row)`
  gap: 12px;
  font-weight: 700;
  font-size: 15px;
  line-height: normal;
  white-space: nowrap;

  color: ${({ theme }) => theme.almostWhite};
`

export default function MarketSelect() {
  const ref = useRef(null)
  const [clickMarket, setClickMarket] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const market = useActiveMarket()
  useOnOutsideClick(ref, () => setClickMarket(false))
  const token1 = useCurrencyLogo(market?.symbol)
  const favorites = useFavorites()
  const isFavorite = favorites?.includes(market?.symbol ?? '')

  function getInnerContent() {
    return (
      <InnerContentWrapper>
        <RowStart style={{ marginRight: '39px' }}>
          {market ? (
            <React.Fragment>
              <div style={{ minWidth: '16px', minHeight: '16px', marginRight: '5px', marginTop: '4px' }}>
                <Image src={token1 ?? DEFAULT_TOKEN} width={16} height={16} alt={`icon`} />
              </div>
              <MarketText>
                {market.symbol} / {market.asset}
              </MarketText>
            </React.Fragment>
          ) : (
            <Loader />
          )}
        </RowStart>
        <RowEnd width={'10%'} minWidth={'10px'}>
          <Chevron open={clickMarket} />
        </RowEnd>
      </InnerContentWrapper>
    )
  }

  return isMobile ? (
    <>
      <Wrapper onClick={() => setModalOpen(true)}>{getInnerContent()}</Wrapper>
      <MarketsModal isModal isOpen={modalOpen} onDismiss={() => setModalOpen(false)} />
    </>
  ) : (
    <Container ref={ref}>
      {clickMarket && (
        <div>
          <MarketsModal isOpen onDismiss={() => setClickMarket(!clickMarket)} />
        </div>
      )}
      <Wrapper onClick={() => setClickMarket(!clickMarket)}>
        {getInnerContent()}
        <Star
          size={18}
          isFavorite={isFavorite}
          style={{
            zIndex: 99,
          }}
        />
      </Wrapper>
    </Container>
  )
}
