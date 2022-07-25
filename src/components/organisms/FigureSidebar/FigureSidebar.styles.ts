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
  padding: 40px;
  width: calc(100% - 60px);

  > p,
  h1 {
    align-self: flex-start;
  }

  button {
    width: 200px;
  }
`

export const PartsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  overflow-y: scroll;
`

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`
