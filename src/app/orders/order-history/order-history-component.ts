import { Component, signal } from '@angular/core';
import { Order } from '../order/order-component';

@Component({
  selector: 'app-order-history',
  imports: [],
  templateUrl: './order-history-component.html',
  styleUrl: './order-history-component.scss'
})
export class OrderHistoryComponent {
orders = signal<Order[]>([]);
}
