import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // Import Swagger module

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://frontend-react-auo0.onrender.com/'], // Allow specific domains
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only certain HTTP methods
  });

  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT') || 3001;
  const env = configService.get<string>('NODE_ENV') || 'NOT DEFINED';

  // Setup Swagger
  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('The API documentation for the NestJS app')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger UI will be available at /api

  await app.listen(port);

  const url = await app.getUrl();

  Logger.log({
    message: `application running at ${url} with NODE_ENV ${env}`,
    url,
    env,
  });
}
bootstrap();
