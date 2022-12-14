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
addoperatorTicket(formData:any):Observable<any> {
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.post(this.url + 'operator/tickets',formData, option);
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
 //Add Replay Tickets:
addreplayTicket(formData:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
   return this._HttpClient.post(this.url + 'operator/ticketreplies',formData ,option )
 }
   //Add Replay Tickets:
getReplayTicketById(id:any){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'operator/ticketreplies' + '?ticket_id=' + id ,option);
  //return this.http.post('students/enroll/' + id + '?api_token=' + Auth.getApiToken(), null);

}
// ==============Service File=======================
ApplyToService(formData:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.post(this.url + 'operator/supplierfiles',formData ,option )
 }
 getAllSuppliers(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'operator/supplierfiles' +"?status="+ 2  ,option);
}
getsupplierfiles(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'operator/supplierfiles' + '?status=' + 1 ,option);
}
// ==============QUOTATION=======================
addnewquotation(formData:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.post(this.url + 'operator/quotations',formData ,option )
 }
 getAllquotations(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'operator/quotations' +"?status="+ 2 ,option);
}
getacceptquotations(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'operator/quotations' +"?status="+ 2 ,option);
}
getavailableRequests(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'operator/availableRequests' +"?status="+ 2 ,option);
}
getlang(lang:any){
this.lang = lang
}
////////////////new/////////////
deleteoperatorTickets(id:any) {
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + `operator/tickets/${id}`, option);
}
deleteticketreplies(id:any) {
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + `operator/ticketreplies/${id}`, option);
}
deletequotation(id:any) {
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + `operator/quotations/${id}`, option);
}
deleteservisefile(id:any) {
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + `operator/supplierfiles/${id}`, option);
}
getPayments(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'operator/paymenthistories' ,option);
}
getPrice(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'operator/serviceprices' ,option);
}

getNotifications(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'operator/notifications' ,option);
}
 readNotification(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'operator/notifications/readNotify' ,option )
}
deleteNotification(id:any) {
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + `operator/notifications/${id}`, option);
}
startChat(formData:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.post(this.url + 'operator/chats',formData ,option )
  }
getChats(order_id:any){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'operator/chats' +"?order_id="+ order_id,option);
  }
AddRate(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.post(this.url + 'operator/rates',formData ,option )
  }
getRates(){
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'operator/rates' ,option);
  }
Addtrack(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.post(this.url + 'operator/tracks',formData ,option )
  }
deletetrack(id:any) {
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + `operator/tracks/${id}`, option);
  }
trackOrder(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.post(this.url + 'operator/tracksById' ,formData ,option )
  }
}



