import { Controller, Get } from '@nestjs/common';
import { CheckoutService } from './checkout.service';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Get()
  async getCheckout(): Promise<{ message: string }> {
    return { message: 'Checkout endpoint is working' };
  }
}
