import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  checkLoginCredentials(inputs){
    let res;
/*     this.httpClient.post("http://localhost:1010/SpringMVC-AMS/employee/addEmployee",
    {"name":"Das",
    "password":"123456",
    "emailId":"das@gmail.com",
    "phone":"12345678900",
    "address":"bangalore"
    })
    .subscribe(
    data  => {
    console.log("POST Request is successful ", data);
    res=data;

    },
    error  => {
    
    console.log("Error", error);
    
    }
    
    ); */
    
    res="success";
    return res;
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