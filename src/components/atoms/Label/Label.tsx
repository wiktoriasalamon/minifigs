import styled from 'styled-components'
interface Props {
  children: string
  light?: boolean
  htmlFor?: string
}

const StyledLabel = styled.label<{ light?: boolean }>`
  margin: 0;
  font-size: 14px;
  color: ${({ light, theme }) => (light ? theme.colors.white : theme.colors.purple)};
`

export const Label: React.FC<Props> = ({ children, light, htmlFor }) => (
  <StyledLabel light={light} htmlFor={htmlFor}>
    {children}
  </StyledLabel>
)
