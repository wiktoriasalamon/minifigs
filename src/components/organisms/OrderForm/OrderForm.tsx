import { IOrderFormData } from '../../pages/OrderPage/types';
import { FormikProps } from 'formik';
import { Input } from '../../molecules/Input';
import { HorizontalFormFields, FormStyled, Wrapper } from './OrderForm.styles';
import { Title } from '../../atoms/Title';
import { Select } from '../../molecules/Select';

interface OrderFormProps {
  data: IOrderFormData;
  formik: FormikProps<IOrderFormData>;
  maxDate: string;
}

export const OrderForm: React.FC<OrderFormProps> = ({ formik, maxDate }) => {
  const { handleSubmit, handleChange, values } = formik;

  return (
    <Wrapper>
      <FormStyled onSubmit={handleSubmit}>
        <Title light>Shipping details</Title>
        <HorizontalFormFields>
          <Input
            id="name"
            onChange={handleChange}
            value={values.name}
            label="Name"
            placeholder="Name"
          />
          <Input
            id="surname"
            onChange={handleChange}
            value={values.surname}
            label="Surname"
            placeholder="Surname"
          />
        </HorizontalFormFields>
        <Input
          id="phoneNumber"
          onChange={handleChange}
          value={values.phoneNumber}
          label="Phone number"
          placeholder="Phone Number"
        />
        <Input
          id="email"
          onChange={handleChange}
          value={values.email}
          label="Email Address"
          placeholder="Email address"
        />
        <Input
          id="dateOfBirth"
          onChange={handleChange}
          value={values.dateOfBirth}
          label="Date of birth"
          placeholder="Date of birth"
          type="date"
          max={maxDate}
        />
        <Input
          id="address"
          onChange={handleChange}
          value={values.address}
          label="Address"
          placeholder="Address"
        />
        <Input
          id="city"
          onChange={handleChange}
          value={values.city}
          label="City"
          placeholder="City"
        />
        <HorizontalFormFields>
          <Select options={[]} id="state" label="State" />
          <Input
            id="zipCode"
            onChange={handleChange}
            value={values.zipCode}
            label="Zip Code"
            placeholder="Zip Code"
          />
        </HorizontalFormFields>
      </FormStyled>
    </Wrapper>
  );
};
