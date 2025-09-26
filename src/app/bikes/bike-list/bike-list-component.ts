import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Bike } from '../bike';


@Component({
  selector: 'app-bike-list',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './bike-list-component.html',
  styleUrl: './bike-list-component.scss'
})
export class BikeListComponent {
  role: 'BASIC' | 'MANAGER' | 'GUEST' = 'BASIC'; // can be set from auth service
  searchTerm: string = '';

  bikes: Bike[] = [
    {
      id: 1,
      model: 'Mountain Master',
      imageSource: 'mountain.png',
      stock: 5,
      details: 'Great for trails',
      electric: false,
      price: 799.99
    },
    {
      id: 2,
      model: 'Urban Rider',
      imageSource: 'urban.png',
      stock: 0,
      details: 'Perfect for city commuting',
      electric: true,
      price: 1299.99
    }
    // ...load dynamically from a service in real app
  ];

  filteredBikes(): Bike[] {
    const term = this.searchTerm.toLowerCase();
    return this.bikes.filter(b => b.model.toLowerCase().includes(term));
  }

  addToCart(bike: Bike) {
    console.log('Add to cart:', bike);
    // TODO: connect to cart service
  }

  editBike(bike: Bike) {
    console.log('Edit bike:', bike);
    // TODO: navigate to bike edit form
  }

  deleteBike(bike: Bike) {
    console.log('Delete bike:', bike);
    // TODO: call backend to delete
  }
}
