import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';
import {CreateCustomerComponent } from '../views/create-customer/create-customer.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'login', component: LoginComponent},
  {path:'creater-customer', component:CreateCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
