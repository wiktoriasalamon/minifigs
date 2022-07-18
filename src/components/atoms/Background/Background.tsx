import styled from 'styled-components';

export const Background = styled.div<{dark?: boolean}>`
  background-color: ${({theme, dark}) => dark ? theme.colors.purple : theme.colors.white};
  padding: 20px;
`