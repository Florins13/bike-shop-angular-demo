import { Component, computed, signal } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CartItem } from '../../cart/cart-component';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout-component.html',
  styleUrl: './checkout-component.scss'
})
export class CheckoutComponent {
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

  // Derived totals
  cartTotal = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.bike.price * item.quantity, 0)
  );

  rentTotal = computed(() =>
    this.cartItems().reduce((sum, item) => sum + (item.bike.price * item.quantity * 0.3), 0)
  );

  // Acquire mode (buy or rent)
  acquireMode: 'buy' | 'rent' = 'buy';

  // Form
  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      zipCode: ['', Validators.required],
      acquire: [this.acquireMode]
    });

    // Sync acquire signal with form control
    // this.checkoutForm.get('acquire')?.valueChanges.subscribe(value => {
    //   this.acquireMode.set(value);
    // });
  }

  finaliseOrder() {
    // if (this.checkoutForm.valid) {
    //   console.log('Finalising order:', {
    //     ...this.checkoutForm.value,
    //     items: this.cartItems(),
    //     total: this.acquireMode() === 'buy' ? this.cartTotal() : this.rentTotal()
    //   });
    //   // TODO: Send order to backend
    // }
  }
}

