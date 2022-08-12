import { Button } from 'components/common/Button'
import { Paragraph } from 'components/common/Paragraph'
import { Separator } from 'components/common/Separator'
import { Title } from 'components/common/Title'
import { translate } from 'utils'
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
