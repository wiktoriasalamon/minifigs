import styled from 'styled-components';

export const HorizontalFormFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  @media (min-width: 1000px) {
    flex-direction: row;
    > div {
      width: 50%;
    }
  }
`;

export const FormStyled = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > * {
    width: 100%;
    margin: 20px;
  }

  label {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1000px) {
    width: 100%;
  }
`;
