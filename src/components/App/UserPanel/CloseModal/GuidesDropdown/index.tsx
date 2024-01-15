import { useState, memo } from 'react'
import styled from 'styled-components'

import { BN_ZERO, toBN } from 'utils/numbers'
import { CloseGuides, OrderType } from 'types/trade'

import Column from 'components/Column'
import { Row, RowEnd } from 'components/Row'
import { ChevronDown } from 'components/Icons'
import { Card } from 'components/Card'
import GuideOne from './GuideOne'
import GuideTwo from './GuideTwo'
import GuideThree from './GuideThree'

const ContentContainer = styled(Column)`
  gap: 12px;
  background: ${({ theme }) => theme.bg4};
  border: 1px solid ${({ theme }) => theme.border1};
`

const DropdownHeader = styled(Row)<{ borderBottom?: boolean }>`
  height: 40px;
  cursor: pointer;
  padding: 0px 12px;
  background: ${({ theme }) => theme.bg4};
`

const DropdownContent = styled(Card)<{ isOpen: boolean }>`
  gap: 12px;
  padding: 0px 10px 10px 10px;
  max-height: 120px;
  border: none;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  background: ${({ theme }) => theme.bg4};
`

const Chevron = styled(ChevronDown)<{ open: boolean }>`
  transform: rotateX(${({ open }) => (open ? '180deg' : '0deg')});
  margin-right: 4px;
  transition: 0.5s;
`

const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  white-space: nowrap;

  color: ${({ theme }) => theme.text0};
`

export default memo(function GuidesDropDown({
  symbol,
  setSize,
  setActiveTab,
  notionalValue,
  availableAmount,
  availableToClose,
}: {
  symbol?: string
  setSize: (size: string) => void
  setActiveTab: (orderType: OrderType) => void
  notionalValue: string
  availableAmount: string
  availableToClose: string
}) {
  const [border, setBorder] = useState(true)

  const values = (() => {
    const availableAmountBN = toBN(availableAmount)
    const availableToCloseBN = toBN(availableToClose)
    const notionalValueBN = toBN(notionalValue)
    const remainingPositionSize = availableAmountBN.minus(availableToCloseBN)

    if (notionalValueBN.lte(10)) {
      return {
        maxClose: availableAmountBN.toString(),
        maxPartiallyClose: BN_ZERO.toString(),
        minPositionSize: BN_ZERO.toString(),
        liquidationAfterClose: BN_ZERO.toString(),
        state: CloseGuides.THREE,
      }
    }

    // if (postSolvencyValueBN.gte(availableAmountBN)) {
    if (availableToCloseBN.isEqualTo(0)) {
      return {
        maxClose: availableAmountBN.toString(),
        maxPartiallyClose: BN_ZERO.toString(),
        minPositionSize: remainingPositionSize.toString(),
        liquidationAfterClose: BN_ZERO.toString(),
        state: CloseGuides.ONE,
      }
    }
    return {
      maxClose: availableAmountBN.toString(),
      maxPartiallyClose: availableToCloseBN.toString(),
      minPositionSize: remainingPositionSize.toString(),
      liquidationAfterClose: BN_ZERO.toString(),
      state: CloseGuides.ONE,
    }

    return {
      maxClose: BN_ZERO.toString(),
      maxPartiallyClose: BN_ZERO.toString(),
      minPositionSize: BN_ZERO.toString(),
      liquidationAfterClose: BN_ZERO.toString(),
      state: CloseGuides.ONE,
    }
  })()

  function getTriggers(): React.ReactElement<any> | string {
    const { state, maxPartiallyClose } = values
    const text =
      state === CloseGuides.ONE
        ? toBN(maxPartiallyClose).isEqualTo(0)
          ? 'Full Close'
          : 'Full Close, Partial Close'
        : state === CloseGuides.TWO
        ? 'Partial Close'
        : state === CloseGuides.THREE
        ? 'Full Close'
        : null

    return (
      <DropdownHeader borderBottom={border} onClick={() => setBorder(!border)}>
        <Text>
          <div>Available to Market close:</div>
          <div>{text}</div>
        </Text>
        <RowEnd>
          <Chevron open={border} />
        </RowEnd>
      </DropdownHeader>
    )
  }

  function GetContent(): JSX.Element {
    const { state } = values

    switch (state) {
      case CloseGuides.ONE:
        return <GuideOne values={values} symbol={symbol} setSize={setSize} setActiveTab={setActiveTab} />
      case CloseGuides.TWO:
        return <GuideTwo values={values} symbol={symbol} setSize={setSize} setActiveTab={setActiveTab} />
      case CloseGuides.THREE:
        return <GuideThree values={values} symbol={symbol} setSize={setSize} setActiveTab={setActiveTab} />
      default:
        return <></>
    }
  }

  return (
    <>
      <ContentContainer>
        {getTriggers()}
        <DropdownContent isOpen={border}>
          <GetContent />
        </DropdownContent>
      </ContentContainer>
    </>
  )
})
