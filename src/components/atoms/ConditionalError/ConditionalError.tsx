import { capitalizeFistLetter } from 'utils'
import { StyledParagraph } from './ConditionalError.styles'

interface ErrorProps {
  message?: string
}

export const ConditionalError: React.FC<ErrorProps> = ({ message }) =>
  message && message.length > 0 ? (
    <StyledParagraph>{capitalizeFistLetter(message)}</StyledParagraph>
  ) : (
    <></>
  )
