import { Injectable } from '@angular/core';
import { HttpHeaders ,HttpClient} from '@angular/common/http';
import { UserDetails } from './util/userDetails.model';
import { Observable } from 'rxjs';
import { AccountDetails } from './util/account_details';
import {LocalStorageService} from 'ngx-webstorage';
import { TransferStatus } from './util/transferstatus.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
acc_id;
  constructor(private http:HttpClient,private LocalStorageService:LocalStorageService) {
   this.acc_id=this.LocalStorageService.retrieve("custid");
   //alert(this.acc_id);
   }
  getAllCustomerList(){
    let CustomerList=[
      {"name":"Thomas Hardy",
       "emailid":"thomashardy@mail.com",
       "password":"123456",
       "phone":"1231231231",
       "address":"89 Chiaroscuro Rd, Portland, USA"
      },
      {"name":"Dominique Perrier",
       "emailid":"dominiqueperrier@mail.com",
       "password":"123456",
       "phone":"5555735111",
       "address":"Obere Str. 57, Berlin, Germany"
      },
      {"name":"Maria Anders",
       "emailid":"mariaanders@mail.com",
       "password":"123456",
       "phone":"5559931345",
       "address":"25, rue Lauriston, Paris, France"
      },
      {"name":"sriram",
       "emailid":"sriram@mail.com",
       "password":"123456",
       "phone":"9035669251",
       "address":"25, main road, Ayodhye, India"
      }
    ];
  return CustomerList;
  }



  private url: string ='http://192.168.0.149:3759/addCustomer';



addUser(user:UserDetails):Observable<UserDetails>
{
  alert("control reached to method of service");
  alert(JSON.stringify(user));
  return this.http.post<UserDetails>(this.url,user,{
   headers: new HttpHeaders({
  'Content-Type':'application/json'
    })
   }); 
}

getAccountDetails():Observable<AccountDetails>
{
  return this.http.get<AccountDetails>("http://192.168.0.149:3759/getAccountDetails/"+this.acc_id);
}

getBalance()
{
  return this.http.get("http://192.168.0.149:3759/checkBalance/"+this.acc_id);
}

transferMoneyS(transferDetails):Observable<TransferStatus>
{
  console.log(transferDetails);
  console.log(transferDetails.fromAccount);
  console.log(transferDetails.beneficiaryAccount);
  console.log(transferDetails.amount);
 return this.http.put<TransferStatus>("http://192.168.0.149:3759/transferMoney/"+transferDetails.fromAccount+"/"+transferDetails.beneficiaryAccount+"/"+transferDetails.amount, transferDetails,
 {
  headers: new HttpHeaders({
 'Content-Type':'application/json'
   })
  }
  );
}
}
