import { Wrapper } from './OrderPage.styles'
import { IMinifig, IMinifigPart, IOrderFormData } from './types'
import { OrderFormContainer } from 'components/organisms/OrderForm'
import { FigureSidebar } from '../../organisms/FigureSidebar'
import { FigurePart } from '../../molecules/FigurePart'
import { Figure } from '../../molecules/Figure'

interface OrderPageProps {
  minifig: IMinifig | null
  parts: IMinifigPart[]
  orderFormData: IOrderFormData
  loading: boolean
}

// TODO: replace the Loading text with a spinnner
export const OrderPage: React.FC<OrderPageProps> = ({ minifig, parts, orderFormData, loading }) => {
  return (
    <Wrapper>
      <OrderFormContainer data={orderFormData} />
      <FigureSidebar
        minifig={
          loading ? (
            <div>Loading</div>
          ) : (
            minifig && <Figure name={minifig.name} imageUrl={minifig.set_img_url} />
          )
        }
        parts={
          loading ? (
            <div key='Loading'>Loading</div>
          ) : (
            parts.map(({ part }) => (
              <FigurePart
                imageUrl={part.part_img_url}
                name={part.name}
                id={part.part_num}
                key={part.part_num}
              />
            ))
          )
        }
      />
    </Wrapper>
  )
}
