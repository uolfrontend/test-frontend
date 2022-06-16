import {ServiceBase} from '../interfaces/IService';
import { ICustomer } from '../interfaces/ICustomer';
import { ApiResponse } from '../interfaces/IApi';
import { api } from '../configs/axios';

class CustomerService implements ServiceBase<ICustomer>{
    // @ts-ignore
    get(): Promise<ApiResponse<Object<ICustomer[]>>> {
        return api.get('/customers.json')
    }

    getById(id: number): Promise<ApiResponse<ICustomer>> {
        //api.defaults.headers.common['Authorization'] = `CompanyId ${id}`
        return api.get(`/customers.json`)
    }

    update(customer: ICustomer): Promise<ApiResponse<ICustomer>> {
        return api.put(`/`, customer)
    }
}

export default new CustomerService();
