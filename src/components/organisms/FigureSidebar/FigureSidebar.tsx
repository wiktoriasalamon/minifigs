import { Wrapper } from './FigureSidebar.styles'
import { Paragraph } from '../../atoms/Paragraph'
import { Title } from '../../atoms/Title'

interface Props {
  minifig: JSX.Element | null
  parts: JSX.Element[]
}

export const FigureSidebar: React.FC<Props> = ({ minifig, parts }) => {
  return (
    <Wrapper>
      <Title>Your minifig</Title>
      {minifig}
      <Paragraph>{`There are ${parts.length} parts in this minifig:`}</Paragraph>
      <div>{parts}</div>
    </Wrapper>
  )
}
