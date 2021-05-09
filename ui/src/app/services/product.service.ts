import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  myApi = 'http://localhost:3000/api/products/';
  
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.myApi + "get-all-products");
  }

  getOneProduct(productId:any): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.myApi + "get-one-product/"+productId);
  }


}
