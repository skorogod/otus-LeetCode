import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import {config as dbConfig} from 'dotenv'

const PORT = process.env.NODE_DOCKER_PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Leet Code')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
}
bootstrap();
