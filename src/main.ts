import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './api/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
