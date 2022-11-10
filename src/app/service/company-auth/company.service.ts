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
  lang:any


  constructor(private _HttpClient:HttpClient) {

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

  getlang(lang:any){
  
  this.lang = lang
  }
  
  

}

