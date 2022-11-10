import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientAuthService } from 'src/app/service/client-auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
errer =''

forgetPassPhoneNumber = new FormGroup ({
 
  phone: new FormControl(null, [Validators.required , Validators.minLength(10) , Validators.maxLength(20)])

})


  constructor(private _ClientAuthService:ClientAuthService , private _Router:Router ) { }

  ngOnInit(): void {
  }

  forgetpas(forgetPassPhoneNumber:FormGroup){

    this._ClientAuthService.forgetPassword(this.forgetPassPhoneNumber.value).subscribe((res)=>{

      if(res.status == true){
           this._Router.navigate(['/forgot-pass-oto'])

      }else{

        this.errer = res.message
      }

    })

  }
}
