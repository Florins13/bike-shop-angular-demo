import { Component, computed, signal } from '@angular/core';
import { Bike } from '../bikes/bike';


export interface CartItem {
  id: number;
  bike: Bike;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.scss'
})
export class CartComponent {
cartItems = signal<CartItem[]>([
    {
      id: 1,
      bike: {
        id: 1,
        model: 'Mountain Master',
        imageSource: 'mountain.png',
        stock: 5,
        details: 'Great for trails',
        electric: false,
        price: 799.99
      },
      quantity: 1
    },
    {
      id: 2,
      bike: {
        id: 2,
        model: 'Urban Rider',
        imageSource: 'urban.png',
        stock: 2,
        details: 'Perfect for city commuting',
        electric: true,
        price: 1299.99
      },
      quantity: 2
    }
  ]);

  // Derived signals
  cartTotal = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.bike.price * item.quantity, 0)
  );

  cartIsEmpty = computed(() => this.cartItems().length === 0);

  // Actions
  removeItem(id: number) {
    this.cartItems.update(items => items.filter(item => item.id !== id));
  }

  increaseQuantity(id: number) {
    this.cartItems.update(items =>
      items.map(item =>
        item.id === id && item.quantity < item.bike.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  decreaseQuantity(id: number) {
    this.cartItems.update(items =>
      items.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  goToCheckout() {
    console.log('Navigating to checkout...');
    // TODO: this.router.navigate(['/checkout']);
  }
}
