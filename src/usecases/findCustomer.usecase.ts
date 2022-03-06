import { Customer } from "../models/customer.model";
import { ICustomerRepository } from "../repositories/customerRepository.interface";

export class FindCustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  execute(): Promise<Customer[]> {
    return this.customerRepository.find();
  }
}