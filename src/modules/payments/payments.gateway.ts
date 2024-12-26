import { WebSocketGateway, WebSocketServer, OnGatewayConnection } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ namespace: '/ws/payments' })
export class PaymentsGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  handleConnection(client: any) {
    console.log('Client connected:', client.id);
  }

  sendStatusUpdate(paymentId: string, status: string, method: string) {
    this.server.emit(`status/${paymentId}`, { status, method });
  }
}
