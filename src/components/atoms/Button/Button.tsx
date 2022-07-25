import styled from 'styled-components'

interface ButtonProps {
  label: string
  primary?: boolean
  onClick: () => void
  disabled?: boolean
}

const StyledButton = styled.button<{ primary?: boolean }>`
  border: none;
  border-radius: 20px;
  margin: 0;
  padding: 10px;
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

export const Button: React.FC<ButtonProps> = ({ label, primary, disabled, onClick }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} primary={primary} type='button'>
      <span>{label}</span>
    </StyledButton>
  )
}
