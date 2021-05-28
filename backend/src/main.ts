import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

const a = new Array();
const m = new Map();
m.set('1','Go');
console.log(m.keys());
