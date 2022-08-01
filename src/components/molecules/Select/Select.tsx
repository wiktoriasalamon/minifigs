import ReactSelect, { SingleValue } from 'react-select'
import { Label } from '../../atoms/Label'
import { Option } from './types'
import { Wrapper } from './Select.styles'
import { ConditionalError } from '../../atoms/ConditionalError'
import React from 'react'

interface SelectProps {
  options: Option[]
  id: string
  label: string
  errorMessage?: string
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void
  onChange: (newValue: SingleValue<Option>) => void
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
