import { Injectable } from '@angular/core';
import {product} from '../../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  data='http://localhost:4200/assets/data.json';
  constructor(private http:HttpClient) { 
  }

  getProudct():Observable<product[]>{
    return this.http.get<product[]>(this.data);
  }
}
