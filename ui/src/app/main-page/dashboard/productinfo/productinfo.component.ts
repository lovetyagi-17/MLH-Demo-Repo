import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  productDetails : any;
  carts: any;

  productForm: any;

  item_list : any;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService,
    private form : FormBuilder,
    private _router:ActivatedRoute,
    private router: Router,
     ) { }
     
    getOneProduct(){
      this.productService.getOneProduct(this._router.snapshot.params.id).subscribe((product)=>{
        console.log('hello');
        this.productDetails = product;
        console.log(this.productDetails);
      })
    }

    addToCart(data){
      let UserId = localStorage.getItem('UserId');
      this.productService.getOneProduct(data).subscribe((result) => {
        console.log("result of data: ", result);
        this.productForm = this.form.group({  
          userId: UserId,
          productId: result[0]._id,
          name: result[0].productName,
          price: result[0].price,
          quantity: result[0].quantity,
        },
      );
      this.cartService.addProductToCart(this.productForm.value).subscribe((result) => {
        console.log("addedToCart: ", result);
        this.router.navigateByUrl('/dashboard/cart/' + result.cartId)
      });
    });
    }
   
  ngOnInit(): void {
    this.getOneProduct();
  }

}
