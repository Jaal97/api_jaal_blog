import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //encender cords
  app.setGlobalPrefix('api') //Establecemos este prefijo para todas las rutas
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
