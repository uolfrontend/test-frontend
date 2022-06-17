import CustomerService from '../services/CustomerService';

export const configDB = (callback: any) => {
    const requestDB = window.indexedDB.open('customers-list', 1)
    let db;
    requestDB.onsuccess = async (event) => {
        console.log(event.oldVersion);
        db = requestDB.result;
        callback(getStore(db))
    }

    requestDB.onupgradeneeded = (event) => {
        console.log('precisa aumentar a versao')
        let db = event.target.result;
        let store = db.createObjectStore('customers');
        let transaction = event.target.transaction
        transaction.oncomplete =
            function(event) {
                callback(getStore(db))
            }
        console.log(event.oldVersion);
        console.log('sucesso')
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

