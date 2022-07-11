import { rebrickableApi } from 'api'
import { rebrickableUrls } from 'api/rebrickable'
import { useEffect, useState } from 'react'
import { getRandomOfArray } from 'utils'
import { OrderPage } from './OrderPage'
import { IMinifig } from './types'

export const OrderPageContainer: React.FC = () => {
  const [currentMinifig, setCurrentMinifig] = useState<null | IMinifig>(null)
  useEffect(() => {
    const fetchSets = async () => {
      const response = await rebrickableApi.get<{results: IMinifig[]}>(rebrickableUrls.getAllMinifigs, {
        params: {
          search: 'Harry Potter',
        }
      })

      setCurrentMinifig(getRandomOfArray<IMinifig>(response.data.results))
    }

    fetchSets()   
  }, [])

  return <OrderPage minifig={currentMinifig}/>
}
