import { Component,Input, OnInit,EventEmitter, Output } from '@angular/core';
import {product} from '../../models/product'
import { Router } from '@angular/router';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product : product; //from parent to child event 
  cart:product[]=[];

  currentProduct=product;
  count: number[]=[]
  constructor(private myCart:CartServiceService) {
    this.product={
      id:0,
      name:'',
      price:0,
      url:'',
      description:'',
      amount:1
    }

    this.count=[1,2,3,4,5,6,7,8,9,10]
   }

   ngOnInit(): void {
    this.product.amount=1;
  }

  add(){
    this.myCart.add(this.product)
    alert("product added to the cart!");
  }
  onChange(num:any) {
    this.product.amount=num;
}
}
