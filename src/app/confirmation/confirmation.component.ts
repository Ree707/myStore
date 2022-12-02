import { Component,OnInit } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
currentOrder:string[];

constructor(private cart: CartServiceService){
  this.currentOrder=[];
}
ngOnInit(): void {
  this.currentOrder=history.state;
}
emptyCart(): void {
  this.cart.clear();
}
}
