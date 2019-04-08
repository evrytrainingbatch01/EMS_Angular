import { Injectable } from '@angular/core';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { LoginDetails } from './util/loginDetails.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  checkLoginCredentials(loginDetails:LoginDetails):Observable<LoginDetails>{
    
    alert("request reached to service method");
    alert(JSON.stringify(loginDetails));
  return this.httpClient.post<LoginDetails>("http://192.168.0.149:3759/login/552/"+loginDetails.uname+"/"+loginDetails.password,loginDetails,
  {
    headers: new HttpHeaders({
   'Content-Type':'application/json'
     })
    })
    
    
    
  }

  ResetPassword(data){
     let res;
   /* this.httpClient.post("http://192.168.0.170:3759/addCustomer",
    {"name":"kumar",
    "emailId":"kumar.gs@gmail.com",
    "dateOfBirth":"2011-11-02T02:50:12.208Z",
    "address":"Madiwala",
    "city":"Bengaluru",
    "mobileNo":"12312312",
    "country":"india"
    } )
    .subscribe(
    data  => {
    console.log("POST Request is successful ", data);
    res=data;

    },
    error  => {
    
    console.log("Error", error);
    
    }
    
    );
     */
res="success";
    return res;
  }

  
}