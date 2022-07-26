import { Label } from 'components/atoms/Label';
import { Error } from 'components/atoms/Error';
import { Wrapper, StyledInput } from './Input.styles';
import React from 'react';

interface InputProps {
  label: string;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
  value?: string | number;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  id: string;
  type?: string;
  min?: string | number;
  max?: string | number;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  errorMessage,
  value,
  placeholder,
  onChange,
  type,
  min,
  max,
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
      />
      {errorMessage && errorMessage.length > 0 && (
        <Error message={errorMessage} />
      )}
    </Wrapper>
  );
};

export default Input;
