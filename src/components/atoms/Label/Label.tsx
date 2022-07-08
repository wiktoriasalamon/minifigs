import styled from 'styled-components'
import { purple, white } from 'styles/colors'

interface Props {
  children: string
  light?: boolean
}

const StyledLabel = styled.p<{ light?: boolean }>`
  margin: 0;
  font-size: 14px;
  color: ${({ light }) => (light ? white : purple)};
`

const Label: React.FC<Props> = ({ children, light }) => (
  <StyledLabel light={light}>{children}</StyledLabel>
)

export default Label
