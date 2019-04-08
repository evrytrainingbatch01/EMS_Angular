import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgbModal ,NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';
import {LocalStorageService} from 'ngx-webstorage';
import { LoginDetails } from '../util/loginDetails.model';
import { NullAstVisitor } from '@angular/compiler';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCredentials:FormGroup;
  loginResponse;
  UpdatedCustomerPassword;
  SuccessMessage=false;
responseOfResetPassword;
loginDetails:LoginDetails=null;
  constructor(private FormBuilder:FormBuilder,private router:Router,private LoginService:LoginService,private modalService: NgbModal,private alertConfig:NgbAlertConfig,private LocalStorageService:LocalStorageService) { }

  ngOnInit() {
    this.loginCredentials=this.FormBuilder.group({
      uname:['',Validators.required],
      password:['',Validators.required]
    })
  }
  
  
 //the function for submitting the login form 
LoginUserSubmit(data){
console.log(data.value);
//call service------ for check Login Credentials
if(data.value.uname!=null && data.value.password ){
this.LoginService.checkLoginCredentials(data.value)
.subscribe(
  data  => {
  console.log("POST Response is ", data);
  this.loginResponse=data;
  console.log(JSON.stringify(this.loginResponse));
  if(this.loginResponse!=null)
  {
    this.LocalStorageService.store("accId",this.loginResponse.customeAccountId);
    this.LocalStorageService.store("custName",this.loginResponse.name);
  //  document.getElementById("success").innerHTML="Hi..."+this.userdetails.name+" something went wrong . Please try again";
  this.router.navigate(['/LoginSuccess'])
}else{
  alert("Username or Password entered are wrong . please verify and try again.") ; 
    
   }

  },
  error  => {
    alert("Username or Password entered are wrong . please verify and try again.") ; 
  console.log("Error", error);
  
  }
  
  ); 

}else{
alert(" Login or password Empty Please give valid Credentials !! ");
}

}


forgotPassword(content){
  alert("want to change password");
  this.modalService.open(content);
  this.UpdatedCustomerPassword=new FormGroup({
    email: new FormControl(),
    newpassword:new FormControl()
    }) 
}
 //the function for  submitting the Reset Password form 
ResetPassword(data){
 
  //call service------for Reset Password
  this.responseOfResetPassword= this.LoginService.ResetPassword(data.value)
  .subscribe(
    data  => {
    console.log("PUT Request is successful ", data);
    this.responseOfResetPassword=data;
  if(this.responseOfResetPassword){
    this.alertConfig.type='success';
    this.SuccessMessage=true;
  }else{
    alert("some thing went wrong");
  }
    },
    error  => {
      console.log("Error", error);
      alert("some thing went wrong");
    }
    
    );
}
//close the popup
close(){

  this.alertConfig.dismissible=true;
}

}
