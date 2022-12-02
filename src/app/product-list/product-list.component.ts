import { Component, OnInit } from '@angular/core';
import {product} from '../../models/product'
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:product[]=[];
  constructor(
    private ProductService:ProductService
  ) { }
  ngOnInit(): void {
    this.ProductService.getProudct().subscribe(res => {
      for (let index=0;index<res.length;index++){
        const product =res[index];
        product["amount"]=0;
      }
      this.products=res;
    })
  }
}
