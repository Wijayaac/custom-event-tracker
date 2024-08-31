import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutModule } from './checkout/checkout.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    CheckoutModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'checkout',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
