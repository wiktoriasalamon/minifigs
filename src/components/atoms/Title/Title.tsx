import styled from 'styled-components'
import { purple, white } from 'styles/colors'

interface Props {
  children: string
  light?: boolean
}

const StyledTitle = styled.h1<{ light?: boolean }>`
  color: ${({ light }) => (light ? white : purple)};
  text-transform: uppercase;
`

export const Title: React.FC<Props> = ({ children, light }) => (
  <StyledTitle light={light}>{children}</StyledTitle>
)
