import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstantsComponent } from './../../shared/component/global-constants/global-constants.component';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url:string = GlobalConstantsComponent.baseUrl
  apiPassword:string =  GlobalConstantsComponent.apiPassword
  lang:any;
  token:any


  constructor(private _HttpClient:HttpClient) {
    this.token = localStorage.getItem('usertoken') || '';
    this.lang = localStorage.getItem('currentLang') || '';
   }

  companyRegister(companydata:any):Observable<any>{

    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    let option ={headers:header} ;
   return this._HttpClient.post(this.url + 'company/register' ,   companydata ,  option)

  }
  companyVERifyAccountOtp(otpData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    let option ={headers:header} ;

   return this._HttpClient.post(this.url + 'company/verifyAccount' , otpData , option)
  }
  companyChangePassword(newpassword:any , token:any ):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" , token);

    let option ={headers:header} ;

   return this._HttpClient.post(this.url + 'company/changePassword' , newpassword , option)
  }
  //Add Company Tickets:
  addCompanyTicket(formData:any):Observable<any> {
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.post(this.url + 'company/tickets',formData, option);
  }
   //Get Company Tickets:
  getCompanyTickets() {
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'company/tickets', option);
  }
  //Add Replay Tickets:
  addreplayTicket(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
     return this._HttpClient.post(this.url + 'company/ticketreplies',formData ,option )
   }
     //Add Replay Tickets:
  getReplayTicketById(id:any){
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'company/ticketreplies' + '?ticket_id=' + id ,option);

  }
  ApplyToService(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.post(this.url + 'company/supplierfiles',formData ,option )
   }
   getsupplierfiles(){
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'company/supplierfiles' + '?status=' + 1 ,option);
  }
  getAllSuppliers(){
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'company/availableRequests',option);
  }
  // =======================representitive======================
  getAllresentitiveSuppliers(){
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'representative/availableRequests',option);
  }
  // ==============QUOTATION=======================
addnewquotation(formData:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.post(this.url + 'representative/quotations',formData ,option )
 }
 getAllquotations(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'representative/quotations' +"?status="+ 2  ,option);
}
// ?status=2&order_id=9   +"&order_id="+ order_id
  getlang(lang:any){

  this.lang = lang
  }



}

