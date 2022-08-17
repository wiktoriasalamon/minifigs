import { OrderPageView } from './OrderPage'
import { useOrderPage } from './OrderPage.hooks'

export const OrderPage: React.FC = () => {
  const {
    minifig,
    minifigParts,
    setData,
    handleSubmit,
    isFormValid,
    states,
    orderFormData,
    drawMinifig,
  } = useOrderPage()

  return (
    <OrderPageView
      minifig={minifig}
      parts={minifigParts}
      orderFormData={orderFormData}
      onSubmit={handleSubmit}
      onDrawFigure={drawMinifig}
      setData={setData}
      isSubmitDisabled={!isFormValid}
      states={states}
    />
  )
}
