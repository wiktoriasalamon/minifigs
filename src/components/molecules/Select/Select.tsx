import ReactSelect, { SingleValue } from 'react-select'
import { ConditionalError } from 'components/atoms/ConditionalError'
import { Label } from 'components/atoms/Label'
import { Wrapper } from './Select.styles'
import { IOption } from './types'

interface SelectProps {
  options: IOption[]
  id: string
  label: string
  errorMessage?: string
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void
  onChange: (newValue: SingleValue<IOption>) => void
}

export const Select: React.FC<SelectProps> = ({
  options,
  id,
  label,
  errorMessage,
  onBlur,
  onChange,
}) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <ReactSelect options={options} onBlur={onBlur} onChange={onChange} />
    <ConditionalError message={errorMessage} />
  </Wrapper>
)