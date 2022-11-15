import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstantsComponent } from '../shared/component/global-constants/global-constants.component';

@Injectable({
  providedIn: 'root'
})


export class ClientAuthService {

  url:string = GlobalConstantsComponent.baseUrl;
  apiPassword:string =  GlobalConstantsComponent.apiPassword;
  lang:any;

  constructor(private _HttpClient:HttpClient) {}

  clientRegister(clientDAta:any):Observable<any>{

    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    let option ={headers:header} ;
   return this._HttpClient.post(this.url + 'client/register' ,   clientDAta ,  option)

  }
  clientLogin(loginData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    // header = header.append("Authorization" , token);
    let option ={headers:header} ;
    return this._HttpClient.post(this.url + 'guest/login' , loginData , option )

  }
  clientOtp(otpData:any):Observable<any>{
    let header = new HttpHeaders();
    // header = header.append('Access-Control-Allow-Origin', '*');
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    let option ={headers:header} ;

   return this._HttpClient.post(this.url + 'client/verifyAccount' , otpData , option)
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

   return this._HttpClient.post(this.url + 'client/resendVerifiyOtp' , otpresend , option)
  }
  clinedChangePassword(newpassword:any , token:any ):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" , token);
    let option ={headers:header} ;

   return this._HttpClient.post(this.url + 'client/changePassword' , newpassword , option)
  }



getlang(lang:any){

this.lang = lang
}

}

