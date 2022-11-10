import { OperatorService } from './../../../service/operator-auth/operator.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-verifiy-account-oprator',
  templateUrl: './verifiy-account-oprator.component.html',
  styleUrls: ['./verifiy-account-oprator.component.scss']
})
export class VerifiyAccountOpratorComponent implements OnInit {
  error = ''
  token = ''
    otpform = new FormGroup({
      otp: new FormControl(null, Validators.required)
    })
  constructor(private _OperatorService:OperatorService , private _Router:Router , private _GeneralService:GeneralService ) { }

  ngOnInit(): void {
  }

  
  submitOtp(otpform:FormGroup) {

    this._OperatorService.opratorverifyAccount(this.otpform.value).subscribe((res: any) => {
      if (res.status == true){
        localStorage.setItem('usertoken', res.token)
        this._GeneralService.savecurrentuser();
        this._Router.navigate(['/individual-dashboard']) 
      } else {
        this.error = res.message.otp
        console.log(this.error)
      }

    })

  }

}

