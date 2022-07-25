import { Paragraph } from '../../atoms/Paragraph'
import { Wrapper } from './Figure.styles'

interface Props {
  name: string
  imageUrl: string
}

export const Figure: React.FC<Props> = ({ imageUrl, name }) => (
  <Wrapper>
    <img src={imageUrl} alt={name} />
    <Paragraph>{name}</Paragraph>
  </Wrapper>
)
