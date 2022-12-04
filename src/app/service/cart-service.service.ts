import { Injectable } from '@angular/core';
import { product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  products: product[] = [];
  constructor() { }

  add(newProduct:product){
    //check if this product is already added 
    let found=false;
    for (let index = 0; index < this.products.length; index++) {
      if (this.products[index].name==newProduct.name){
        this.products[index].amount++;
        found =true;
      }
    }
    if (!found){
      this.products.push(newProduct);
    }
  }
  remove(selectedProduct:product){
    selectedProduct.amount=0;
    this.products=this.products.filter(p => p !== selectedProduct);
  }

  getTotal(){
    let total=0;
    this.products.forEach(p => total += p.amount * p.price);
    return total.toFixed(2);
  }
  getProducts():product[]{
    return this.products;
  }

  clear(){
    this.products=[];
  }
}
