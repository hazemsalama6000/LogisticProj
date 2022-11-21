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
  getClientTickets() {
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'client/tickets', option);
  }
  //Add Replay Tickets:
  addreplayTicket(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
     return this._HttpClient.post(this.url + 'client/ticketreplies',formData ,option )
   }
     //Add Replay Tickets:
  getReplayTicketById(id:any){
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'client/ticketreplies' + '?ticket_id=' + id ,option);
    //return this.http.post('students/enroll/' + id + '?api_token=' + Auth.getApiToken(), null);

  }
  //Add Replay Tickets:
  addCustomsClearance(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
     return this._HttpClient.post(this.url + 'client/add_customs_clearance',formData ,option )
   }
}
