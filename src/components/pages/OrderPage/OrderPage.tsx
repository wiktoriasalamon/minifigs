import { Wrapper } from './OrderPage.styles'
import { IMinifig, IMinifigPart } from './types'
import {FigureSidebarContainer} from '../../organisms/FigureSidebar';
import {Title} from "../../atoms/Title";

interface Props {
  minifig: IMinifig | null
  parts: IMinifigPart[]
}

export const OrderPage: React.FC<Props> = ({ minifig, parts }) => {
  return (
    <Wrapper>
      <FigureSidebarContainer minifig={minifig} parts={parts}>
        <Title>Your minifig</Title>
      </FigureSidebarContainer>
    </Wrapper>
  )
}
