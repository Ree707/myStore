import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/models/product';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  myCart:product[]=[];
  total:string="";
  count:number[]=[];
  name:string="";
  Address:string="";
  CCnum:string="";
  @Input() order:string[];
  constructor(private cart: CartServiceService){
    this.count=[1,2,3,4,5,6,7,8,9,10];
    this.order=["",""];
  }
  ngOnInit(): void {
    this.myCart=this.cart.getProducts();
    this.total=this.cart.getTotal(); 
  }
  removeCartItem(product: product): void {
    this.cart.remove(product);
  }
  onChange(num:any,prod:product){
    this.myCart.forEach(element => {
      if (element.name===prod.name){
        if (num==0){
          this.removeCartItem(prod);
          this.myCart=this.myCart.filter(p => p !== prod);
          this.total=this.cart.getTotal();
          alert("this product is removed!")
          console.log(this.myCart)
        }
        else{
          element.amount=num;
          this.total=this.cart.getTotal();
          this.order[1]=this.total;
        }
      }
    });
  }
  submitOrder():void{
  this.order=[this.name,this.total];
  }

  nameChanged(arg:any) {
    this.name=arg;
    console.log("modelchanged " + arg);

  }

  addressChanged(arg:any){
    this.Address=arg;
    console.log("modelchanged " + arg);

  }

  ccnumChanged(arg:any){
    this.CCnum=arg;
    console.log("modelchanged " + arg);
    console.log("modelchanged " + arg);
  }

}
