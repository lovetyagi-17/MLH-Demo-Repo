import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThankyoupageComponent } from './dashboard/thankyoupage/thankyoupage.component';

import { RegisterPageComponent } from "../register/register-page/register-page.component"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './dashboard/products/products.component';
import { ProductinfoComponent } from './dashboard/productinfo/productinfo.component';
import { CartComponent } from './dashboard/cart/cart.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    DashboardComponent, 
    ThankyoupageComponent,
    RegisterPageComponent,
    ProductsComponent,
    ProductinfoComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainPageModule { }
