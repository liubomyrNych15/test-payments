import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { PaymentsGateway } from './payments.gateway';
import { PaymentServiceFactory } from './services/payment-service.factory';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  controllers: [PaymentsController],
  providers: [
    PaymentsService,
    PaymentsGateway,
    PaymentServiceFactory,
    PrismaService,
  ],
})
export class PaymentsModule {}
