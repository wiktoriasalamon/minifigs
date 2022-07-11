import styled from 'styled-components'
interface Props {
  children: string
  light?: boolean
}

const StyledTitle = styled.h1<{ light?: boolean }>`
  color: ${({ light, theme }) => (light ? theme.colors.white : theme.colors.purple)};
  text-transform: uppercase;
`

export const Title: React.FC<Props> = ({ children, light }) => (
  <StyledTitle light={light}>{children}</StyledTitle>
)
