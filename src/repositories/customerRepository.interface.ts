import { Customer } from "../models/customer.model";
import { AddCustomerDTO } from "../usecases/dtos/addCustomerDTO.interface";

export interface ICustomerRepository {
  seed(): void
  add(customer: AddCustomerDTO): Promise<Customer>;
  find(): Promise<Customer[]>;
  update(id: string, data: AddCustomerDTO): Promise<Customer>;
  delete(id: string): Promise<void>;
}