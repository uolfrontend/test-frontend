import { AxiosRequestHeaders } from "axios";

export interface ApiResponse<T>{
  data: T,
  headers: AxiosRequestHeaders,
  status: number
}

export interface ErrorApi {
  error: boolean
  message: string
}
