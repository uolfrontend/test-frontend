import { ApiResponse } from "./IApi"

export interface ServiceBase<T>{
  get(model?: any): Promise<ApiResponse<T[]>>
  getById(id: number): Promise<ApiResponse<T>>
  update(model: T): Promise<ApiResponse<T>>
}
