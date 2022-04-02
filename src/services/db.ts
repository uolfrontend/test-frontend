import Dexie from "dexie";
import { getInitialCustomers } from "./api";

export interface ICustomer {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: string;
}

class AppDatabase extends Dexie {
    customers!: Dexie.Table<ICustomer, number>;

    constructor() {
        super("customers");
        this.version(1).stores({
            customers: 'id, name, email, phone, status'
        });
        this.populateDatabase()
    }

    async populateDatabase() {
        const customers = await this.customers.toArray();

        if (!customers.length) {
            const initialCustomers = getInitialCustomers();
            await this.customers.bulkAdd(initialCustomers)
        }     
    }
}

const db = new AppDatabase();

export default db;


