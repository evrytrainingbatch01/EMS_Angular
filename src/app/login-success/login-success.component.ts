import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

  ac_details=false;
  transfer_details=false;
  general=true;
  balance=false;
  transactions=false;
  constructor() { }

  ngOnInit() {
  }

  account_details()
  {
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
