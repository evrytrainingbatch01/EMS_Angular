import { Injectable } from '@angular/core';
import { HttpHeaders ,HttpClient} from '@angular/common/http';
import { UserDetails } from './util/userDetails.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
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



  private url: string ='http://192.168.0.170:3759/addCustomer';


//   getEmployees():Observable<IEmployee[]>{
//     return this.http.get<IEmployee[]>(this.url)
//     .pipe(tap(data => alert(JSON.stringify(data))) , catchError(this.errorHandler))
// }
// errorHandler(error: HttpErrorResponse){
// return observableThrowError(error.message || "Server Error");
// }

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
}
