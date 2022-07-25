import styled from 'styled-components'

export const StyledTitle = styled.h1<{ light?: boolean }>`
  color: ${({ light, theme }) => (light ? theme.colors.white : theme.colors.purple)};
  text-transform: uppercase;
`
