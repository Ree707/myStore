import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import {product} from '../../models/product'
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from '../service/cart-service.service';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit{
 // @Input() currentProduct!: product; //from parent to child event 
 currentProduct!:product;
 count: number[]=[]
 @Output() add: EventEmitter<any>=new EventEmitter();

  constructor(private myCart:CartServiceService){
    this.currentProduct={
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
    this.currentProduct=history.state;

  }
  onChange(count:any) {
    this.currentProduct.amount=count;
   // alert(this.currentProduct.amount);
}
addProduct(){
   // this.add.emit(this.currentProduct);
   this.myCart.add(this.currentProduct)
   alert("product added to the cart!");
  }
}
