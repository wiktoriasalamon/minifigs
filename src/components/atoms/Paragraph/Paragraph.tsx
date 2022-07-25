import { StyledParagraph } from './Paragraph.styles'

interface ParagraphProps {
  children: string
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => (
  <StyledParagraph>{children}</StyledParagraph>
)
