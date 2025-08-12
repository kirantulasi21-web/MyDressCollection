// app.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  customerMobile = '';
  dresses = [
    { name: 'Yellow Kurthi', price: 1200, img: 'assets/dress1.jpeg' },
    { name: 'White Kurthi', price: 1500, img: 'assets/dress2.jpeg' },
    { name: 'Black Kurthi', price: 2000, img: 'assets/dress3.jpeg' },
    { name: 'Blue Kurthi', price: 2000, img: 'assets/dress4.jpeg' },
    { name: 'Dark Blue Kurthi', price: 2000, img: 'assets/dress5.jpeg' },
    { name: 'Pink Kurthi', price: 2000, img: 'assets/dress6.jpeg' },
    { name: 'Light Blue Kurthi', price: 2000, img: 'assets/dress7.jpeg' },
    { name: 'Yellow Pink Kurthi', price: 2000, img: 'assets/dress8.jpeg' }




  ];

  addToCart(dress: any) {
    const message = `Hello, I want to order ${dress.name} priced at Rs.${dress.price}`;
    const whatsappUrl = `https://wa.me/919014067091?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}
