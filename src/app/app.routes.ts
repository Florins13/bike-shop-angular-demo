import { Routes } from '@angular/router';
import { LoginComponent } from './login/login-component';
import { BikeListComponent } from './bikes/bike-list/bike-list-component';
import { BikeComponent } from './bikes/bike/bike-component';
import { CheckoutComponent } from './orders/checkout/checkout-component';
import { OrderHistoryComponent } from './orders/order-history/order-history-component';
import { ShopComponent } from './shop/shop-component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    { path: 'bikes', component: BikeListComponent },
    { path: 'bikes/:id', component: BikeComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'orders', component: OrderHistoryComponent },
];
