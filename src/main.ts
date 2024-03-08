import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// TODO
// Реалзовать контроллер, для:
//
// POST - добавить собаку - с параметрами, кличка, порода
// GET - список собак
// POST - фильтрация: кличка, порода
// GET - поиск по кличке
// GET
// DELETE - удалить
// PUT - изменить по id
// PATCH - изменить частично
//
//
// Реализовать сервис - провайдер
//
// Реализовать промежуточный обработчик с логированием HTTP метода (POST, GET ...)
// lessons/1/fi
