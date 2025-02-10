import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  constructor() {}
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // You can replace this with API call to submit the form data
    console.log('Form submitted:', this.contactData);
    alert('Your Form has  successfully Submitted!');


}
}
