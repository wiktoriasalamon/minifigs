import { ConditionalError } from 'components/common/ConditionalError'
import { Label } from 'components/common/Label'
import { StyledInput, Wrapper } from './Input.styles'

interface InputProps {
  label: string
  placeholder?: string
  errorMessage?: string
  disabled?: boolean
  value?: string | number
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  id: string
  type?: string
  min?: string | number
  max?: string | number
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  errorMessage,
  value,
  placeholder,
  onChange,
  type = 'text',
  min,
  max,
  onBlur,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        min={min}
        max={max}
        onBlur={onBlur}
      />
      <ConditionalError message={errorMessage} />
    </Wrapper>
  )
}

export default Input
