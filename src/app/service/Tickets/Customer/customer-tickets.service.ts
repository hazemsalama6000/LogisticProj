import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstantsComponent } from 'src/app/shared/component/global-constants/global-constants.component';
import { BaseResponseData } from '../../Model/BaseResponse';
import { Ticket } from './Model';

@Injectable({
  providedIn: 'root'
})
export class CustomerTicketsService {

  url:string = GlobalConstantsComponent.baseUrl;
  apiPassword:string =  GlobalConstantsComponent.apiPassword;
  lang:any;
  token:any

  constructor(private _HttpClient:HttpClient) {
    this.token = localStorage.getItem('usertoken') || '';
    this.lang = localStorage.getItem('currentLang') || '';
  }

  //Add Client Tickets:
  addClientTicket(formData:any):Observable<any> {
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.post(this.url + 'client/tickets',formData, option);
  }
   //Get Client Tickets:
  getClientTickets():Observable<any> {
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'client/tickets', option);
  }
  deleteClientTickets(id:any) {
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'client/tickets/${id}', option);
  }
  //Add Replay Tickets:
  addreplayTicket(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
     return this._HttpClient.post(this.url + 'client/ticketreplies',formData,option )
   }
  //Add Replay Tickets:
  getReplayTicketById(id:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'client/ticketreplies' + '?ticket_id=' + id ,option);
  }
  deleteticketreplies(id:any) {
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + `client/ticketreplies/${id}`, option);
  }
  //Add Customs Clearance
  addCustomsClearance(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
     return this._HttpClient.post(this.url + 'client/add_customs_clearance',formData ,option )
   }
  //Get Customs Clearance:
  getCustomsClearance():Observable<any> {
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'client/customs_clearance', option);
  }
  deleteCustomsClearance(id:any) {
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + `client/delete_customs_clearance/${id}`, option);
  }
  // ==============QUOTATION=======================
  acceptQuotations(formData:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.post(this.url + 'client/acceptQuotations',formData ,option )
  }
  getquotations(order_id:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'client/quotations' +"?status="+ 1 +"&order_id="+ order_id,option);
  }

  // ==============PAYMENT=======================
  AddPayment(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.post(this.url + 'client/paymenthistories',formData ,option )
  }
  getPayments():Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'client/paymenthistories' ,option);
  }
 // ==============CHATS=======================
 startChat(formData:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.post(this.url + 'client/chats',formData ,option )
  }
  getChats(order_id:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'client/chats' +"?order_id="+ order_id,option);
  }
  // ==============RATE=======================
  AddRate(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.post(this.url + 'client/rates',formData ,option )
  }
  getRates():Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'client/rates' ,option);
  }
   // ==============Notification=======================
   getNotifications():Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'client/notifications' ,option);
  }
   readNotification():Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'client/notifications/readNotify' ,option )
  }
  deleteNotification(id:any):Observable<any> {
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + `client/notifications/${id}`, option);
  }
 // ==============TRACK=======================
 trackOrder(formData:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.post(this.url + 'client/tracksById' ,formData ,option )
}
}
