import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  products:any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
    private _router:ActivatedRoute
  ) { }

  showAllProducts(){
    this.productService.getAllProducts().subscribe((response)=>{
    this.products = response;
    })
  }
  ngOnInit(): void {
    this.showAllProducts();
  }

}
