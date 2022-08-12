import { StyledButton } from './Button.styles'

interface ButtonProps {
  label: string
  primary?: boolean
  onClick: () => void
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ label, primary, disabled, onClick }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} primary={primary} type='button'>
      <span>{label}</span>
    </StyledButton>
  )
}
