import { IOrderFormData } from '../../pages/OrderPage/types'
import { FormikProps } from 'formik'
import { Input } from '../../molecules/Input'
import { HorizontalFormFields, FormStyled, Wrapper } from './OrderForm.styles'
import { Title } from '../../atoms/Title'

interface OrderFormProps {
  data: IOrderFormData
  formik: FormikProps<IOrderFormData>
}

export const OrderForm: React.FC<OrderFormProps> = ({ formik }) => {
  const { handleSubmit, handleChange, values } = formik

  return (
    <Wrapper>
      <FormStyled onSubmit={handleSubmit}>
        <Title light>Shipping details</Title>
        <HorizontalFormFields>
          <Input
            id='name'
            onChange={handleChange}
            value={values.name ?? ''}
            label='Name'
            placeholder='Name'
          />
          <Input
            id='surname'
            onChange={handleChange}
            value={values.surname ?? ''}
            label='Surname'
            placeholder='Surname'
          />
        </HorizontalFormFields>
        <Input
          id='phoneNumber'
          onChange={handleChange}
          value={values.phoneNumber ?? ''}
          label='Phone number'
          placeholder='Phone Number'
        />
        <Input
          id='email'
          onChange={handleChange}
          value={values.email ?? ''}
          label='Email Address'
          placeholder='Email address'
        />
        {/* date picker */}
        <Input
          id='address'
          onChange={handleChange}
          value={values.address ?? ''}
          label='Address'
          placeholder='Address'
        />
        <Input
          id='city'
          onChange={handleChange}
          value={values.city ?? ''}
          label='City'
          placeholder='City'
        />
        <HorizontalFormFields>
          {/* state select */}
          <Input
            id='zipCode'
            onChange={handleChange}
            value={values.zipCode?.toString() ?? ''}
            label='Zip Code'
            placeholder='Zip Code'
          />
        </HorizontalFormFields>
      </FormStyled>
    </Wrapper>
  )
}
