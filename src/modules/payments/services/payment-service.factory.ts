import { Injectable, BadRequestException } from '@nestjs/common';
import { AbstractPaymentService } from './abstract-payment.service';
import { VisaPaymentService } from './visa-payment.service';
import { MasterCardPaymentService } from './mastercard-payment.service';
import { PayPalPaymentService } from './paypal-payment.service';

@Injectable()
export class PaymentServiceFactory {
  create(method: string): AbstractPaymentService {
    switch (method) {
      case 'visa':
        return new VisaPaymentService();
      case 'mastercard':
        return new MasterCardPaymentService();
      case 'paypal':
        return new PayPalPaymentService();
      default:
        throw new BadRequestException('Unsupported payment method');
    }
  }
}
