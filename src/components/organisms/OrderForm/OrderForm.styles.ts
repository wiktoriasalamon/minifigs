import styled from 'styled-components';

export const HorizontalFormFields = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  
  div {
    width: 50%;
  }
`

export const FormStyled = styled.form`
  margin: 100px;
  
  > * {
    margin: 20px;
  }
  
  label {
    color: ${({theme}) => theme.colors.white};
  }
`
