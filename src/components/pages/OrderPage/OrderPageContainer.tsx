import { rebrickableApi, rebrickableUrls, statesApi, statesUrls } from 'api'
import { useEffect, useState } from 'react'
import { getRandomOfArray } from 'utils'
import { OrderPage } from './OrderPage'
import { IMinifig, IMinifigPart, IOrderFormData, IState } from './types'

export const OrderPageContainer: React.FC = () => {
  const [allMinifigs, setAllMinifigs] = useState<IMinifig[]>([])
  const [minifig, setCurrentMinifig] = useState<null | IMinifig>(null)
  const [minifigParts, setMinifigParts] = useState<IMinifigPart[]>([])
  const [orderFormData, setOrderFormData] = useState<IOrderFormData>({})
  const [states, setStates] = useState<IState[]>([])

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

  const drawMinifig = async () => {
    if (allMinifigs.length === 0) return

    const randomMinifig = getRandomOfArray<IMinifig>(allMinifigs)
    setCurrentMinifig(randomMinifig)

    const response = await rebrickableApi.get<{ results: IMinifigPart[] }>(
      rebrickableUrls.getPartsOfMinifig(randomMinifig.set_num),
    )
    setMinifigParts(response.data.results)
  }

  return <OrderPage minifig={minifig} parts={minifigParts} orderFormData={orderFormData} />
}
