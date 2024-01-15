import styled, { keyframes } from 'styled-components'
import { Row } from 'components/Row'

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`

const Label = styled.label<{ disabled?: boolean }>`
  position: relative;
  display: inline-block;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin: 0.6em 0;
  margin-left: 8px;
  font-size: 12px;
  font-weight: 400;
`

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`

const Indicator = styled.div<{ checked?: boolean }>`
  width: 1.2em;
  height: 1.2em;
  background: ${({ theme }) => theme.bg4};
  position: absolute;
  top: 0em;
  left: -1.6em;
  border: 1px solid ${({ theme }) => theme.primaryBlue1};
  &::after {
    content: '';
    position: absolute;
    display: none;
  }
  ${Input}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 30%;
    height: 60%;
    border: solid ${({ theme }) => theme.primaryBlue1};
    border-width: 0 0.1em 0.1em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
  &::disabled {
    cursor: not-allowed;
  }
`

const Text = styled.div`
  font-size: 12px;
  font-weight: 400;
`

export default function Checkbox({
  checked,
  label,
  onChange,
  name,
  id,
  disabled,
}: {
  checked?: boolean
  label: string | JSX.Element
  onChange: (...arg: any) => void
  name: string
  id: string
  disabled?: boolean
}) {
  return (
    <Row>
      <Label htmlFor={id} disabled={disabled}>
        <Input id={id} type="checkbox" name={name} checked={checked} onChange={onChange} disabled={disabled} />
        <Indicator checked={checked} />
      </Label>
      <Text>{label}</Text>
    </Row>
  )
}
