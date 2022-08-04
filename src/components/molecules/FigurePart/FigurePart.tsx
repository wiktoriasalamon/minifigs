import { Paragraph } from '../../atoms/Paragraph'
import { Wrapper, Image, Description } from './FigurePart.styles'
import { getImageData } from 'utils'

interface Props {
  imageUrl?: string
  name: string
  id: string
}

export const FigurePart: React.FC<Props> = ({ imageUrl, name, id }) => {
  const { url, alt } = getImageData(name, imageUrl)

  return (
    <Wrapper>
      <Image src={url} alt={alt} />
      <Description>
        <Paragraph>{name}</Paragraph>
        <Paragraph>{id}</Paragraph>
      </Description>
    </Wrapper>
  )
}
