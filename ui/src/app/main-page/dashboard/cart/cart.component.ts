import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartId: any;
  item_list:any;
  response:any;
  total:any;

  constructor(
    private cartService: CartService,
    private toastr: ToastrService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { 
    this.cartId = this.activateRoute.snapshot.params['id'];
    this.showAllCartProducts();
  }
  
  showAllCartProducts(){
    this.cartService.getAllProducts(this.cartId).subscribe((result: any) => {
      console.log("cartProduct: ", result);
      if(result.data.length !== 0){
        this.item_list = result.data[0].products;
        console.log("item_list: ", this.item_list);
        return
      } else{
        this.item_list = null;
      }
    });
  }

  clearCart(){
    this.cartService.clearCart(this.cartId).subscribe((result) => {
      this.toastr.success('Clear cart Successfullly!', 'success')
      console.log("clearCartData: ", result);
      this.showAllCartProducts();
    });
  }
  

  ngOnInit(): void {
    this.showAllCartProducts();
  }
  
}
