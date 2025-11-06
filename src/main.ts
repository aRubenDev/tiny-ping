import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api/v1");

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )

  app.enableCors(
    {
      origin: '*',
      methods: 'GET,PATCH,POST,DELETE',
    }
  );

  //agrego un middleware para dar una respuesta personalizada en caso de ruta no encontrada
  app.use((req, res, next) => {
    res.status(404).json({
      statusCode: 404,
      message: 'Resource not found',
    });
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
