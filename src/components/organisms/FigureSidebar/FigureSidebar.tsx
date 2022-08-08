import { Wrapper, PartsWrapper, ActionsWrapper } from './FigureSidebar.styles'
import { Paragraph } from '../../atoms/Paragraph'
import { Title } from '../../atoms/Title'
import { Button } from '../../atoms/Button'
import { Separator } from '../../atoms/Separator'
import { translate } from 'utils'

interface Props {
  minifig: JSX.Element | null
  parts: JSX.Element[]
}

export const FigureSidebar: React.FC<Props> = ({ minifig, parts }) => {
  const t = translate('orderPage.sidebar')

  return (
    <Wrapper>
      <Title>{t('title')}</Title>
      {minifig}
      <Paragraph>{t('partsLabel', { count: parts.length })}</Paragraph>
      <PartsWrapper>{parts}</PartsWrapper>
      <ActionsWrapper>
        <Button label={t('drawAgain')} onClick={() => alert(t('drawAgain'))} />
        <Separator>or</Separator>
        <Button label={t('order')} onClick={() => alert(t('order'))} primary />
      </ActionsWrapper>
    </Wrapper>
  )
}
