import { QueryInterface } from 'sequelize';
import { getSaltHashByPassWord } from '../../lib/salt-hash-generate';

export default {
  up: async (queryInterface: QueryInterface) => {
    // 使用 queryInterface 直接插入数据
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: await getSaltHashByPassWord('password123'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    // 使用 queryInterface 删除数据
    await queryInterface.bulkDelete('Users', { email: 'john.doe@example.com' });
  },
};
