// db.ts
import Dexie, { Table } from "dexie";
import { ICustomerDTO } from "../dtos/ICustomerDTO";

export class CustomerDexie extends Dexie {
    // 'customers' is added by dexie when declaring the stores()
    // We just tell the typing system this is the case
    customers!: Table<ICustomerDTO>;

    constructor() {
        super("CustomerDB");
        this.version(1).stores({
            customers: "id, name, email, phone, status", // Primary key and indexed props
        });
    }
}

export const db = new CustomerDexie();
