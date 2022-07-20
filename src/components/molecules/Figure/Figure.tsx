import { Paragraph } from '../../atoms/Paragraph'
import styled from 'styled-components'

interface Props {
  name: string
  imageUrl: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  img {
    width: 150px;
  }
`

export const Figure: React.FC<Props> = ({ imageUrl, name }) => (
  <Wrapper>
    <img src={imageUrl} alt={name} />
    <Paragraph>{name}</Paragraph>
  </Wrapper>
)
