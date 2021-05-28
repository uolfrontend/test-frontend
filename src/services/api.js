import axios from 'axios';

const newLocal = 'http://localhost:3001';

const api = axios.create({baseURL: newLocal});

export default api;