import { SequelizeModuleOptions } from '@nestjs/sequelize';

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
};
export const config: IConfig = {
  development: dbconfigOption,
  production: dbconfigOption,
};
