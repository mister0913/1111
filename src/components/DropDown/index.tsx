import React, { useState, useRef, useMemo, useEffect } from 'react'
import styled from 'styled-components'

import useOnOutsideClick from 'lib/hooks/useOnOutsideClick'
import { ChevronDown } from 'components/Icons'
import find from 'lodash/find'
import { RowBetween } from 'components/Row'

const Wrapper = styled.div<{
  width: string
}>`
  /* overflow: hidden; */
  color: ${({ theme }) => theme.text1};
  max-width: ${({ width }) => width};
  width: 100%;
  position: relative;
`

const Header = styled(RowBetween)<{
  noHover?: boolean
  width: string
}>`
  font-size: 1rem;
  text-align: left;
  padding: 0 10px;
  height: 48px;
  background: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.text1};
  width: ${({ width }) => width};

  &:hover {
    cursor: ${({ noHover }) => (noHover ? 'default' : 'pointer')};
  }
`

const StyledChevron = styled(ChevronDown)<{
  isOpen?: boolean
}>`
  transition: transform 0.5s ease-out;
  size: 2rem;
  ${({ isOpen }) =>
    isOpen &&
    `
    transform: scaleY(-1)
  `};
`

const List = styled.ul<{
  width: string
  isOpen?: boolean
}>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  background: ${({ theme }) => theme.bg2};
  border-bottom: 1px solid ${({ theme }) => theme.bg3};
  overflow: hidden;
  position: absolute;
  z-index: 999;
  width: 100%;
  max-width: ${({ width }) => width};
  max-height: 255px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: block;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.text2};
  }
  & > * {
    &:first-child {
      border-top: 1px solid ${({ theme }) => theme.bg3};
    }
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.bg3};
    }
  }
`

const ListItem = styled.li`
  list-style: none;
  text-align: left;
  border-top: none;
  display: flex;
  align-items: center;
  height: 48px;
  color: ${({ theme }) => theme.text1};
  padding: 0 10px;
  background: ${({ theme }) => theme.bg2};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.bg3};
  }
`

export interface Option {
  value: string
  label: JSX.Element | string
}

export default function Dropdown({
  options = [],
  placeholder = 'Contracts',
  emptyList = 'No options available',
  onSelect,
  width,
  defaultValue,
  disabled = false,
}: {
  options: Option[]
  placeholder?: string
  emptyList?: string
  onSelect: (val: string) => void
  width: string
  defaultValue?: string
  disabled?: boolean
}) {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue || '')

  useOnOutsideClick(ref, () => setIsOpen(false))

  useEffect(() => {
    if (!selectedOption && defaultValue) {
      setSelectedOption(defaultValue)
      onSelect(defaultValue)
    }
  }, [options, defaultValue, onSelect, selectedOption])

  const header: JSX.Element | string = useMemo(() => {
    const option: Option | undefined = find(options, (obj) => obj.value == selectedOption)
    return option?.label ?? placeholder
  }, [selectedOption, options, placeholder])

  const toggle = () => {
    !disabled && setIsOpen(!isOpen)
  }

  if (!options.length) {
    return (
      <Wrapper ref={ref} width={width}>
        <Header width={width} noHover>
          {emptyList}
        </Header>
      </Wrapper>
    )
  }

  return (
    <Wrapper ref={ref} width={width}>
      <Header onClick={toggle} width={width}>
        {header}
        {!disabled && <StyledChevron isOpen={isOpen} />}
      </Header>
      <List isOpen={isOpen} width={width}>
        {options.map((option, i) => (
          <ListItem
            key={i}
            onClick={() => {
              const selected = option.value
              onSelect(selected)
              setSelectedOption(selected)
              toggle()
            }}
          >
            {option.label}
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}
