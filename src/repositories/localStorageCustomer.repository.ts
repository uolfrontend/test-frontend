import { customersDB } from "../data/customers";
import { Customer } from "../models/customer.model";
import { AddCustomerDTO } from "../usecases/dtos/addCustomerDTO.interface";
import { ICustomerRepository } from "./customerRepository.interface";

export class LocalStorageCustomerRepository implements ICustomerRepository {
  private customers: Customer[] = [];

  constructor() {
    const localStorageCustomers = localStorage.getItem("customers");

    if (localStorageCustomers) {
      this.customers = JSON.parse(localStorageCustomers);
      return
    }

    this.seed();
  }

  seed() {
    this.customers = customersDB
    localStorage.setItem("customers", JSON.stringify(this.customers));
  }

  add(customer: AddCustomerDTO): Promise<Customer> {
    const newCustomer = {
      id: String(this.customers.length + 1),
      ...customer
    };

    this.customers = [...this.customers, newCustomer];
    localStorage.setItem("customers", JSON.stringify(this.customers));

    return Promise.resolve(newCustomer);
  }

  find(): Promise<Customer[]> {
    return Promise.resolve(this.customers);
  }

  update(id: string, customer: AddCustomerDTO): Promise<Customer> {
    const index = this.customers.findIndex(c => c.id === id);

    this.customers[index] = {
      ...this.customers[index],
      ...customer
    };
    localStorage.setItem("customers", JSON.stringify(this.customers));

    return Promise.resolve(this.customers[index]);
  }

  delete(id: string): Promise<void> {
    this.customers = this.customers.filter(c => c.id !== id);
    localStorage.setItem("customers", JSON.stringify(this.customers));

    return Promise.resolve();
  }
}