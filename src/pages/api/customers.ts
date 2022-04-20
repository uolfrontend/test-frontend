import {customersMock} from 'src/constants/customersMock';
import type {NextApiRequest, NextApiResponse} from 'next';

export default function customersHandler(
  req: NextApiRequest,
  res: NextApiResponse<TCustomer[]>
) {
  return res.json(customersMock.customers);
}
