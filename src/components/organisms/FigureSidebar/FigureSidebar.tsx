import { Wrapper, PartsWrapper, ActionsWrapper } from './FigureSidebar.styles'
import { Paragraph } from '../../atoms/Paragraph'
import { Title } from '../../atoms/Title'
import { Button } from '../../atoms/Button'
import { Separator } from '../../atoms/Separator'

interface Props {
  minifig: JSX.Element | null
  parts: JSX.Element | JSX.Element[]
}

export const FigureSidebar: React.FC<Props> = ({ minifig, parts }) => {
  const partsNumber = Array.isArray(parts) ? parts.length : 0

  return (
    <Wrapper>
      <Title>Your minifig</Title>
      {minifig}
      <Paragraph>{`There are ${partsNumber} parts in this minifig:`}</Paragraph>
      <PartsWrapper>{parts}</PartsWrapper>
      <ActionsWrapper>
        <Button label='Draw again' onClick={() => alert('Draw again')} />
        <Separator>or</Separator>
        <Button label='Place an order' onClick={() => alert('Place an order')} primary />
      </ActionsWrapper>
    </Wrapper>
  )
}
