import axios from 'axios';

const api = axios.create({
  baseURL: 'https://test-frontend-uolpp.web.app/customers.json',
});

export default api;
