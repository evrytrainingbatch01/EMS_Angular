import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../customer.service';
import {LocalStorageService} from 'ngx-webstorage';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  localstgUserName;
  localstgUserType;
  localstgAdminStatus;
  userList;
  addUserFormData;
  checkaddUserHtml=false;
  userformdata;
  userUpdatedFormdata;
  selectedindex;
  updatedUserObj;
    constructor(private CustomerService:CustomerService, private modalService: NgbModal,private FormBuilder:FormBuilder,private LocalStorageService:LocalStorageService) { }
  
    ngOnInit() {
    this.userList=this.CustomerService.getAllCustomerList();
    this.getLocalstorage();
    this.addUserFormData=this.FormBuilder.group({
      name:[''],
      emailid:[''],
      password:[''],
      phone:[''],
      address:['']
  })
    }
    getLocalstorage(){
      this.localstgUserName=this.LocalStorageService.retrieve("usertype");
      this.localstgUserType=this.LocalStorageService.retrieve("username");
      this.localstgAdminStatus=this.LocalStorageService.retrieve("admin");
    }
    backTotable(){
      this.checkaddUserHtml=false;
    }
    addUser(){
      this.checkaddUserHtml=true;
    }
    addUserSubmit(data){
      let addnewnUserObj=data.value;
      this.userList.push(addnewnUserObj);
      this.backTotable();
  
    }
    Edit(content,index) {
    this.modalService.open(content);
    this.selectedindex=index;
    this.userformdata=this.userList[index];
    this.userUpdatedFormdata=new FormGroup({
      name:new FormControl(this.userformdata.name),
      emailid: new FormControl(this.userformdata.emailid),
      password:new FormControl(this.userformdata.password),
      phone:new FormControl(this.userformdata.phone),
      address:new FormControl(this.userformdata.address)
      }) 
    }
    UpdateUser(event){
      let data=event.value;
      this.updatedUserObj =data;
      let k=this.selectedindex;
      for(let i=0;i<this.userList.length;i++){
        if(i==k){
          this.userList[i]=this.updatedUserObj;
          this.updatedUserObj={};
        }
      }
      this.backTotable();
    }
  
    DeleteUser(index){
      alert("Are you sure want to Delete this User");
      this.userList.splice(index,1);
    }

}
