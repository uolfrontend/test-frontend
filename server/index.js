const axios = require('axios');
const express = require('express');
const cors = require('cors');

const newLocal = 'https://test-frontend-uolpp.web.app/customers.json';
const api = axios.create({baseURL: newLocal});

const app = express();

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    app.use(cors);
    next();
}
);

app.get('/', async (req, res) => {
    const response = await api.get();
    const customers = response.data;
    
    res.send(customers);
});

app.listen(3001);