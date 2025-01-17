module.exports = {
  development: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'user',
    password: '12345678',
    database: 'exam',
  },
  production: {
    dialect: 'mysql',
    host: 'db',
    port: 3306,
    username: 'user',
    password: '12345678',
    database: 'exam',
  },
};
