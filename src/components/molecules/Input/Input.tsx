import Label from 'components/atoms/Label'
import Error from 'components/atoms/Error'
import styled from 'styled-components'
import React from 'react'

interface Props {
  label: string
  placeholder?: string
  errorMessage?: string
  disabled?: boolean
  value: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const StyledInput = styled.input`
  padding: 10px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Input: React.FC<Props> = ({ label, errorMessage, value, placeholder, onChange }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput value={value} placeholder={placeholder} onChange={onChange} />
      {errorMessage && errorMessage.length > 0 && <Error message={errorMessage} />}
    </Wrapper>
  )
}

export default Input
