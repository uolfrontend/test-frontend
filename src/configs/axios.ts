import axios, { AxiosResponse } from 'axios'

export const api = axios.create({
  baseURL: 'https://test-frontend-uolpp.web.app/',
  headers: {
    'Content-type': 'application/json'
  }
})

api.interceptors.response.use((response: AxiosResponse) => response)
