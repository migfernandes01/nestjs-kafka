import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderReq } from './create-order-request.dto';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createOrder({ userId, price }: CreateOrderReq) {
    // emit the 'create-order' event to the billing service
    this.billingClient.emit(
      'create-order',
      new OrderCreatedEvent('123', userId, price),
    );
  }
}
