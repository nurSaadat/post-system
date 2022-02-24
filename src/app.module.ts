import { Module } from '@nestjs/common';
import { PostsController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [AppService],
})
export class AppModule {}
