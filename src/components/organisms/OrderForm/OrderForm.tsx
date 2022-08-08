import { IOrderFormData } from '../../pages/OrderPage/types'
import { FormikProps } from 'formik'
import { Input } from '../../molecules/Input'
import { HorizontalFormFields, FormStyled, Wrapper } from './OrderForm.styles'
import { Title } from '../../atoms/Title'
import { translate } from 'utils'

interface OrderFormProps {
  data: IOrderFormData
  formik: FormikProps<IOrderFormData>
}

export const OrderForm: React.FC<OrderFormProps> = ({ formik }) => {
  const { handleSubmit, handleChange, values } = formik
  const t = translate('orderPage.orderForm')

  return (
    <Wrapper>
      <FormStyled onSubmit={handleSubmit}>
        <Title light>Shipping details</Title>
        <HorizontalFormFields>
          <Input
            id='name'
            onChange={handleChange}
            value={values.name ?? ''}
            label={t('name')}
            placeholder={t('name')}
          />
          <Input
            id='surname'
            onChange={handleChange}
            value={values.surname ?? ''}
            label={t('surname')}
            placeholder={t('surname')}
          />
        </HorizontalFormFields>
        <Input
          id='phoneNumber'
          onChange={handleChange}
          value={values.phoneNumber ?? ''}
          label={t('phoneNumber')}
          placeholder={t('phoneNumber')}
        />
        <Input
          id='email'
          onChange={handleChange}
          value={values.email ?? ''}
          label={t('email')}
          placeholder={t('email')}
        />
        {/* date picker */}
        <Input
          id='address'
          onChange={handleChange}
          value={values.address ?? ''}
          label={t('address')}
          placeholder={t('address')}
        />
        <Input
          id='city'
          onChange={handleChange}
          value={values.city ?? ''}
          label={t('city')}
          placeholder={t('city')}
        />
        <HorizontalFormFields>
          {/* state select */}
          <Input
            id='zipCode'
            onChange={handleChange}
            value={values.zipCode?.toString() ?? ''}
            label={t('zipCode')}
            placeholder={t('zipCode')}
          />
        </HorizontalFormFields>
      </FormStyled>
    </Wrapper>
  )
}
