import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: 'What types of cakes do you offer?',
      answer: 'We offer a wide range of cakes including chocolate, vanilla, red velvet, fruit cakes, and custom cakes tailored to your needs.',
      isOpen: false
    },
    {
      question: 'Do you deliver cakes?',
      answer: 'Yes, we offer delivery services to ensure your cakes reach you fresh and on time.',
      isOpen: false
    },
    {
      question: 'Can I customize my cake?',
      answer: 'Absolutely! We specialize in custom cakes. Just let us know what you have in mind, and we will bring your vision to life.',
      isOpen: false
    },
    {
      question: 'How can I place an order?',
      answer: 'You can place an order through our website, by phone, or by visiting our store directly.',
      isOpen: false
    },
    {
      question: 'What is the return policy?',
      answer: 'We strive for customer satisfaction. If there are any issues with your order, please contact us within 24 hours for a resolution.',
      isOpen: false
    }
  ];

  // Function to toggle the visibility of the answer
  toggleAnswer(faq: any) {
    faq.isOpen = !faq.isOpen;
  }

}
