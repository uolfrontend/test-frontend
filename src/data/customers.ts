import { Customer } from "../models/customer.model";

export const customersDB: Customer[] = [
  {
    "id": "1",
    "document": "512.536.530-03",
    "name": "Camila Souza",
    "email": "camila.souza@email.com",
    "phone": "(11)93463-2347",
    "status": "ACTIVE"
  },
  {
    "id": "2",
    "document": "397.553.820-11",
    "name": "Pedro Ferreira",
    "email": "peferreira@email.com",
    "phone": "(11)95529-5678",
    "status": "INACTIVE"
  },
  {
    "id": "3",
    "document": "921.818.210-20",
    "name": "Marcela Silva",
    "email": "masilva@email.com",
    "phone": "(11)93470-3391",
    "status": "WAITING_FOR_ACTIVATION"
  },
  {
    "id": "4",
    "document": "533.278.870-39",
    "name": "Carlos Ferraz",
    "email": "carlosferraz@email.com",
    "phone": "(11)96744-0233",
    "status": "DISABLED"
  }
]