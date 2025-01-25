import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtherModule } from './other/other.module';
import { LogMiddleware } from './log.middleware';
import { OtherController } from './other/other.controller';

@Module({
  imports: [OtherModule],
  controllers: [AppController, OtherController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('other*');
  }
}
