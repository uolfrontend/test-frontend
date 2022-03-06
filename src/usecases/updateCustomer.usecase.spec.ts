import { InvalidFieldError } from "../errors/invalidField.error";
import { MissingFieldError } from "../errors/missingFieldError";
import { MockCustomerRepository } from "../repositories/mockCustomer.repository";
import { UpdateCustomerUseCase } from "./updateCustomer.usecase";

const makeSut = () => {
  const customerRepository = new MockCustomerRepository();
  const sut = new UpdateCustomerUseCase(customerRepository);

  return { 
    sut,
    customerRepository
  }
}

describe("UpdateCustomerUseCase", () => {
  test("check if can be called", () => {
    const { sut } = makeSut();

    expect(sut).toBeTruthy();
  });

  test("check if email has passed", async () => {
    const { sut, customerRepository } = makeSut();

    const customer = await customerRepository.add({
      email: "any_email@email.com",
      name: "any_name",
      document: "any_document",
      phone: "any_phone",
      status: "ACTIVE",
    })

    const response = sut.execute(customer.id, {
      email: "",
      name: "any_name",
      document: "any_document",
      phone: "any_phone",
      status: "ACTIVE",
    });

    await expect(response).rejects.toEqual(new MissingFieldError("email"));
  });

  test("check if email is valid", async () => {
    const { sut, customerRepository } = makeSut();

    const customer = await customerRepository.add({
      email: "any_email@email.com",
      name: "any_name",
      document: "any_document",
      phone: "any_phone",
      status: "ACTIVE",
    })

    const response = sut.execute(customer.id, {
      email: "invalid_email",
      name: "any_name",
      document: "any_document",
      phone: "any_phone",
      status: "ACTIVE",
    });

    await expect(response).rejects.toEqual(new InvalidFieldError("email"));
  });

  test("check if name has passed", async () => {
    const { sut, customerRepository } = makeSut();

    const customer = await customerRepository.add({
      email: "any_email@email.com",
      name: "any_name",
      document: "any_document",
      phone: "any_phone",
      status: "ACTIVE",
    })

    const response = sut.execute(customer.id, {
      email: "any_email@email.com",
      name: "",
      document: "any_document",
      phone: "any_phone",
      status: "ACTIVE",
    });

    await expect(response).rejects.toEqual(new MissingFieldError("name"));
  });

  test("check if document has passed", async () => {
    const { sut, customerRepository } = makeSut();

    const customer = await customerRepository.add({
      email: "any_email@email.com",
      name: "any_name",
      document: "any_document",
      phone: "any_phone",
      status: "ACTIVE",
    })

    const response = sut.execute(customer.id, {
      email: "any_email@email.com",
      name: "any_name",
      document: "",
      phone: "any_phone",
      status: "ACTIVE",
    });

    await expect(response).rejects.toEqual(new MissingFieldError("document"));
  });

  test("check if document is valid", async () => {
    const { sut, customerRepository } = makeSut();

    const customer = await customerRepository.add({
      email: "any_email@email.com",
      name: "any_name",
      document: "any_document",
      phone: "any_phone",
      status: "ACTIVE",
    })

    const response = sut.execute(customer.id, {
      email: "any_email@email.com",
      name: "any_name",
      document: "any_document",
      phone: "any_phone",
      status: "ACTIVE",
    });

    await expect(response).rejects.toEqual(new InvalidFieldError("document"));
  });

  test("check if phone has passed", async () => {
    const { sut, customerRepository } = makeSut();

    const customer = await customerRepository.add({
      email: "any_email@email.com",
      name: "any_name",
      document: "any_document",
      phone: "any_phone",
      status: "ACTIVE",
    })

    const response = sut.execute(customer.id, {
      email: "any_email@email.com",
      name: "any_name",
      document: "any_document",
      phone: "",
      status: "ACTIVE",
    });

    await expect(response).rejects.toEqual(new MissingFieldError("phone"));
  });

  test("check if can be saved", async () => {
    const { sut, customerRepository } = makeSut();

    const customer = await customerRepository.add({
      email: "any_email@email.com",
      name: "any_name",
      document: "any_document",
      phone: "any_phone",
      status: "ACTIVE",
    })

    const response = await sut.execute(customer.id, {
      email: "valid_email@email.com",
      name: "valid_name",
      document: "000.000.000-00",
      phone: "(00)00000-0000",
      status: "ACTIVE",
    });

    expect(response.id).toBeTruthy()
  })
});

export {};
