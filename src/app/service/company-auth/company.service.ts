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
  return this._HttpClient.get(this.url + 'representative/quotations' +"?status="+ 1  ,option);
}
getNotifications(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'representative/notifications' ,option);
}
readNotification(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'representative/notifications/readNotify' ,option )
}
deleteNotification(id:any) {
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + `representative/notifications/${id}`, option);
}
startChat(formData:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.post(this.url + 'representative/chats',formData ,option )
  }
getChats(order_id:any){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'representative/chats' +"?order_id="+ order_id,option);
  }
AddRate(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.post(this.url + 'representative/rates',formData ,option )
  }
getRates(){
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'representative/rates' ,option);
  }
Addtrack(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.post(this.url + 'representative/tracks',formData ,option )
  }
deletetrack(id:any) {
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + `representative/tracks/${id}`, option);
  }
trackOrder(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.post(this.url + 'representative/tracksById' ,formData ,option )
  }
///////////////////////////
deletecompanyTickets(id:any) {
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + `company/tickets/${id}`, option);
}
deleteticketreplies(id:any) {
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + `company/ticketreplies/${id}`, option);
}
deleteservisefile(id:any) {
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + `company/supplierfiles/${id}`, option);
}
getPayments(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'company/paymenthistories' ,option);
}
getPrice(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'company/serviceprices' ,option);
}
////////////////////////////REPS
repRegister(repDAta:any):Observable<any>{

  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
 return this._HttpClient.post(this.url + 'company/reperesentatives' ,   repDAta ,  option)

}
reptOtp(otpData:any):Observable<any>{
  let header = new HttpHeaders();
  // header = header.append('Access-Control-Allow-Origin', '*');
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  let option ={headers:header} ;

 return this._HttpClient.post(this.url + 'company/reperesentatives/verfiyReperesentativeOtp' , otpData , option)
}
forgetPassword(forgetpass:any):Observable<any>{

  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  let option ={headers:header} ;

 return this._HttpClient.post(this.url + 'guest/forgetPassword' , forgetpass , option)
}
resetPassword(resetPass:any):Observable<any>{

  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  let option ={headers:header} ;

 return this._HttpClient.post(this.url + 'guest/resetPassword' , resetPass , option)
}
resendVerifiy(otpresend:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  let option ={headers:header} ;

 return this._HttpClient.post(this.url + 'company/reperesentatives/resendOtp' , otpresend , option)
}
repChangePassword(newpassword:any , token:any ):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" , token);
  let option ={headers:header} ;

 return this._HttpClient.post(this.url + 'client/changePassword' , newpassword , option)
}
getAllRep(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + 'company/reperesentatives'  ,option);
}
deleteRep(id:any) {
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" ,`Bearer ${this.token}`);
  let option ={headers:header} ;
  return this._HttpClient.get(this.url + `company/reperesentatives/${id}`, option);
}
// isAuthenticated(){
//     let token:any = localStorage.getItem("usertoken")
//     // let rout:any = jwt_decode(token)
//     if (localStorage.getItem("usertoken") != null && localStorage.getItem("usertoken") != "") {
//       this.isLoggedIn = true;
//      }else{
//       this.isLoggedIn = false;
//      }

//     return this.isLoggedIn;
// }

 //+ '?status=' + 1 + '&service_id=' + 2
  getlang(lang:any){

  this.lang = lang
  }



}

