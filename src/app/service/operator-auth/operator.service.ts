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
  lang:any


  constructor(private _HttpClient:HttpClient) {

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
  

getlang(lang:any){

this.lang = lang
}
}



