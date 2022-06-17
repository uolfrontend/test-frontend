import { AppDataSource } from './data-source';
import express, { Request, Response, NextFunction } from 'express';
import routes from '../src/modules/routes/Index';
import morgan from 'morgan';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  // Caso tenha problema na rota
  if (err) {
    return (
      response
        // .status(err as number)
        .json({ status: 'error', message: err.message })
    );
  }
  // Problemas após chegada na rota
  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333);
console.log('Server ir running on port 3333');

AppDataSource.initialize()
  .then(() => {
    console.log(
      `🚀 🚀 🚀 Data Source OK! Port: ${process.env.DB_PORT} 🚀 🚀 🚀`
    );
    axios
      .get('https://test-frontend-uolpp.web.app/customers.json')
      .then(function (response) {
        const endpointData = response.data.customers;
        console.log(endpointData);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  })
  .catch((err) => {
    console.log('😭 😭 😭');
    console.error(
      `Data Source not found! You tried to run on Port: ${process.env.DB_PORT}`,
      err
    );
    console.log('😭 😭 😭');
  });
