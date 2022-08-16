import { useEffect, useState } from 'react'
import { translate } from 'react-i18nify'
import { toast } from 'react-toastify'
import { ordersApi, rebrickableApi, rebrickableUrls, statesApi, statesUrls } from 'api'
import { IOption } from 'components/common/Select/types'
import { getRandomOfArray } from 'utils'
import { IMinifig, IMinifigPart, IOrderFormData, IState } from './OrderPage.interface'
import { getOrderSchema } from './orderSchema'

export const useOrderPage = () => {
  const [allMinifigs, setAllMinifigs] = useState<IMinifig[]>([])
  const [minifig, setCurrentMinifig] = useState<null | IMinifig>(null)
  const [minifigParts, setMinifigParts] = useState<IMinifigPart[]>([])
  const [orderFormData, setOrderFormData] = useState<IOrderFormData>({})
  const [states, setStates] = useState<IOption[]>([])
  const [isFormValid, setFormValid] = useState(false)

  const schema = getOrderSchema()

  const fetchMinifigs = async () => {
    try {
      const response = await rebrickableApi.get<{ results: IMinifig[] }>(
        rebrickableUrls.getAllMinifigs(),
        {
          params: {
            search: 'Harry Potter',
          },
        },
      )

      setAllMinifigs(response.data.results)
    } catch (error) {
      // TODO: handle error
    }
  }

  const fetchStates = async () => {
    try {
      const response = await statesApi.get<IState[]>(statesUrls.basic)

      setStates(
        response.data.map(({ name, postal }) => ({
          value: postal,
          label: name,
        })),
      )
    } catch (error) {
      // TODO: handle error
    }
  }

  useEffect(() => {
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

  const clearForm = async () => {
    setOrderFormData({})
    await drawMinifig()
  }

  const handleSubmit = async () => {
    try {
      await ordersApi.post('/', {
        ...orderFormData,
        minifig: minifig?.set_num,
      })

      await clearForm()
    } catch (e) {
      toast(translate('general.errors.general'))
    }
  }

  return {
    minifigParts,
    minifig,
    isFormValid,
    handleSubmit,
    setData,
    states,
    orderFormData,
    drawMinifig,
  }
}
