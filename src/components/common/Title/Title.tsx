import { StyledTitle } from './Title.styles'

interface TitleProps {
  children: string
  light?: boolean
}

export const Title: React.FC<TitleProps> = ({ children, light }) => (
  <StyledTitle light={light}>{children}</StyledTitle>
)
