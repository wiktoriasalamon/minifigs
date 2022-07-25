import styled from 'styled-components'

interface ParagraphProps {
  children: string
}

const StyledParagraph = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.purple};
`

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => (
  <StyledParagraph>{children}</StyledParagraph>
)
