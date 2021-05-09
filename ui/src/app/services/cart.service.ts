import { Injectable } from '@angular/core';
import { CartDetail } from '../models/cart-details';
import { Cart } from '../models/cart';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public myApi = 'http://localhost:3000/api/shopping/';

  constructor(private http: HttpClient) { }

  item_list = [];

  public createCart(data: any) {
    return this.http.post(this.myApi + "create-cart", data);
  }

  public clearCart(cartId: any) {
    return this.http.delete(this.myApi + "clear-cart/" + cartId);
  }
  
  add_item(data:any){
    this.item_list.push(data)
    return {'message':"item added successfully"}
  }

  getItems():Observable<any> {
    return this.http.get<any>(this.myApi+'get-all-products');
  }

  delete_item(id:any){
    var i;
  for (i = 0; i < this.item_list.length; i++) {
    if(this.item_list[i]._id === id){
      this.item_list.splice(i,1)
      break;
    }
  }
    return {'message':"item deleted successfully"}
  }

  get_list(){
    console.log("Item: ", this.item_list);
    return this.item_list
  }

  clean(){
    this.item_list = []
    return {'message':"cart empty"}
   }
 

  gettotal(){
    var total = 0;
    var i;
  for (i = 0; i < this.item_list.length; i++) {
    total+=parseInt(this.item_list[i].i_price)
  }
  return total
  }


  public addProductTOCart(productId: any): Observable<any> {
    return this.http.get<any>(this.myApi + "add-product/"+productId);
  }

  public addProductToCart(data:any): Observable<any> {
    return this.http.post<any>(this.myApi + "add-product/" ,data);
  }
  

  public getAllProducts(cartId: any): Observable<CartDetail[]> {
    return this.http.get<CartDetail[]>(this.myApi + "get-all-products/" + cartId);
  }

}
