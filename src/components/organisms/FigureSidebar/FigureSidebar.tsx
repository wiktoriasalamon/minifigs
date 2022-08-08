import { Button } from 'components/atoms/Button'
import { Paragraph } from 'components/atoms/Paragraph'
import { Separator } from 'components/atoms/Separator'
import { Title } from 'components/atoms/Title'
import { ActionsWrapper, PartsWrapper, Wrapper } from './FigureSidebar.styles'

interface Props {
  minifig: JSX.Element | null
  parts: JSX.Element[]
  onSubmit: () => void
  onDrawFigure: () => void
  isSubmitDisabled: boolean
}

export const FigureSidebar: React.FC<Props> = ({
  minifig,
  parts,
  onDrawFigure,
  onSubmit,
  isSubmitDisabled,
}) => {
  return (
    <Wrapper>
      <Title>Your minifig</Title>
      {minifig}
      <Paragraph>{`There are ${parts.length} parts in this minifig:`}</Paragraph>
      <PartsWrapper>{parts}</PartsWrapper>
      <ActionsWrapper>
        <Button label='Draw again' onClick={onDrawFigure} />
        <Separator>or</Separator>
        <Button label='Place an order' onClick={onSubmit} primary disabled={isSubmitDisabled} />
      </ActionsWrapper>
    </Wrapper>
  )
}
