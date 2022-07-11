import styled from 'styled-components'
import { red } from 'styles/colors'

interface Props {
  message: string
}

const StyledParagraph = styled.p`
  color: ${red};
  margin: 0;
  font-size: 14px;
`

 export const Error: React.FC<Props> = ({ message }) => <StyledParagraph>{message}</StyledParagraph>
