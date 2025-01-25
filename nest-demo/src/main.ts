import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(function (req: Request, res: Response, next: NextFunction) {
    console.log('app - before', req.url);
    next();
    console.log('app - after');
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
