import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgbModal ,NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCredentials:FormGroup;
  constructor(private FormBuilder:FormBuilder,private Router:Router,private LoginService:LoginService,private modalService: NgbModal,private alertConfig:NgbAlertConfig) { }

  ngOnInit() {
    this.loginCredentials=this.FormBuilder.group({
      uname:['',Validators.required],
      password:['',Validators.required]
    })
  }
  response;
  LoginUserSubmit(data){
console.log(data.value);
//call service
if(data.value.uname!=null && data.value.password ){
  this.response=this.LoginService.checkLoginCredentials(data.value);
  if(this.response=="success"){
  this.Router.navigate(['/LoginSuccess']);
  }else{
  alert("wrong Login or password Please give valid Credentials !! ");
  }

}else{
  alert(" Login or password Empty Please give valid Credentials !! ");
}
//this.response=this.LoginService.check();
//alert(JSON.stringify(this.response));
//this.Router.navigate(['/Customer']);
  }
  UpdatedCustomerPassword;
  forgotPassword(content){
    //alert("want to change password");
    this.modalService.open(content);
    this.UpdatedCustomerPassword=new FormGroup({
      email: new FormControl(),
      newpassword:new FormControl()
      }) 
  }
  SuccessMessage=false;
  responseOfResetPassword;
  ResetPassword(data){
    alert(JSON.stringify(data.value));
    //call service------
    this.responseOfResetPassword= this.LoginService.ResetPassword(data.value);

    //alert(JSON.stringify(this.responseOfResetPassword));
    if(this.responseOfResetPassword=="success"){
      this.alertConfig.type='success';
      this.SuccessMessage=true;
    }

  }
  close(){
 
    this.alertConfig.dismissible=true;
  }

}
