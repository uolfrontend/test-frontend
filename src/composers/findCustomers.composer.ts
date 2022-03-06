import { LocalStorageCustomerRepository } from "../repositories/localStorageCustomer.repository";
import { FindCustomerUseCase } from "../usecases/findCustomer.usecase";

export const makeFindCustomerUseCase = () => {
  const customerRepository = new LocalStorageCustomerRepository();
  const findCustomerUseCase = new FindCustomerUseCase(customerRepository);

  return findCustomerUseCase
}