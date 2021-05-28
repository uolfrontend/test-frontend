const Storage = {
    get() {
        return JSON.parse(localStorage.getItem('desafio.uol:customers')) || [];
    },

    set(customers) {
        localStorage.setItem('desafio.uol:customers', JSON.stringify(customers));
    }
}

export default Storage;