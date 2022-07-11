import styled from 'styled-components'
interface Props {
  children: string
  light?: boolean
}

const StyledLabel = styled.p<{ light?: boolean }>`
  margin: 0;
  font-size: 14px;
  color: ${({ light, theme }) => (light ? theme.colors.white : theme.colors.purple)};
`

export const Label: React.FC<Props> = ({ children, light }) => (
  <StyledLabel light={light}>{children}</StyledLabel>
)
