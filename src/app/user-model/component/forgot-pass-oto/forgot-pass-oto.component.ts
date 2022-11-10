import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientAuthService } from 'src/app/service/client-auth.service';

@Component({
  selector: 'app-forgot-pass-oto',
  templateUrl: './forgot-pass-oto.component.html',
  styleUrls: ['./forgot-pass-oto.component.scss']
})
export class ForgotPassOtoComponent implements OnInit {
error = ''
resend = new FormGroup({
  otp:new FormControl(null , [Validators.required]),
  password:new FormControl(null , [Validators.required , Validators.minLength(8) , Validators.maxLength(20)]),
  password_confirmation:new FormControl(null , [Validators.required , Validators.minLength(8) , Validators.maxLength(20)]),
})
  constructor(private _ClientAuthService:ClientAuthService , private _Router:Router ) { }

  ngOnInit(): void {
  }
  resendClindeOtp(resend:FormGroup){

    this._ClientAuthService.resetPassword(this.resend.value).subscribe((res)=>{
      if(res.status == true && res.message =="site.Your Password Reset Successfully" ){
          this._Router.navigate(['/main-sction'])
      }else{
        this.error = res.message
        console.log(this.error);
      }
    })

  }
  

}
