import styled from 'styled-components'

interface Props {
  message: string
}

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.red};
  margin: 0;
  font-size: 14px;
`

export const Error: React.FC<Props> = ({ message }) => <StyledParagraph>{message}</StyledParagraph>
