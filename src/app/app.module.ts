import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from './customer.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CustomerComponent,
    SignuppageComponent,
    LoginSuccessComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [CustomerService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
