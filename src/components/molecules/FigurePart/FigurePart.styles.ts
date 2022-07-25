import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`

export const Image = styled.img`
  width: 60px;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  p {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 350px;

    :nth-of-type(2) {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`
