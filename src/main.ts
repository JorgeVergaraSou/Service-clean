import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // esto se agrega
  app.setGlobalPrefix('api') //prefijo api para localhost
  await app.listen(3000); // levanta en el puerto 3000
}
bootstrap();
