import styled from 'styled-components'

const WIDTH = 300

export const Wrapper = styled.div`
  width: ${WIDTH}px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 10px;
`

export const Image = styled.img`
  width: 100%;
`

export const Description = styled.div`
  p {
    display: inline-block;
    width: calc(${WIDTH}px * 4 / 5);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    :nth-of-type(2) {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`
