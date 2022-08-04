import { Paragraph } from '../../atoms/Paragraph'
import { Wrapper } from './Figure.styles'
import { getImageData } from 'utils'

interface Props {
  name: string
  imageUrl?: string
}

export const Figure: React.FC<Props> = ({ imageUrl, name }) => {
  const { url, alt } = getImageData(name, imageUrl)

  return (
    <Wrapper>
      <img src={url} alt={alt} />
      <Paragraph>{name}</Paragraph>
    </Wrapper>
  )
}
