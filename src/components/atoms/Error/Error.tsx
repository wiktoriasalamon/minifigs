import { StyledParagraph } from './Error.styles'

interface ErrorProps {
  message: string
}

export const Error: React.FC<ErrorProps> = ({ message }) => (
  <StyledParagraph>{message}</StyledParagraph>
)
