import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,FormsModule,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import { CustomerService } from '../customer.service';
import { UserDetails } from '../util/userdetails.model';
import { isNull } from '@angular/compiler/src/output/output_ast';
import {LocalStorageService} from 'ngx-webstorage';



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
singupResponse=null;
  constructor(private formbuilder:FormBuilder,private _servicetospringboot: CustomerService,private router:Router, private LocalStorageService:LocalStorageService) { }

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
    this.singupResponse=data;
    //console.log(data.id);
    console.log(data.password);
    console.log(this.singupResponse);

    if(this.singupResponse.name==null)
 {
  document.getElementById("success").innerHTML="Hi..."+this.userdetails.name+" something went wrong . Please try again";
 }
  else{
    alert("Please note Login id and password for login purpose. Login Id: "+this.singupResponse.id+
    "  Password:  "+this.singupResponse.password);
    this.LocalStorageService.store("custId",this.singupResponse.id);
  this.router.navigate(['/Login'])
  }
 },
 error  => {
    
  console.log("Error", error);
  if(error!=null)
 {
  document.getElementById("success").innerHTML="Hi..."+this.userdetails.name+" something went wrong . Please try again";
 }
  
  }

  
 );

 

}

  




}
