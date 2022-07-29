import { Wrapper, PartsWrapper, ActionsWrapper } from './FigureSidebar.styles'
import { Paragraph } from '../../atoms/Paragraph'
import { Title } from '../../atoms/Title'
import { Button } from '../../atoms/Button'
import { Separator } from '../../atoms/Separator'

interface Props {
  minifig: JSX.Element | null
  parts: JSX.Element[]
  onSubmit: () => void
  onDrawFigure: () => void
}

export const FigureSidebar: React.FC<Props> = ({ minifig, parts, onDrawFigure, onSubmit }) => {
  return (
    <Wrapper>
      <Title>Your minifig</Title>
      {minifig}
      <Paragraph>{`There are ${parts.length} parts in this minifig:`}</Paragraph>
      <PartsWrapper>{parts}</PartsWrapper>
      <ActionsWrapper>
        <Button label='Draw again' onClick={onDrawFigure} />
        <Separator>or</Separator>
        <Button label='Place an order' onClick={onSubmit} primary />
      </ActionsWrapper>
    </Wrapper>
  )
}
