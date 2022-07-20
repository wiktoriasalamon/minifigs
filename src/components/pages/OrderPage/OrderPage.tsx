import { Wrapper } from './OrderPage.styles'
import { IMinifig, IMinifigPart } from './types'
import { FigureSidebar } from '../../organisms/FigureSidebar'
import { FigurePart } from '../../molecules/FigurePart'
import { Figure } from '../../molecules/Figure'

interface Props {
  minifig: IMinifig | null
  parts: IMinifigPart[]
}

export const OrderPage: React.FC<Props> = ({ minifig, parts }) => {
  return (
    <Wrapper>
      <FigureSidebar
        minifig={minifig && <Figure name={minifig.name} imageUrl={minifig.set_img_url} />}
        parts={parts.map(({ part }) => (
          <FigurePart
            imageUrl={part.part_img_url}
            name={part.name}
            id={part.part_num}
            key={part.part_num}
          />
        ))}
      />
    </Wrapper>
  )
}
