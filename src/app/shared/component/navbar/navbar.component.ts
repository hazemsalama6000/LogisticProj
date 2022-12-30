import { GeneralService } from 'src/app/service/general.service';

import jwt_decode from "jwt-decode";
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';






@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // isLogin: boolean = false;
  currentLang?: string;
  ischange: boolean = false;
  body: any
  lang: any
  token:any
  islogin:boolean = false

  constructor(public translate: TranslateService , private _Router:Router , private _GeneralService:GeneralService ) {
    translate.setDefaultLang('en');
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang)
    
    
    _GeneralService.userToken.subscribe(()=>{
      if(_GeneralService.userToken.getValue() !=null)
      {
        this.islogin=true
      }else{
        this.islogin=false
      }
    })


  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  changeCurrentLang(lang: string) {
    window.location.reload();
    const body = document.getElementsByTagName('body');
    if (lang == "ar") {
      body[0].setAttribute('dir', 'rtl')
      this.translate.use(lang)
        localStorage.setItem('currentLang', 'ar')
    } else {
      this.translate.use(lang)
      body[0].setAttribute('dir', 'ltr')
      localStorage.setItem('currentLang', 'en')
    }
  }

  ngOnInit(): void {
    let lang = localStorage.getItem('currentLang');
    const body = document.getElementsByTagName('body');
    if (lang == "ar") {
      body[0].setAttribute('dir', 'rtl');
      this.translate.use(lang);
      localStorage.setItem('currentLang', 'ar');
    } else {
      body[0].setAttribute('dir', 'ltr')
      localStorage.setItem('currentLang', 'en')
    }
   const token = localStorage.getItem("usertoken")
    
  }
  logOut(){

  let token:any = localStorage.getItem("usertoken")
  let rout:any = jwt_decode(token)

  if(rout.type == "client" ){
    this._GeneralService.cliendLogOut(token).subscribe((res)=>{
     this._GeneralService.savecurrentuser();
    localStorage.removeItem("usertoken");
    this._Router.navigate(['/']);
    this.islogin = false;
    });

  }
  if(rout.type == "company" ){
    this._GeneralService.companylogout(token).subscribe((res)=>{
      this._GeneralService.savecurrentuser();
      localStorage.removeItem("usertoken");
      this._Router.navigate(['/'])
      this.islogin = false;
    });
  }
  if(rout.type == "operator" ){
    this._GeneralService.opratorlogout(token).subscribe((res)=>{
      this._GeneralService.savecurrentuser();
      localStorage.removeItem("usertoken")
      this._Router.navigate(['/'])
      this.islogin = false;

    });
  }
    if(rout.type == "representative" ){
      this._GeneralService.replogout(token).subscribe((res)=>{
        this._GeneralService.savecurrentuser();
        localStorage.removeItem("usertoken")
        this._Router.navigate(['/'])
        this.islogin = false;

      });

  }


  }


}
