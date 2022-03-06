import { LocalStorageCustomerRepository } from "../repositories/localStorageCustomer.repository";
import { AddCustomerUseCase } from "../usecases/addCustomer.usecase";

export const makeAddCustomerUseCase = () => {
  const customerRepository = new LocalStorageCustomerRepository();
  const addCustomerUseCase = new AddCustomerUseCase(customerRepository);

  return addCustomerUseCase
}