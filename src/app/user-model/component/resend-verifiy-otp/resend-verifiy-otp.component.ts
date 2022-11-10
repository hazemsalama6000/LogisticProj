import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientAuthService } from 'src/app/service/client-auth.service';


@Component({
  selector: 'app-resend-verifiy-otp',
  templateUrl: './resend-verifiy-otp.component.html',
  styleUrls: ['./resend-verifiy-otp.component.scss']
})
export class ResendVerifiyOtpComponent implements OnInit {
  error ='';

  resend = new FormGroup({
    phone:new FormControl(null , [Validators.required]),

  });
  

  constructor(private _ClientAuthService:ClientAuthService , private _Router:Router ) { }

  ngOnInit(): void {
  }
  resendgetpas(resend:FormGroup){

    this._ClientAuthService.resendVerifiy(this.resend.value).subscribe((res:any)=>{
      
           if(res.status == true){
            console.log(res)
             this._Router.navigate(['/activate-account'])
           }else{  
            this.error = res.message
            console.log(this.error)
           }
    })

  }
}
