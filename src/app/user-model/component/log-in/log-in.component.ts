import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup , Validators } from '@angular/forms';
import { ClientAuthService } from 'src/app/service/client-auth.service';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
error:string=''
validatephone:boolean = false
loginform = new FormGroup({
    email: new FormControl(null, [Validators.email , Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  constructor(private _ClientAuthService:ClientAuthService, private _Router:Router , private _GeneralService:GeneralService ) {
  }

  ngOnInit(): void {
  }

  sumbnitLoginForm(loginform:FormGroup){

   this._ClientAuthService.clientLogin(this.loginform.value).subscribe((res)=>{
    if(res.type == 0)
    {
    this.validatephone = true
   }
    if(res.status == true && res.type == "client" ){
      localStorage.setItem('usertoken', res.token)
      this._GeneralService.savecurrentuser();
      this._Router.navigate(['/main-sction'])
    }
    if(res.status == true && res.type == "company" ){
      localStorage.setItem('usertoken', res.token)
      this._GeneralService.savecurrentuser();
      this._Router.navigate(['/company-dash-board'])
    }
    if(res.status == true && res.type == "operator" ){
      localStorage.setItem('usertoken', res.token)
      this._GeneralService.savecurrentuser();
      this._Router.navigate(['/individual-dashboard'])
    }
    else{
      this.error = res.message
      console.log(this.error )
    }

//console.log(res);
   })

  }

}
