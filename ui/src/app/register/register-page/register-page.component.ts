import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  form: FormGroup;
  userId : any;

  constructor(
    private formBuilder: FormBuilder,
    private _router:Router, 
    private _toastr: ToastrService,
    private userService: UserService
  ) { 
    this.registerForm = this.formBuilder.group({
  
      id: ['', Validators.required],
     
      firstName: ['', Validators.required ],
  
      lastName: ['', Validators.required ],
     
      email: ['', [Validators.required, Validators.email]],
  
      password: ['', [Validators.required, Validators.minLength(8)]],
  
      phone: ['', Validators.required ],
  
      address: ['', Validators.required ],
      
      city: ['', Validators.required ],

      state: ['', Validators.required ],
      
      country: ['', Validators.required ],
  
      zip: ['', Validators.required ],
    });
  }

  addUser(){
    console.log("first console: ", this.registerForm);  
    this.submitted = true;
    if (this.registerForm.invalid) {
      return  this._toastr.error('Fill Form First','Error');
    }
      this.userService.userSignup(this.registerForm.value).subscribe( result => {
        console.log("second console: ",result); 
        if(result['jwtToken']) {
          this._toastr.success("User Register Successfully",'Success'); 
          this._router.navigateByUrl('/login');
        } else {
          console.log("Third console: ", "already exist");   
          this._toastr.success("User Already Exists",'Error'); 
          window.location.reload();
        }
    }); 
  }

  ngOnInit(): void {}


}
