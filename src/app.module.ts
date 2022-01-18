import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrelloAuth } from './trello.auth.guard';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TrelloAuth],
})
export class AppModule {}
