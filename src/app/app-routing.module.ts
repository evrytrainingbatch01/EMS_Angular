import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { LoginSuccessComponent } from './login-success/login-success.component';

const routes: Routes = [
  {path:"Login", component:LoginComponent},
  {path:"Home", component:HomeComponent},
  {path:"Customer", component:CustomerComponent},
  {path:"Signup", component:SignuppageComponent},
  {path:"LoginSuccess", component:LoginSuccessComponent},
  {path:"",redirectTo:"Home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,LoginComponent,CustomerComponent,SignuppageComponent]; 
