import { Figure } from 'components/molecules/Figure'
import { FigurePart } from 'components/molecules/FigurePart'
import { FigureSidebar } from 'components/organisms/FigureSidebar'
import { OrderFormContainer } from 'components/organisms/OrderForm'
import { Wrapper } from './OrderPage.styles'
import { IMinifig, IMinifigPart, IOrderFormData } from './types'

interface OrderPageProps {
  minifig: IMinifig | null
  parts: IMinifigPart[]
  orderFormData: IOrderFormData
  onSubmit: () => void
  onDrawFigure: () => void
  setData: (filed: string, value: any) => void
  isSubmitDisabled: boolean
}

export const OrderPage: React.FC<OrderPageProps> = ({
  minifig,
  parts,
  orderFormData,
  onSubmit,
  onDrawFigure,
  setData,
  isSubmitDisabled,
}) => {
  return (
    <Wrapper>
      <OrderFormContainer data={orderFormData} setData={setData} />
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
        onSubmit={onSubmit}
        onDrawFigure={onDrawFigure}
        isSubmitDisabled={isSubmitDisabled}
      />
    </Wrapper>
  )
}
