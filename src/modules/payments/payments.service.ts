import { Injectable } from '@nestjs/common';
import { PaymentServiceFactory } from './services/payment-service.factory';
import { PrismaService } from 'src/common/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly factory: PaymentServiceFactory,
  ) {}

  async initiatePayment(dto: CreatePaymentDto) {
    const paymentService = this.factory.create(dto.method);
    const payment = await this.prisma.transaction.create({
      data: { amount: dto.amount, method: dto.method, status: 'processing' },
    });

    setTimeout(async () => {
      const status = await paymentService.processPayment(dto.amount);
      await this.prisma.transaction.update({
        where: { id: payment.id },
        data: { status },
      });
    }, 10000);

    return { paymentId: payment.id, status: 'processing' };
  }
}
