import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { OperatorService } from './../../../service/operator-auth/operator.service';
import { ClientAuthService } from 'src/app/service/client-auth.service';
import { CompanyService } from 'src/app/service/company-auth/company.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  isMatching: boolean = true;
  error:any = ''

  changepass = new FormGroup({
    oldPassword: new FormControl(null ,
      [Validators.required , Validators.minLength(8) , Validators.maxLength(25)]),
    password: new FormControl(null ,
      [Validators.required, Validators.minLength(8) , Validators.maxLength(25)]),
    password_confirmation: new FormControl(null ,
      [Validators.required, Validators.minLength(8) , Validators.maxLength(25)])

  })
  constructor(private _OperatorService:OperatorService ,
    private _CompanyService:CompanyService , private _ClientAuthService:ClientAuthService , private _Router:Router) { }

  ngOnInit(): void {
  }
  
  changpass(changepass:FormGroup){

    let token:any = localStorage.getItem("usertoken")
    let rout:any = jwt_decode(token)

    if(rout.type == "client" ){
      
      this._ClientAuthService.clinedChangePassword(this.changepass.value ,token).subscribe((res:any)=>{
          if(res.status == true){
            console.log(res)
            alert('The account number has changed')
            this._Router.navigate(['/main-sction'])
          }  else{
            this.error = res.message
          }

      });
    }
  if(rout.type == "company" ){
     
      this._CompanyService.companyChangePassword(this.changepass.value , token).subscribe((res:any)=>{
        if(res.status == true){
          alert('The account number has changed')
          this._Router.navigate(['/company-dash'])
        }  else{
          this.error = res.message
        }

      });
   
    }
   if(rout.type == "operator" ){

      this._OperatorService.opratorChangePassword(this.changepass.value , token).subscribe((res:any)=>{

        if(res.status == true){
          alert('The account number has changed')
          this._Router.navigate(['/individual-dash'])
        } else{
          this.error = res.message
        } 
      })
   
    }
    else{
      this.error = "You are  not registered "
    }

  
    }

    checkPasswordMatch() {

      if (this.changepass.controls["password"].value == this.changepass.controls["password_confirmation"].value ) {
  
        this.isMatching = true
  
      } else {
  
        this.isMatching = false
  
      }
    }
}
