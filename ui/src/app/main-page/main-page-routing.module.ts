import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserguradGuard } from '../services/usergurad.guard';
import { CartComponent } from './dashboard/cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductinfoComponent } from './dashboard/productinfo/productinfo.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { ThankyoupageComponent } from './dashboard/thankyoupage/thankyoupage.component';

const routes: Routes = [
  {
    path: "profile",
    component: DashboardComponent,
    canActivate: [UserguradGuard]
  },
  {
    path: "product-list",
    component: ProductsComponent,
    canActivate: [UserguradGuard]
  },
  {
    path: "product-detail/:id",
    component: ProductinfoComponent,
    canActivate: [UserguradGuard] 
  },
  {
    path: "cart/:id",
    component: CartComponent,
    canActivate: [UserguradGuard] 
  },
  {
    path: "thank-you",
    component: ThankyoupageComponent,
    canActivate: [UserguradGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
