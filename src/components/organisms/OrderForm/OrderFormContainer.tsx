import { IOrderFormData } from 'components/pages/OrderPage/types'
import { OrderForm } from './OrderForm'
import { useFormik } from 'formik'
import { getYesterdayDate } from 'utils'
import * as yup from 'yup'
import get from 'lodash/get'

interface OrderFormContainerProps {
  data: IOrderFormData
  setData: (field: string, value: any) => void
}

export const OrderFormContainer: React.FC<OrderFormContainerProps> = ({ data, setData }) => {
  const yesterday = getYesterdayDate()
  const maxDate = yesterday.toISOString().split('T')[0]

  const schema = yup.object().shape({
    name: yup.string().min(1).max(255).required(),
    surname: yup.string().min(1).max(255).required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
    dateOfBirth: yup.date().max(yesterday).required(), // only dates in the past
    address: yup.string().min(1).max(255).required(),
    city: yup.string().min(1).max(255).required(),
    state: yup.string().required(),
    zipCode: yup
      .string()
      .matches(/^[0-9]{5}$|^[0-9]{5}-[0-9]{5}$/gm)
      .required(),
  })

  const formik = useFormik<IOrderFormData>({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
    validationSchema: schema,
  })

  const { handleChange: handleFormikChange, errors, touched } = formik

  const handleChange = (event: React.ChangeEvent<any>) => {
    handleFormikChange(event)

    const { value, id } = event.target
    setData(id, value)
  }

  const getError = (fieldName: string): string | undefined => {
    return get(errors, fieldName) && get(touched, fieldName) ? get(errors, fieldName) : undefined
  }

  return (
    <OrderForm
      data={data}
      formik={formik}
      maxDate={maxDate}
      onChange={handleChange}
      getError={getError}
    />
  )
}
