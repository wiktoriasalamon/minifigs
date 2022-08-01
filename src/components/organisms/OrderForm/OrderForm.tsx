import { IOrderFormData } from '../../pages/OrderPage/types'
import { FormikProps } from 'formik'
import { Input } from '../../molecules/Input'
import { HorizontalFormFields, FormStyled, Wrapper } from './OrderForm.styles'
import { Title } from '../../atoms/Title'
import { Select } from '../../molecules/Select'
import { SingleValue } from 'react-select'
import { Option } from '../../molecules/Select/types'

interface OrderFormProps {
  data: IOrderFormData
  formik: FormikProps<IOrderFormData>
  maxDate: string
  getError: (fieldName: string) => string | undefined
  handleChange: (event: React.ChangeEvent<any>) => void
  handleSelect: (fieldName: string) => (newValue: SingleValue<Option>) => void
}

export const OrderForm: React.FC<OrderFormProps> = ({
  formik,
  maxDate,
  getError,
  handleChange,
  handleSelect,
}) => {
  const { handleSubmit, values, handleBlur } = formik

  return (
    <Wrapper>
      <FormStyled onSubmit={handleSubmit}>
        <Title light>Shipping details</Title>
        <HorizontalFormFields>
          <Input
            id='name'
            onChange={handleChange}
            value={values.name}
            label='Name'
            placeholder='Name'
            errorMessage={getError('name')}
            onBlur={handleBlur}
          />
          <Input
            id='surname'
            onChange={handleChange}
            value={values.surname}
            label='Surname'
            placeholder='Surname'
            errorMessage={getError('surname')}
            onBlur={handleBlur}
          />
        </HorizontalFormFields>
        <Input
          id='phoneNumber'
          onChange={handleChange}
          value={values.phoneNumber}
          label='Phone number'
          placeholder='Phone Number'
          errorMessage={getError('phoneNumber')}
          onBlur={handleBlur}
        />
        <Input
          id='email'
          onChange={handleChange}
          value={values.email}
          label='Email Address'
          placeholder='Email address'
          errorMessage={getError('email')}
          onBlur={handleBlur}
        />
        <Input
          id='dateOfBirth'
          onChange={handleChange}
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
          onChange={handleChange}
          value={values.address}
          label='Address'
          placeholder='Address'
          errorMessage={getError('address')}
          onBlur={handleBlur}
        />
        <Input
          id='city'
          onChange={handleChange}
          value={values.city}
          label='City'
          placeholder='City'
          errorMessage={getError('city')}
          onBlur={handleBlur}
        />
        <HorizontalFormFields>
          <Select
            options={[{ value: '1', label: 'one' }]}
            id='state'
            label='State'
            errorMessage={getError('state')}
            onBlur={handleBlur}
            onChange={handleSelect('state')}
          />
          <Input
            id='zipCode'
            onChange={handleChange}
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
