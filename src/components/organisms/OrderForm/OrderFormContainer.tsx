import { useFormik } from 'formik'
import get from 'lodash/get'
import { useEffect } from 'react'
import { SingleValue } from 'react-select'
import { Option } from 'components/molecules/Select/types'
import { getOrderSchema } from 'components/pages/OrderPage/orderSchema'
import { IOrderFormData } from 'components/pages/OrderPage/types'
import { getYesterdayDate } from 'utils'
import { OrderForm } from './OrderForm'

interface OrderFormContainerProps {
  data: IOrderFormData
  setData: (field: string, value: any) => void
}

export const OrderFormContainer: React.FC<OrderFormContainerProps> = ({ data, setData }) => {
  const yesterday = getYesterdayDate()
  const maxDate = yesterday.toISOString().split('T')[0]

  const formik = useFormik<IOrderFormData>({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
    validationSchema: getOrderSchema(),
  })

  const {
    handleChange: handleFormikChange,
    errors,
    touched,
    setFieldValue,
    resetForm,
    setValues,
  } = formik

  useEffect(() => {
    if (Object.keys(data).length === 0) {
      resetForm({ values: {} })
    }
  }, [data])

  const handleChange = (event: React.ChangeEvent<any>): void => {
    handleFormikChange(event)

    const { value, id } = event.target
    setData(id, value)
  }

  const handleSelect =
    (fieldName: string) =>
    (newValue: SingleValue<Option>): void => {
      setFieldValue(fieldName, newValue?.value)
      setData(fieldName, newValue?.value)
    }

  const getError = (fieldName: string): string | undefined => {
    return get(errors, fieldName) && get(touched, fieldName) ? get(errors, fieldName) : undefined
  }

  return (
    <OrderForm
      data={data}
      formik={formik}
      maxDate={maxDate}
      getError={getError}
      handleChange={handleChange}
      handleSelect={handleSelect}
    />
  )
}
