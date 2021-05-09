import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [LoginPageComponent, PasswordComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
  ]
})
export class LoginModule { }
