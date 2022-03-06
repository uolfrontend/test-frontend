import { ICustomerRepository } from "../repositories/customerRepository.interface";

export class DeleteCustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(id: string): Promise<void> {
    await this.customerRepository.delete(id);
  }
}