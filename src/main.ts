import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 配置 Swagger 文檔
  const config = new DocumentBuilder()
    .setTitle('API Documentation') // 文件標題
    .setDescription('API description for the application') // 文件描述
    .setVersion('1.0') // 版本號
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // 啟用 Swagger UI
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
