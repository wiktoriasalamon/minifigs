import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.purple};
  display: grid;
  grid-template-columns: 2fr 1fr;
  flex-direction: row;
  
  img {
    width: 100px;
  }
`
