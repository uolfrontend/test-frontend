import api from './api';

export const getAllClients = async () => {
  const {data} = await api.get('/customers');
  return data;
};
