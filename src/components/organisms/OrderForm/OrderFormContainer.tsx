import { IOrderFormData } from 'components/pages/OrderPage/types';
import { OrderForm } from './OrderForm';
import { useFormik } from 'formik';

interface OrderFormContainerProps {
  data: IOrderFormData;
}

export const OrderFormContainer: React.FC<OrderFormContainerProps> = ({
  data,
}) => {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  const maxDate = today.toISOString().split('T')[0];

  const formik = useFormik<IOrderFormData>({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return <OrderForm data={data} formik={formik} maxDate={maxDate} />;
};
