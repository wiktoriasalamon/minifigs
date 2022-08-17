import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.purple};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 700px;
  }
`
