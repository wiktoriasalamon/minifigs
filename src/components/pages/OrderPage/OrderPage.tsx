import { Wrapper } from './OrderPage.styles'
import { IMinifig, IMinifigPart } from './types'

interface Props {
  minifig: IMinifig | null;
  parts: IMinifigPart[];
}

export const OrderPage: React.FC<Props> = ({
  minifig,
  parts,
}) => {
  return <Wrapper>
    {minifig && <img src={minifig.set_img_url} />}
    {parts.map(part => <img src={part.part.part_img_url} key={part.part.part_num} />)}
  </Wrapper>
}
