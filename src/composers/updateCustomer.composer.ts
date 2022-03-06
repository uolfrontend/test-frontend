import { LocalStorageCustomerRepository } from "../repositories/localStorageCustomer.repository";
import { UpdateCustomerUseCase } from "../usecases/updateCustomer.usecase";

export const makeUpdateCustomerUseCase = () => {
  const customerRepository = new LocalStorageCustomerRepository();
  const updateCustomerUseCase = new UpdateCustomerUseCase(customerRepository);

  return updateCustomerUseCase
}