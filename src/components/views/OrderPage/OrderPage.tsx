import { IOption } from 'components/common/Select'
import { Figure } from 'components/modules/Figure'
import { FigurePart } from 'components/modules/FigurePart'
import { FigureSidebar } from 'components/modules/FigureSidebar'
import { OrderFormContainer } from 'components/modules/OrderForm'
import { IMinifig, IMinifigPart, IOrderFormData } from './OrderPage.interface'
import { Wrapper } from './OrderPage.styles'

interface OrderPageViewProps {
  minifig: IMinifig | null
  parts: IMinifigPart[]
  orderFormData: IOrderFormData
  onSubmit: () => void
  onDrawFigure: () => void
  setData: (filed: string, value: any) => void
  isSubmitDisabled: boolean
  states: IOption[]
}

export const OrderPageView: React.FC<OrderPageViewProps> = ({
  minifig,
  parts,
  orderFormData,
  onSubmit,
  onDrawFigure,
  setData,
  isSubmitDisabled,
  states,
}) => {
  return (
    <Wrapper>
      <OrderFormContainer data={orderFormData} setData={setData} states={states} />
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
