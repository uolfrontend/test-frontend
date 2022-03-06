import { MockCustomerRepository } from "../repositories/mockCustomer.repository";
import { DeleteCustomerUseCase } from "./deleteCustomer.usecase";

const makeSut = () => {
  const customerRepository = new MockCustomerRepository();
  const sut = new DeleteCustomerUseCase(customerRepository);

  return { 
    sut,
    customerRepository
  }
}

describe('DeleteCustomerUseCase', () => {
  test('should be called', () => {
    const { sut } = makeSut();

    expect(sut).toBeTruthy();
  })

  test('should delete a customer', async () => {
    const { sut, customerRepository } = makeSut();
    
    const customer = await customerRepository.add({
      email: "any_email@email.com",
      name: "any_name",
      document: "any_document",
      phone: "any_phone",
      status: "ACTIVE",
    })

    const response = sut.execute(customer.id);

    expect(response).toBeTruthy();
  })
});