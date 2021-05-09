import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  updateForm : FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private _router:Router,
    private _toastr: ToastrService,
    private userService: UserService
  ) { 
    this.updateForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
   
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get formError() { return this.updateForm.controls; }

  UpdatePass(){
  //   this.submitted = true;
  //   if (this.updateForm.invalid) {   
  //     return  this._toastr.error('Fill Details First','Error');;     
  // } else {}
  // this.userService.updatePass(this.updateForm.value).subscribe(result=>{
  //   console.log(result);
  //   if(result['jwtToken']) {
  //     this._toastr.success("User Register Successfully",'Success');
  //     this._router.navigateByUrl('/login');
  //   } else {
  //     return  this._toastr.error('error','Error');
  //   }
  // });
  }

  ngOnInit(): void {
  }

}
