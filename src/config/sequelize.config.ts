import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Users } from 'src/users/models/users.model';

interface IConfig {
  [key: string]: SequelizeModuleOptions;
}
const developmentConfigOption: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: '12345678',
  database: 'exam',
  models: [Users],
};
const productionConfigOption: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: 'db',
  port: 3306,
  username: 'user',
  password: '12345678',
  database: 'exam',
  models: [Users],
};
export const config: IConfig = {
  development: developmentConfigOption,
  production: productionConfigOption,
};
