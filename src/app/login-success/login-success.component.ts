import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AccountDetails } from '../util/account_details';
import {LocalStorageService} from 'ngx-webstorage';
import {FormGroup,FormControl,FormBuilder,FormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {
  customer_id;
  customer_name;
  acDetailsResponse;
  ac_details=false;
  transfer_details=false;
  general=true;
  balance=false;
  transactions=false;
  transferDetails;
  constructor(private _servicetospringboot: CustomerService,private LocalStorageService:LocalStorageService,private formbuilder:FormBuilder) {

    this.customer_name=this.LocalStorageService.retrieve("custname");
    this.customer_id=this.LocalStorageService.retrieve("custid");
   }

  ngOnInit() {

    this.transferDetails=this.formbuilder.group({
      fromAccount:['',Validators.required],
      beneficiaryAccount:[''],
      amount:[''],
      

    })
  }

  account_details()
  {

    this._servicetospringboot.getAccountDetails()
    .subscribe(
      (data:AccountDetails)=>{
        console.log(JSON.stringify(data));
        this.acDetailsResponse=data;
        console.log(data.id);
        console.log(data.accountBalance);
        console.log(this.acDetailsResponse);
    
        if(this.acDetailsResponse.accountBalance==null)
     {
      alert("Something went wrong . plesae try again ");
     }
      
     },
     error  => {
        
      console.log("Error", error);
      if(error!=null)
     {
      alert("Something went wrong . plesae try again ");
     }
      
      }
    
      
     );
    this.ac_details=true;
   this.transfer_details=false;
    this.general=false;
    this.balance=false;
    this.transactions=false;
  }
  transfer()
  {
    this.transfer_details=true;
    this.ac_details=false;
    this.general=false;
    this.balance=false;
    this.transactions=false;
    
  }
  balanceResponse;
  checkbalance()
    {
      this._servicetospringboot.getBalance()
      .subscribe(
        (data)=>{
          console.log(JSON.stringify(data));
          this.balanceResponse=data;
          
          
          
      
          if(this.balanceResponse==null)
       {
        alert("Something went wrong . plesae try again ");
       }
        
       },
       error  => {
          
        console.log("Error", error);
        if(error!=null)
       {
        alert("Something went wrong . plesae try again ");
       }
        
        }
      
        
       );
      this.balance=true;
      this.transfer_details=false;
      this.ac_details=false;
      this.general=false;
      this.transactions=false;
      
    }
  
checktransactions(){
  this.transactions=true;
  this.balance=false;
  this.transfer_details=false;
  this.ac_details=false;
  this.general=false;
  
}

transferMoney(data)
{
console.log(data.value);
}
}
