import * as yup from 'yup'
import { getYesterdayDate, translate } from 'utils'

export const getOrderSchema = () => {
  const t = translate('orderPage.orderForm.errorMessages')
  const getRequiredMessage = (fieldName: string): string =>
    t('required', { fieldName: translate('orderPage.orderForm')(fieldName).toLowerCase() })

  return yup.object().shape({
    name: yup.string().min(1).max(255).required(getRequiredMessage('name')),
    surname: yup.string().min(1).max(255).required(getRequiredMessage('surname')),
    phoneNumber: yup
      .string()
      .matches(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/gm, t('validPhoneNumber'))
      .required(getRequiredMessage('phoneNumber')),
    email: yup.string().email(t('validEmail')).required(getRequiredMessage('email')),
    dateOfBirth: yup.date().max(getYesterdayDate()).required(getRequiredMessage('dateOfBirth')), // only dates in the past
    address: yup.string().min(1).max(255).required(getRequiredMessage('address')),
    city: yup.string().min(1).max(255).required(getRequiredMessage('city')),
    state: yup.string().required(getRequiredMessage('state')),
    zipCode: yup
      .string()
      .matches(/^[0-9]{5}$|^[0-9]{5}-[0-9]{4}$/gm, t('validZipCode'))
      .required(getRequiredMessage('zipCode')),
  })
}
