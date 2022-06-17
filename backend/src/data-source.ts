import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../src/modules/users/entity/User';

declare let process: {
  env: {
    DB_USER: string;
    DB_HOST: string;
    DB_PASSWORD: string;
    DB: string;
    DB_PORT: number;
  };
};

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ['../src/migrations/*{.ts,.tsx,.js,.jsx'],
});
