import { StyledLabel } from './Label.styles'

interface LabelProps {
  children: string
  light?: boolean
  htmlFor?: string
}

export const Label: React.FC<LabelProps> = ({ children, light, htmlFor }) => (
  <StyledLabel light={light} htmlFor={htmlFor}>
    {children}
  </StyledLabel>
)
