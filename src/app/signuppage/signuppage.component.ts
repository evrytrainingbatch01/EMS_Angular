import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,FormsModule,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import { CustomerService } from '../customer.service';
import { UserDetails } from '../util/userdetails.model';



@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  cities:String[]=["Marathahalli","BTM Layout","HSR Layout","Banashankari","Basavanagudi","Domlur","Jayanagar","Koramangala","Rajajinagar","Sadashivanagar","Nagarbhavi","Whitefield"];
  countries:String[]=["India","Canada","USA","Afghanistan","Argentina","Egypt","Poland","Swaziland","Zimbabwe",""]
registration_details:FormGroup;
userdetails:UserDetails=new UserDetails();
  constructor(private formbuilder:FormBuilder,private _servicetospringboot: CustomerService) { }

  ngOnInit() {

    this.registration_details=this.formbuilder.group({
      name:['',Validators.required],
      emailId:[''],
      dateOfBirth:[''],
      address:[''],
      city:[''],
      country:[''],
      mobileNo:['']

    })
  }
  onClick(data)
  {
console.log(data);

document.getElementById("success").innerHTML="Hi..."+data.value.name+"  you are  registered successfully. Please Login";



this.userdetails.name=data.value.name;
this.userdetails.emailId=data.value.emailId;
this.userdetails.dateOfBirth=data.value.dateOfBirth;
this.userdetails.address=data.value.address;
this.userdetails.city=data.value.city;
this.userdetails.country=data.value.country;
this.userdetails.mobileNo=data.value.mobileNo;
alert(JSON.stringify(this.userdetails));
this._servicetospringboot.addUser(this.userdetails)
.subscribe(
  (data:UserDetails)=>{
    console.log(JSON.stringify(data));
 }
 );
  }

  

  




}
