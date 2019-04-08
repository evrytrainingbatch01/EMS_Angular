import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AccountDetails } from '../util/account_details';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

  acDetailsResponse;
  ac_details=false;
  transfer_details=false;
  general=true;
  balance=false;
  transactions=false;
  constructor(private _servicetospringboot: CustomerService) { }

  ngOnInit() {
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
  checkbalance()
    {
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
}
