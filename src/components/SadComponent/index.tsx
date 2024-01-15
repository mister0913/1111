import styled from 'styled-components'
import { ChuppyFrown, WalletNotConnected } from 'components/Icons'
import Column from 'components/Column'
const WrapperWalletNotConnected = styled(Column)<{ mode: boolean }>`
  padding-top: 40px;
  padding-bottom: 40px;
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  justify-content: center;
  align-items: center;
`

const TextWrapper = styled.div<{ mode: boolean }>`
  margin-top: ${({ mode }) => (mode ? '-30px' : '10px')};
  margin-left: ${({ mode }) => (mode ? '10px' : '0px')};
`
export function SadComponent({ iconSize = 250, mode, text }: { iconSize?: number; text: string; mode: boolean }) {
  return (
    <WrapperWalletNotConnected mode={mode}>
      {mode && <ChuppyFrown size={iconSize} />}
      {!mode && <WalletNotConnected size={iconSize} />}
      <TextWrapper mode={mode}>{text}</TextWrapper>
    </WrapperWalletNotConnected>
  )
}
