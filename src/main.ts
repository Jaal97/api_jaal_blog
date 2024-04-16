import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //encender cords
  app.setGlobalPrefix('api') //Establecemos este prefijo para todas las rutas

  //swagger
  const config = new DocumentBuilder()
    .setTitle('Blog Jaal')
    .setDescription('La API del Blog de Jaal')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('posts')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 4000);


}
bootstrap();
