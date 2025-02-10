
// order.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  // Properties for order form data
  orderData = {
    name: '',
    email: '',
    product: '',
    quantity: 1,
    deliveryDate: '',
    address: ''
  };

  // On form submit
  onSubmit() {
    // Handle form submission
    console.log('Order submitted:', this.orderData);
    alert('Your order has been placed successfully!');
  }
}
