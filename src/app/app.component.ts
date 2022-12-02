import { Component } from '@angular/core';
import { product } from 'src/models/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myStore';
  cart:product[]=[];
  addToCart(product:product){
    this.cart.push(product);
  }
}

