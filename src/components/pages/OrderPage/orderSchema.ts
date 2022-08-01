import * as yup from 'yup'
import { getYesterdayDate } from 'utils'

export const getOrderSchema = () =>
  yup.object().shape({
    name: yup.string().min(1).max(255).required(),
    surname: yup.string().min(1).max(255).required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
    dateOfBirth: yup.date().max(getYesterdayDate()).required(), // only dates in the past
    address: yup.string().min(1).max(255).required(),
    city: yup.string().min(1).max(255).required(),
    state: yup.string().required(),
    zipCode: yup
      .string()
      .matches(/^[0-9]{5}$|^[0-9]{5}-[0-9]{5}$/gm)
      .required(),
  })
