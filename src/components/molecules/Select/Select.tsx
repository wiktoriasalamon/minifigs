import ReactSelect from 'react-select'
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
}

export const Select: React.FC<SelectProps> = ({ options, id, label, errorMessage, onBlur }) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <ReactSelect options={options} onBlur={onBlur} />
    <ConditionalError message={errorMessage} />
  </Wrapper>
)
