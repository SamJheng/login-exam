import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Users } from 'src/users/models/users.model';

interface IConfig {
  [key: string]: SequelizeModuleOptions;
}
const dbconfigOption: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: '12345678',
  database: 'exam',
  models: [Users],
};
export const config: IConfig = {
  development: dbconfigOption,
  production: dbconfigOption,
};
