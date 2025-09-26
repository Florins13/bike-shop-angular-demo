import { Component } from '@angular/core';

import { BikeListComponent } from '../bikes/bike-list/bike-list-component';
import { CartComponent } from "../cart/cart-component";

@Component({
  selector: 'app-shop',
  imports: [BikeListComponent, CartComponent],
  templateUrl: './shop-component.html',
  styleUrls: ['./shop-component.scss']
})
export class ShopComponent {

}
