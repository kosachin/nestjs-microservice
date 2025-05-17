import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { Logger } from 'nestjs-pino';

import { ValidationPipe } from '@nestjs/common';
import { ReservationsModule } from './reservations.module';

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT') ?? 3000);
}
bootstrap();
