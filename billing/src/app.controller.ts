import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // listen to the 'create-order' event
  @EventPattern('create-order')
  handleOrderCreated(data: any) {
    this.appService.handleOrderCreated(data);
  }
}
