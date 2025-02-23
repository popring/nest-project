import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtherModule } from './other/other.module';
import { LogMiddleware } from './log.middleware';
import { OtherController } from './other/other.controller';
import { ListController } from './list/list.controller';
import { UploadController } from './upload/upload.controller';

@Module({
  imports: [OtherModule],
  controllers: [
    AppController,
    OtherController,
    ListController,
    UploadController,
  ],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('other*');
  }
}
