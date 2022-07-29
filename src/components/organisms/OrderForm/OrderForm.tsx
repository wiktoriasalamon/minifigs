import { IOrderFormData } from '../../pages/OrderPage/types'
import { FormikProps } from 'formik'
import { Input } from '../../molecules/Input'
import { HorizontalFormFields, FormStyled, Wrapper } from './OrderForm.styles'
import { Title } from '../../atoms/Title'
import { Select } from '../../molecules/Select'

interface OrderFormProps {
  data: IOrderFormData
  formik: FormikProps<IOrderFormData>
  maxDate: string
  onChange: (event: React.ChangeEvent<any>) => void
  getError: (fieldName: string) => string | undefined
}

export const OrderForm: React.FC<OrderFormProps> = ({ formik, maxDate, onChange, getError }) => {
  const { handleSubmit, values, handleBlur } = formik

  return (
    <Wrapper>
      <FormStyled onSubmit={handleSubmit}>
        <Title light>Shipping details</Title>
        <HorizontalFormFields>
          <Input
            id='name'
            onChange={onChange}
            value={values.name}
            label='Name'
            placeholder='Name'
            errorMessage={getError('name')}
            onBlur={handleBlur}
          />
          <Input
            id='surname'
            onChange={onChange}
            value={values.surname}
            label='Surname'
            placeholder='Surname'
            errorMessage={getError('surname')}
            onBlur={handleBlur}
          />
        </HorizontalFormFields>
        <Input
          id='phoneNumber'
          onChange={onChange}
          value={values.phoneNumber}
          label='Phone number'
          placeholder='Phone Number'
          errorMessage={getError('phoneNumber')}
          onBlur={handleBlur}
        />
        <Input
          id='email'
          onChange={onChange}
          value={values.email}
          label='Email Address'
          placeholder='Email address'
          errorMessage={getError('email')}
          onBlur={handleBlur}
        />
        <Input
          id='dateOfBirth'
          onChange={onChange}
          value={values.dateOfBirth}
          label='Date of birth'
          placeholder='Date of birth'
          type='date'
          max={maxDate}
          errorMessage={getError('dateOfBirth')}
          onBlur={handleBlur}
        />
        <Input
          id='address'
          onChange={onChange}
          value={values.address}
          label='Address'
          placeholder='Address'
          errorMessage={getError('address')}
          onBlur={handleBlur}
        />
        <Input
          id='city'
          onChange={onChange}
          value={values.city}
          label='City'
          placeholder='City'
          errorMessage={getError('city')}
          onBlur={handleBlur}
        />
        <HorizontalFormFields>
          <Select
            options={[]}
            id='state'
            label='State'
            errorMessage={getError('state')}
            onBlur={handleBlur}
          />
          <Input
            id='zipCode'
            onChange={onChange}
            value={values.zipCode}
            label='Zip Code'
            placeholder='Zip Code'
            errorMessage={getError('zipCode')}
            onBlur={handleBlur}
          />
        </HorizontalFormFields>
      </FormStyled>
    </Wrapper>
  )
}
