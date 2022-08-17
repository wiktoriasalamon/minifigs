import { Paragraph } from 'components/common/Paragraph'
import { Description, Image, Wrapper } from './FigurePart.styles'

interface Props {
  imageUrl: string
  name: string
  id: string
}

export const FigurePart: React.FC<Props> = ({ imageUrl, name, id }) => (
  <Wrapper>
    <Image src={imageUrl} alt={name} />
    <Description>
      <Paragraph>{name}</Paragraph>
      <Paragraph>{id}</Paragraph>
    </Description>
  </Wrapper>
)
