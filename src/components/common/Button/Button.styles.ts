import styled from 'styled-components'

export const StyledButton = styled.button<{ primary?: boolean }>`
  border: none;
  border-radius: 25px;
  margin: 0;
  padding: 12px;
  width: 10rem;
  background-color: ${({ primary, theme }) => (primary ? theme.colors.blue : theme.colors.orange)};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;

  :not(:disabled):hover {
    opacity: 80%;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey};
    opacity: 50%;
  }
`
