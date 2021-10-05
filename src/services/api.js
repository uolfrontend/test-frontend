import axios from 'axios';

const api = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://test-frontend-uolpp.web.app/customers.json`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  },
});

export default api;
