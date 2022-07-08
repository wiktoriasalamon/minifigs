import styled from 'styled-components'
import { grey, white } from 'styles/colors'

interface Props {
  label: string
  color: string
  onClick: () => void
  disabled?: boolean
}

const StyledButton = styled.button<{ color: string }>`
  border: none;
  border-radius: 20px;
  margin: 0;
  padding: 10px;
  width: 10rem;
  background-color: ${({ color }) => color};
  text-transform: uppercase;
  color: ${white};
  font-weight: bold;

  :not(:disabled):hover {
    opacity: 80%;
  }

  &:disabled {
    background-color: ${grey};
    opacity: 50%;
  }
`

export const Button: React.FC<Props> = ({ label, color, disabled, onClick }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} color={color} type='button'>
      <>{label}</>
    </StyledButton>
  )
}
