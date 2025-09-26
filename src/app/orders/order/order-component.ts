import { Component, signal } from '@angular/core';
import { Bike } from '../../bikes/bike';


export interface ShippingAddress {
  fullName: string;
  address: string;
  telephone: string;
  zipCode: string;
}

export interface OrderItem {
  id: number;
  bike: Bike;
  quantity: number;
}

export interface Order {
  transaction: string;
  orderState: string;
  acquireType: 'buy' | 'rent';
  shippingItems: OrderItem[];
  totalPrice: number;
  shippingAddress: ShippingAddress;
  username: string;
}

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order-component.html',
  styleUrl: './order-component.scss'
})
export class OrderComponent {
role: 'BASIC' | 'MANAGER' | 'GUEST' = 'BASIC';

  newOrder = signal<Order>({} as Order);
}
