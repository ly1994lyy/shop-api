import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { HttpExceptionFilter } from 'libs/common/src/filter/http-exception.filter';
import { TransformInterceptor } from 'libs/common/src/interceptor/transform.interceptor';
import { ValidationPipe } from 'libs/common/src/pipe/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
}
bootstrap();
