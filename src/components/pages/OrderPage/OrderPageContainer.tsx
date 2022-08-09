import { useEffect, useState } from 'react'
import { rebrickableApi, rebrickableUrls, statesApi, statesUrls } from 'api'
import { getRandomOfArray } from 'utils'
import { OrderPage } from './OrderPage'
import { getOrderSchema } from './orderSchema'
import { IMinifig, IMinifigPart, IOrderFormData, IState } from './types'

export const OrderPageContainer: React.FC = () => {
  const [allMinifigs, setAllMinifigs] = useState<IMinifig[]>([])
  const [minifig, setCurrentMinifig] = useState<null | IMinifig>(null)
  const [minifigParts, setMinifigParts] = useState<IMinifigPart[]>([])
  const [orderFormData, setOrderFormData] = useState<IOrderFormData>({})
  const [states, setStates] = useState<IState[]>([])
  const [isFormValid, setFormValid] = useState(false)

  const schema = getOrderSchema()

  useEffect(() => {
    const fetchMinifigs = async () => {
      const response = await rebrickableApi.get<{ results: IMinifig[] }>(
        rebrickableUrls.getAllMinifigs(),
        {
          params: {
            search: 'Harry Potter',
          },
        },
      )

      setAllMinifigs(response.data.results)
    }

    const fetchStates = async () => {
      const response = await statesApi.get<IState[]>(statesUrls.basic)

      setStates(response.data)
    }

    fetchMinifigs()
    fetchStates()
  }, [])

  useEffect(() => {
    drawMinifig()
  }, [allMinifigs])

  useEffect(() => {
    const validate = async () => {
      try {
        const isValid = await schema.isValid(orderFormData)
        setFormValid(isValid)
      } catch (e) {
        setFormValid(false)
      }
    }

    validate()
  }, [orderFormData])

  const drawMinifig = async () => {
    if (allMinifigs.length === 0) return

    const randomMinifig = getRandomOfArray<IMinifig>(allMinifigs)
    setCurrentMinifig(randomMinifig)

    const response = await rebrickableApi.get<{ results: IMinifigPart[] }>(
      rebrickableUrls.getPartsOfMinifig(randomMinifig.set_num),
    )
    setMinifigParts(response.data.results)
  }

  const setData = (field: string, value: any) => {
    setOrderFormData((prevValue) => ({
      ...prevValue,
      [field]: value,
    }))
  }

  const handleSubmit = () => {
    alert(JSON.stringify(orderFormData))
  }

  return (
    <OrderPage
      minifig={minifig}
      parts={minifigParts}
      orderFormData={orderFormData}
      onSubmit={handleSubmit}
      onDrawFigure={drawMinifig}
      setData={setData}
      isSubmitDisabled={!isFormValid}
    />
  )
}
