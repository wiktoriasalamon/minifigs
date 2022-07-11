import styled from 'styled-components'
import { purple } from 'styles/colors'

interface Props {
  children: string
}

const StyledParagraph = styled.p`
  margin: 0;
  color: ${purple};
`

export const Paragraph: React.FC<Props> = ({ children }) => <StyledParagraph>{children}</StyledParagraph>
