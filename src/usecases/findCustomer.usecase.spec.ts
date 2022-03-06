import { MockCustomerRepository } from "../repositories/mockCustomer.repository";
import { FindCustomerUseCase } from "./findCustomer.usecase";

const makeSut = () => {
  const customerRepository = new MockCustomerRepository()
  const sut = new FindCustomerUseCase(customerRepository)

  return {
    sut,
    customerRepository
  }
}

describe('FindCustomerUseCase', () => {
  test('check if can be called', () => {
    const { sut } = makeSut()

    expect(sut).toBeTruthy();
  })

  test('check if can return a customer', async () => {
    const { sut, customerRepository } = makeSut()

    customerRepository.add({
      name: 'any_name',
      email: 'any_email@email.com',
      phone: '(00)00000-0000',
      document: '000.000.000-00',
      status: 'ACTIVE'
    })

    const customers = await sut.execute()

    expect(customers[0]).toBeTruthy()
  })
});

export {}