import { FormikProps } from 'formik'
import get from 'lodash/get'
import { SingleValue } from 'react-select'
import { Title } from 'components/atoms/Title'
import { Input } from 'components/molecules/Input'
import { Select } from 'components/molecules/Select'
import { IOption } from 'components/molecules/Select/types'
import { IOrderFormData } from 'components/pages/OrderPage/types'
import { translate } from 'utils'
import { FormStyled, HorizontalFormFields, Wrapper } from './OrderForm.styles'

interface OrderFormProps {
  data: IOrderFormData
  formik: FormikProps<IOrderFormData>
  maxDate: string
  getError: (fieldName: string) => string | undefined
  handleChange: (event: React.ChangeEvent<any>) => void
  handleSelect: (fieldName: string) => (newValue: SingleValue<IOption>) => void
  states: IOption[]
}

export const OrderForm: React.FC<OrderFormProps> = ({
  formik,
  maxDate,
  getError,
  handleChange,
  handleSelect,
  states,
}) => {
  const { handleSubmit, values, handleBlur } = formik
  const t = translate('orderPage.orderForm')

  const mapToInput = ({
    fieldName,
    type,
    max,
  }: {
    fieldName: string
    type?: string
    max?: any
  }) => (
    <Input
      label={t(fieldName)}
      onChange={handleChange}
      id={fieldName}
      value={get(values, fieldName, '')}
      onBlur={handleBlur}
      errorMessage={getError(fieldName)}
      placeholder={t(fieldName)}
      key={fieldName}
      type={type}
      max={max}
    />
  )

  return (
    <Wrapper>
      <FormStyled onSubmit={handleSubmit}>
        <Title light>Shipping details</Title>
        <HorizontalFormFields>
          {[{ fieldName: 'name' }, { fieldName: 'surname' }].map(mapToInput)}
        </HorizontalFormFields>
        {[
          { fieldName: 'phoneNumber' },
          { fieldName: 'email' },
          { fieldName: 'dateOfBirth', type: 'date', max: maxDate },
          { fieldName: 'address' },
          { fieldName: 'city' },
        ].map(mapToInput)}
        <HorizontalFormFields>
          <Select
            options={states}
            id='state'
            label={t('state')}
            errorMessage={getError('state')}
            onBlur={handleBlur}
            onChange={handleSelect('state')}
          />
          {mapToInput({ fieldName: 'zipCode' })}
        </HorizontalFormFields>
      </FormStyled>
    </Wrapper>
  )
}
