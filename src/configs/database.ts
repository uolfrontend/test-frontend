import CustomerService from '../services/CustomerService';

export const configDB = (callback: any) => {
    const requestDB = window.indexedDB.open('customers-list', 1)
    let db;
    requestDB.onsuccess = async () => {
        db = requestDB.result;
        callback(getStore(db))
    }

    requestDB.onupgradeneeded = () => {
        let db = requestDB.result
        db.createObjectStore('customers');
        callback(getStore(db))
    }

    function getStore(db: any) {
        return db.transaction(["customers"], "readwrite").objectStore('customers')
    }
}

export const getCust = async (db) => {
    db.openCursor().onsuccess = (event) => {
        let customer = event.target.result;
        if (customer) {
            customer.continue()
        }
    }
}

