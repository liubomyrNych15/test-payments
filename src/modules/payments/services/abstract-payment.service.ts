export abstract class AbstractPaymentService {
    abstract processPayment(amount: number): Promise<string>;
  }
  