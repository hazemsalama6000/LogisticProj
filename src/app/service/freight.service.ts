import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstantsComponent } from '../shared/component/global-constants/global-constants.component';

@Injectable({
  providedIn: 'root'
})
export class FreightService {
  url:string = GlobalConstantsComponent.baseUrl;
  apiPassword:string =  GlobalConstantsComponent.apiPassword;
  lang:any;
  token:any
  constructor(private _HttpClient:HttpClient)
  {
    this.token = localStorage.getItem('usertoken') || '';
    this.lang = localStorage.getItem('currentLang') || '';
  }

   //Add Local Freight:
   addLocalFreight(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
     return this._HttpClient.post(this.url + 'client/add_local_freight',formData ,option )
   }
   //Get Local Freight:
   getLocalFreight() {
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'client/local_freight', option);
  }

   //Add Air Freight:
   addAirFreight(formData:any):Observable<any>{
      let header = new HttpHeaders();
      header = header.append("lang" , this.lang);
      header = header.append("Apipassword" , this.apiPassword);
      header = header.append("Authorization" ,`Bearer ${this.token}`);
      let option ={headers:header} ;
       return this._HttpClient.post(this.url + 'client/add_air_freight',formData ,option )
     }
   //Get Air Freight:
   getAirFreight() {
      let header = new HttpHeaders();
      header = header.append("lang" , this.lang);
      header = header.append("Apipassword" , this.apiPassword);
      header = header.append("Authorization" ,`Bearer ${this.token}`);
      let option ={headers:header} ;
      return this._HttpClient.get(this.url + 'client/air_freight', option);
    }

   //Add Sea Freight:
   addSeaFreight(formData:any):Observable<any>{
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
     return this._HttpClient.post(this.url + 'client/add_sea_freight',formData ,option )
   }
   //Get Sea Freight:
   getSeaFreight() {
    let header = new HttpHeaders();
    header = header.append("lang" , this.lang);
    header = header.append("Apipassword" , this.apiPassword);
    header = header.append("Authorization" ,`Bearer ${this.token}`);
    let option ={headers:header} ;
    return this._HttpClient.get(this.url + 'client/sea_freight', option);
  }
}
