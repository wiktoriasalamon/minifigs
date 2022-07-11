import { Wrapper } from './OrderPage.styles'
import { IMinifig } from './types'

interface Props {
  minifig: IMinifig | null;
}

export const OrderPage: React.FC<Props> = ({
  minifig,
}) => {
  return <Wrapper>
    {minifig && <img src={minifig.set_img_url} />}
  </Wrapper>
}
