import { AbstractPaymentService } from './abstract-payment.service';

export class VisaPaymentService extends AbstractPaymentService {
  async processPayment(amount: number): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return 'successful';
  }
}
