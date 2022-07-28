import { StyledParagraph } from './ConditionalError.styles'
import React from 'react'
import { capitalizeFistLetter } from 'utils'

interface ErrorProps {
  message?: string
}

export const ConditionalError: React.FC<ErrorProps> = ({ message }) =>
  message && message.length > 0 ? (
    <StyledParagraph>{capitalizeFistLetter(message)}</StyledParagraph>
  ) : (
    <></>
  )
