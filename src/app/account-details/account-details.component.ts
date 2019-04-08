import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  account_details:string[]=["Srinivasa Raoo","56789432","Savings","25000₹"]
  constructor() { }

  ngOnInit() {
  }

}
