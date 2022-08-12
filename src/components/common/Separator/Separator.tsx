import { Wrapper } from './Separator.styles'
interface StrikeTextProps {
  children: string
}

export const Separator: React.FC<StrikeTextProps> = ({ children }) => (
  <Wrapper className='strike'>{children}</Wrapper>
)
