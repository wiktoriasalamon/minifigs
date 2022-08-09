import { Button } from 'components/atoms/Button'
import { Paragraph } from 'components/atoms/Paragraph'
import { Separator } from 'components/atoms/Separator'
import { Title } from 'components/atoms/Title'
import { translate } from 'utils'
import {
  ActionsWrapper,
  ActionsWrapper,
  PartsWrapper,
  PartsWrapper,
  Wrapper,
  Wrapper,
} from './FigureSidebar.styles'

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
  const t = translate('orderPage.sidebar')

  return (
    <Wrapper>
      <Title>{t('title')}</Title>
      {minifig}
      <Paragraph>{t('partsLabel', { count: parts.length })}</Paragraph>
      <PartsWrapper>{parts}</PartsWrapper>
      <ActionsWrapper>
        <Button label={t('drawAgain')} onClick={onDrawFigure} />
        <Separator>or</Separator>
        <Button label={t('order')} onClick={onSubmit} primary disabled={isSubmitDisabled} />
      </ActionsWrapper>
    </Wrapper>
  )
}
