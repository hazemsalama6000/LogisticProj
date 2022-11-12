import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstantsComponent } from '../shared/component/global-constants/global-constants.component';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
url:string = GlobalConstantsComponent.baseUrl
apiPassword:string =  GlobalConstantsComponent.apiPassword
lang:any
userToken = new BehaviorSubject(null);

 constructor(private _HttpClient:HttpClient) {
    if(localStorage.getItem("usertoken") != null){
      this.savecurrentuser();
    }
  }

   savecurrentuser(){
    // if (localStorage.getItem('token')) {
    //   let token:any= localStorage.getItem('usertoken')
    //   this.userToken.next(token);
    // }
    let token:any= localStorage.getItem('usertoken')
    this.userToken.next(token);
  }

aboutUs():Observable<any>{

 let header = new HttpHeaders();
 header = header.append("lang" , this.lang);
 header = header.append("Apipassword" , this.apiPassword);
  return this._HttpClient.get(this.url + 'guest/abouts' ,{headers:header} )
}


team():Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
   return this._HttpClient.get(this.url + 'guest/teams' ,{headers:header} )
 }

 topics():Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
   return this._HttpClient.get(this.url + 'guest/topics' ,{headers:header} )
 }

 topicsDetalis(id:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
   return this._HttpClient.get(this.url + `guest/topics-detail/${id}` ,{headers:header} )

 }
 blogs():Observable<any>{

  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
   return this._HttpClient.get(this.url + 'guest/blogs' ,{headers:header} )
 }
 packages():Observable<any>{

  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
   return this._HttpClient.get(this.url + 'guest/packages' ,{headers:header} )
 }
getComment(){

  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
   return this._HttpClient.get(this.url + 'guest/packages' ,{headers:header} )
}
slider(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
   return this._HttpClient.get(this.url + 'guest/sliders' ,{headers:header} )


}
questionCategory(){
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
   return this._HttpClient.get(this.url + 'guest/questionCategory' ,{headers:header} )


}
questions(id:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
   return this._HttpClient.get(this.url + `guest/questions/${id}` ,{headers:header} )

 }
 companylogout(token:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" , token);

  let option ={headers:header} ;

 return this._HttpClient.post(this.url + 'company/logout' , option)
}

cliendLogOut(token:any):Observable<any>{

  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" , token);
  let option ={headers:header} ;

 return this._HttpClient.post(this.url + 'client/logout' ,option)
}

opratorlogout(token:any):Observable<any>{
  let header = new HttpHeaders();
  header = header.append("lang" , this.lang);
  header = header.append("Apipassword" , this.apiPassword);
  header = header.append("Authorization" , token);

  let option ={headers:header} ;

 return this._HttpClient.post(this.url + 'operator/logout' , option)
}


getlang(lang:any):Observable<any>{

return this.lang = lang
}

}
