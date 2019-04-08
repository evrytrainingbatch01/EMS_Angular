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
loginDetails:LoginDetails=null;
  constructor(private FormBuilder:FormBuilder,private router:Router,private LoginService:LoginService,private modalService: NgbModal,private alertConfig:NgbAlertConfig,private lss:LocalStorageService) { }

  ngOnInit() {
    this.loginCredentials=this.FormBuilder.group({
      uname:['',Validators.required],
      password:['',Validators.required]
    })
  }
  
  
  response;
  LoginUserSubmit(data){
console.log(data);
// this.loginDetails.uname=data.value.uname;
// this.loginDetails.password=data.value.password;
//call service
if(data.value.uname==undefined && data.value.password==undefined){
  alert("Please make sure to enter the username and password before submitting ");

  }
  else{
    this.LoginService.checkLoginCredentials(this.loginDetails)
  .subscribe(
    data  => {
    console.log("POST Response is ", data);
    this.loginResponse=data;
    console.log(JSON.stringify(this.loginResponse));
    if(this.loginResponse.uname==null)
    {
    //  document.getElementById("success").innerHTML="Hi..."+this.userdetails.name+" something went wrong . Please try again";
  alert("Username or Password entered are wrong . please verify and try again.") ; 
  }
     else{
      //  alert("Please note Login id and password for login purpose. Login Id: "+this.singupResponse.loginId+
      //  "  Password:  "+this.singupResponse.password);
     this.router.navigate(['/LoginSuccess'])
     }

    },
    error  => {
    
    console.log("Error", error);
    
    }
    
    ); 

   
  }   
//   if(this.response=="success"){
//   this.Router.navigate(['/LoginSuccess']);
//   }else{
//   alert("wrong Login or password Please give valid Credentials !! ");
//   }

// }else{
//   alert(" Login or password Empty Please give valid Credentials !! ");
// }
//this.response=this.LoginService.check();
//alert(JSON.stringify(this.response));
//this.Router.navigate(['/Customer']);
  
  // UpdatedCustomerPassword;
  // forgotPassword(content){
  //   //alert("want to change password");
  //   this.modalService.open(content);
  //   this.UpdatedCustomerPassword=new FormGroup({
  //     email: new FormControl(),
  //     newpassword:new FormControl()
  //     }) 
  // }
  // SuccessMessage=false;
  // responseOfResetPassword;
  // ResetPassword(data){
  //   alert(JSON.stringify(data.value));
  //   //call service------
  //   this.responseOfResetPassword= this.LoginService.ResetPassword(data.value);

  //   //alert(JSON.stringify(this.responseOfResetPassword));
  //   if(this.responseOfResetPassword=="success"){
  //     this.alertConfig.type='success';
  //     this.SuccessMessage=true;
  //   }

  // }
  // close(){
 
  //   this.alertConfig.dismissible=true;
  // }

}}
