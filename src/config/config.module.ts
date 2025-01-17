import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { config } from './sequelize.config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => {
        const env = process.env.NODE_ENV || 'development'; // 預設為 development
        return config[env] || config.development;
      },
    }),
    JwtModule.register({
      secret: 'login-exam',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [],
  providers: [],
  exports: [SequelizeModule, JwtModule],
})
export class ConfigModule {}
