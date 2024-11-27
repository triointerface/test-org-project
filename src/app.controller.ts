import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { TrelloAuth } from './trello.auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/trello-auth/login')
  @UseGuards(TrelloAuth)
  async autorizeCallback(@Req() req): Promise<any> {
    return req?.user;
  }
}
