import * as path from 'path';
import { DataSourceOptions } from 'typeorm/data-source';
import * as dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(process.env.NODE_ENV + '.env'),
});

const ormConfig: DataSourceOptions = {
  type: process.env.DATABASE_TYPE as 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsRun: true,
  logging: false,
};

export default ormConfig;
