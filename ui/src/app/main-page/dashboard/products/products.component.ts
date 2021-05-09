import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ThrowStmt } from '@angular/compiler';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;
  carts: any;
  cartData: any;
  productForm: any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private form : FormBuilder,
    private toastr: ToastrService,
    private _router:ActivatedRoute
  ) { }

  showAllProducts(){
    this.productService.getAllProducts().subscribe((response) => {
      console.log(response); 
    this.products = response;
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
    this.showAllProducts();
  }

}
