import { LocalStorageCustomerRepository } from "../repositories/localStorageCustomer.repository";
import { DeleteCustomerUseCase } from "../usecases/deleteCustomer.usecase";

export const makeDeleteCustomerUseCase = () => {
  const customerRepository = new LocalStorageCustomerRepository();
  const deleteCustomerUseCase = new DeleteCustomerUseCase(customerRepository);

  return deleteCustomerUseCase
}