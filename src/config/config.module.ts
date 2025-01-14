import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { config } from './sequelize.config';

@Module({
  imports: [SequelizeModule.forRoot(config.development)],
  controllers: [],
  providers: [],
  exports: [SequelizeModule],
})
export class ConfigModule {}
