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
  apiPassword:string = GlobalConstantsComponent.apiPassword;
  lang:any;
  token:any

  constructor(private _HttpClient:HttpClient) { 
    this.token = localStorage.getItem('usertoken') || '';
    this.lang = localStorage.getItem('currentLang') || '';
  }

  //Get Client Tickets:
  getClientTickets(): Observable<BaseResponseData<Ticket>> {
    let header = new HttpHeaders();
    header.append("lang" , this.lang);
    header.append("Apipassword" , "as@#@as");
    header.append("Authorization", this.token);
    let option = {headers:header};
  
    return this._HttpClient.get<BaseResponseData<Ticket>>(this.url + 'client/tickets', option);
  }

}
