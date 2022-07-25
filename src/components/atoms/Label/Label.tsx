import styled from 'styled-components'

interface LabelProps {
  children: string
  light?: boolean
  htmlFor?: string
}

const StyledLabel = styled.label<{ light?: boolean }>`
  margin: 0;
  font-size: 14px;
  color: ${({ light, theme }) => (light ? theme.colors.white : theme.colors.purple)};
`

export const Label: React.FC<LabelProps> = ({ children, light, htmlFor }) => (
  <StyledLabel light={light} htmlFor={htmlFor}>
    {children}
  </StyledLabel>
)
