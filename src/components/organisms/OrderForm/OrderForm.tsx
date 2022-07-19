import {IOrderFormData} from '../../pages/OrderPage/types';
import {FormikProps} from 'formik';
import {Input} from '../../molecules/Input';

interface Props {
    data: IOrderFormData
    formik: FormikProps<IOrderFormData>
}

export const OrderForm: React.FC<Props> = ({formik}) => {
    const {handleSubmit, handleChange, values} = formik

    return (
        <form onSubmit={handleSubmit}>
            <Input
                id="email"
                onChange={handleChange}
                value={values.email ?? ''}
                label="Email Address"
            />
        </form>
    )
}