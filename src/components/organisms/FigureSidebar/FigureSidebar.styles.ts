import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  border-radius: 10px;
  gap: 30px;
  width: 25%;
  padding: 20px;

  > div:last-of-type {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  > p,
  h1 {
    width: 100%;
  }
`
