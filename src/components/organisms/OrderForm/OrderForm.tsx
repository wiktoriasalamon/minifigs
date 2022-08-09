import { FormikProps } from 'formik'
import { SingleValue } from 'react-select'
import { Title } from 'components/atoms/Title'
import { Input } from 'components/molecules/Input'
import { Select } from 'components/molecules/Select'
import { Option } from 'components/molecules/Select/types'
import { IOrderFormData } from 'components/pages/OrderPage/types'
import { translate } from 'utils'
import { FormStyled, HorizontalFormFields, Wrapper } from './OrderForm.styles'

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
  const t = translate('orderPage.orderForm')

  return (
    <Wrapper>
      <FormStyled onSubmit={handleSubmit}>
        <Title light>Shipping details</Title>
        <HorizontalFormFields>
          <Input
            id='name'
            onChange={handleChange}
            value={values.name}
            errorMessage={getError('name')}
            onBlur={handleBlur}
            label={t('name')}
            placeholder={t('name')}
          />
          <Input
            id='surname'
            onChange={handleChange}
            value={values.surname}
            errorMessage={getError('surname')}
            onBlur={handleBlur}
            label={t('surname')}
            placeholder={t('surname')}
          />
        </HorizontalFormFields>
        <Input
          id='phoneNumber'
          onChange={handleChange}
          value={values.phoneNumber}
          errorMessage={getError('phoneNumber')}
          onBlur={handleBlur}
          label={t('phoneNumber')}
          placeholder={t('phoneNumber')}
        />
        <Input
          id='email'
          onChange={handleChange}
          value={values.email}
          errorMessage={getError('email')}
          onBlur={handleBlur}
          label={t('email')}
          placeholder={t('email')}
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
          errorMessage={getError('address')}
          onBlur={handleBlur}
          label={t('address')}
          placeholder={t('address')}
        />
        <Input
          id='city'
          onChange={handleChange}
          value={values.city}
          errorMessage={getError('city')}
          onBlur={handleBlur}
          label={t('city')}
          placeholder={t('city')}
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
            errorMessage={getError('zipCode')}
            onBlur={handleBlur}
            label={t('zipCode')}
            placeholder={t('zipCode')}
          />
        </HorizontalFormFields>
      </FormStyled>
    </Wrapper>
  )
}
