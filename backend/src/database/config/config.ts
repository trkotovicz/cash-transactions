import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || '',
  database: process.env.POSTGRES_DATABASE || 'db-bank',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
}

module.exports = config;
