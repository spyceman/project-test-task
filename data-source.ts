import { DataSource } from 'typeorm';
import ormConfig from './ormconfig';

const AppDataSource = new DataSource({ ...ormConfig });

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export { AppDataSource }
