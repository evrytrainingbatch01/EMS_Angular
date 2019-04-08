import { Injectable } from '@angular/core';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { LoginDetails } from './util/loginDetails.model';
import { Observable } from 'rxjs';
import {LocalStorageService} from 'ngx-webstorage';
import { AppGlobalsService } from './app-globals.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
customerId;
  constructor(private httpClient:HttpClient,private LocalStorageService:LocalStorageService,private AppGlobals:AppGlobalsService) { 
    this.customerId=this.LocalStorageService.retrieve("custId");
  }
  checkLoginCredentials(loginDetails:LoginDetails):Observable<LoginDetails>{
 
    
  return this.httpClient.post<LoginDetails>(this.AppGlobals.baseAppUrl+"/login/"+loginDetails.uname+"/"+loginDetails.password,
  {
    headers: new HttpHeaders({
   'Content-Type':'application/json'
     })
    })
    
    
    
  }
  resetpass;
  ResetPassword(data){

//console.log("sending new password "+JSON.stringify(data))

   return this.httpClient.put(this.AppGlobals.baseAppUrl+"/login/"+this.customerId+"/"+data.newpassword+"",{});
    

  }

  
}