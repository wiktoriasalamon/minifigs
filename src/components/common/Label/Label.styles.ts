import styled from 'styled-components'

export const StyledLabel = styled.label<{ light?: boolean }>`
  margin: 0;
  font-size: 14px;
  color: ${({ light, theme }) => (light ? theme.colors.white : theme.colors.purple)};
`
