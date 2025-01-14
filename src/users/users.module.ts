import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from 'src/config/config.module';
import { User } from './models/user.model';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

@Module({
  imports: [ConfigModule, SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UsersModule {}
