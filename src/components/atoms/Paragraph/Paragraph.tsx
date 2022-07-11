import styled from 'styled-components'

interface Props {
  children: string
}

const StyledParagraph = styled.p`
  margin: 0;
  color: ${({theme}) => theme.colors.purple};
`

export const Paragraph: React.FC<Props> = ({ children }) => (
  <StyledParagraph>{children}</StyledParagraph>
)
