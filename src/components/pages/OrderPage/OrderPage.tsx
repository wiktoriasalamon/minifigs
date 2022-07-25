import { Wrapper } from './OrderPage.styles'
import { IMinifig, IMinifigPart, IOrderFormData } from './types'
import { OrderFormContainer } from 'components/organisms/OrderForm'

interface OrderPageProps {
  minifig: IMinifig | null
  parts: IMinifigPart[]
  orderFormData: IOrderFormData
}

export const OrderPage: React.FC<OrderPageProps> = ({ minifig, parts, orderFormData }) => {
  return (
    <Wrapper>
      <OrderFormContainer data={orderFormData} />
      <div>
        {minifig && <img alt='Lego figure' src={minifig.set_img_url} />}
        {parts.map((part) => (
          <img alt='Lego part' src={part.part.part_img_url} key={part.part.part_num} />
        ))}
      </div>
    </Wrapper>
  )
}
