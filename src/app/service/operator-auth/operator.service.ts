import { Observable, BehaviorSubject } from 'rxjs';
import { GlobalConstantsComponent } from './../../shared/component/global-constants/global-constants.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  url:string = GlobalConstantsComponent.baseUrl
  apiPassword:string =  GlobalConstantsComponent.apiPassword
  lang:any;
  token:any


  constructor(private _HttpClient:HttpClient) {
    this.token = localStorage.getItem('usertoken') || '';
    this.lang = localStorage.getItem('currentLang') || '';
   }


  opratorRegister(opratorDAta:any):Observable<any>{

    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    let option ={headers:header} ;
   return this._HttpClient.post(this.url + 'operator/register' ,   opratorDAta ,  option)

  }
  opratorverifyAccount(otpData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    let option ={headers:header} ;

   return this._HttpClient.post(this.url + 'operator/verifyAccount' , otpData , option)
  }
  opratorChangePassword(newpassword:any ,token:any ):Observable<any>{

    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" , token);

    let option ={headers:header} ;
   return this._HttpClient.post(this.url + 'operator/changePassword' ,option, newpassword   )
  }
//Add Operator Tickets:
addoperatorTicket(formoperator:any):Observable<any> {
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.post(this.url + 'operator/tickets',formoperator, option);
}
 //Get Client Tickets:
getoperatorTickets() {
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'operator/tickets', option);
}

getlang(lang:any){

this.lang = lang
}
}



