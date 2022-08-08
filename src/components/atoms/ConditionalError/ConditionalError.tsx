import { capitalizeFistLetter } from 'utils'
import { StyledParagraph } from './ConditionalError.styles'

interface ConditionalErrorProps {
  message?: string
}

export const ConditionalError: React.FC<ConditionalErrorProps> = ({ message }) =>
  message && message.length > 0 ? (
    <StyledParagraph>{capitalizeFistLetter(message)}</StyledParagraph>
  ) : null
