import { rebrickableApi, rebrickableUrls } from 'api';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { getRandomOfArray } from 'utils';
import { OrderPage } from './OrderPage';
import { IMinifig, IMinifigPart, IOrderFormData } from './types';

export const OrderPageContainer: React.FC = () => {
  const [allMinifigs, setAllMinifigs] = useState<IMinifig[]>([]);
  const [minifig, setCurrentMinifig] = useState<null | IMinifig>(null);
  const [minifigParts, setMinifigParts] = useState<IMinifigPart[]>([]);
  const [orderFormData, setOrderFormData] = useState<IOrderFormData>({});

  const schema = yup.object().shape({
    name: yup.string().min(1).max(255),
    surname: yup.string().min(1).max(255),
    phoneNumber: yup.string(),
    email: yup.string().email(),
    dateOfBirth: yup.date().max(new Date().setDate(new Date().getDate() - 1)), // only dates in the past
    address: yup.string().min(1).max(255),
    city: yup.string().min(1).max(255),
    state: yup.string(),
    zipCode: yup.string().matches(/^[0-9]{5}$|^[0-9]{5}-[0-9]{5}$/gm),
  });

  useEffect(() => {
    const fetchMinifigs = async () => {
      const response = await rebrickableApi.get<{ results: IMinifig[] }>(
        rebrickableUrls.getAllMinifigs(),
        {
          params: {
            search: 'Harry Potter',
          },
        },
      );

      setAllMinifigs(response.data.results);
    };

    fetchMinifigs();
  }, []);

  useEffect(() => {
    drawMinifig();
  }, [allMinifigs]);

  const drawMinifig = async () => {
    if (allMinifigs.length === 0) return;

    const randomMinifig = getRandomOfArray<IMinifig>(allMinifigs);
    setCurrentMinifig(randomMinifig);

    const response = await rebrickableApi.get<{ results: IMinifigPart[] }>(
      rebrickableUrls.getPartsOfMinifig(randomMinifig.set_num),
    );
    setMinifigParts(response.data.results);
  };

  return (
    <OrderPage
      minifig={minifig}
      parts={minifigParts}
      orderFormData={orderFormData}
    />
  );
};
