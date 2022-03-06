import { InvalidFieldError } from "../errors/invalidField.error";
import { MissingFieldError } from "../errors/missingFieldError";
import { Customer } from "../models/customer.model";
import { ICustomerRepository } from "../repositories/customerRepository.interface";
import { AddCustomerDTO } from "./dtos/addCustomerDTO.interface";

export class UpdateCustomerUseCase {
  constructor(private readonly customerRepository: ICustomerRepository) {}

  async execute(id: string, data: AddCustomerDTO): Promise<Customer> {
    const requiredFields = ["name", "email", "document", "phone", "status"];

    for (const field of requiredFields) {
      if (!data[field]) {
        throw new MissingFieldError(field);
      }
    }

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(data.email)) {
      throw new InvalidFieldError("email");
    }

    const documentRegex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
    if (!documentRegex.test(data.document)) {
      throw new InvalidFieldError("document");
    }

    const phoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
    if (!phoneRegex.test(data.phone)) {
      throw new InvalidFieldError("phone");
    }

    const statusRegex = /^(ACTIVE|INACTIVE|DISABLED|WAITING_FOR_ACTIVATION)$/;
    if (!statusRegex.test(data.status)) {
      throw new InvalidFieldError("status");
    }

    const customer = await this.customerRepository.update(id, data);

    return customer
  }
}