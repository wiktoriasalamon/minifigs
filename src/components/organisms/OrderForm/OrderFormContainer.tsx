import {IOrderFormData} from 'components/pages/OrderPage/types';
import {OrderForm} from './OrderForm'
import {useFormik} from 'formik';

interface Props {
    data: IOrderFormData
}

export const OrderFormContainer: React.FC<Props> = ({data}) => {
     const formik = useFormik<IOrderFormData>({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <OrderForm data={data} formik={formik}/>
    )
}
