import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  users : any;
  // userId : any;


  constructor(
    private formBuilder: FormBuilder,
    private _router:Router,
    private _toastr: ToastrService,
    private userService: UserService,
    private cartService: CartService
  ) { 
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
   
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get formError() { return this.loginForm.controls; }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {   
        return  this._toastr.error('Fill Details First','Error');;     
    } else {
      this.userService.userLogin(this.loginForm.value).subscribe(result=>{
        console.log(result);
        if(result['jwtToken']) {
          localStorage.setItem('UserId',result['user']._id);
          localStorage.setItem('UserFirstName',result['user'].firstName);
          localStorage.setItem('UserLastName',result['user'].lastName);
          localStorage.setItem('UserEmail',result['user'].email);
          localStorage.setItem('UserToken',result['jwtToken']);   
          this._toastr.success("User Register Successfully",'Success');
          let data = {
            userId: result['user']._id
          }
          this.createCart(data);
          this._router.navigateByUrl('/dashboard/product-list');
        } else {
          return  this._toastr.error('error','Error');
        }
      });
    }   
  }

  createCart(data){
    this.cartService.createCart(data).subscribe((result) => {
      console.log("cart: ", result);    
    });
  }

  
  


  ngOnInit(): void {
  }

  

}
