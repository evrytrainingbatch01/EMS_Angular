import { Injectable } from '@angular/core';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { LoginDetails } from './util/loginDetails.model';
import { Observable } from 'rxjs';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
customerId;
  constructor(private httpClient:HttpClient,private LocalStorageService:LocalStorageService) { 
    this.customerId=this.LocalStorageService.retrieve("custId");
  }
  checkLoginCredentials(loginDetails:LoginDetails):Observable<LoginDetails>{
    
    alert("request reached to service method");
    alert(this.customerId);
    alert(JSON.stringify(loginDetails));
    
  return this.httpClient.post<LoginDetails>("http://192.168.0.149:3759/login/"+this.customerId+"/"+loginDetails.uname+"/"+loginDetails.password,
  {
    headers: new HttpHeaders({
   'Content-Type':'application/json'
     })
    })
    
    
    
  }
  resetpass;
  ResetPassword(data){
     let res;
console.log("sending new password "+JSON.stringify(data))

   return this.httpClient.put("http://192.168.0.149:3759/login/"+this.customerId+"/"+data.newpassword+"",{});
    
    
    

//res="success";
//alert(this.resetpass)
    //return this.resetpass;
  }

  
}