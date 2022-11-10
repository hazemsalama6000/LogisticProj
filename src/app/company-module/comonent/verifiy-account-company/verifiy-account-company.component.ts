import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company-auth/company.service';
import { GeneralService } from 'src/app/service/general.service';


@Component({
  selector: 'app-verifiy-account-company',
  templateUrl: './verifiy-account-company.component.html',
  styleUrls: ['./verifiy-account-company.component.scss']
})
export class VerifiyAccountCompanyComponent implements OnInit {
  error = ''

    otpform = new FormGroup({
      otp: new FormControl(null, Validators.required)
    })
  constructor(private _CompanyService:CompanyService ,private _Router:Router , private _GeneralService:GeneralService) { }

  ngOnInit(): void {
  }
  submitOtp(otpform:FormGroup) {
    console.log(otpform)
    this._CompanyService.companyVERifyAccountOtp(this.otpform.value).subscribe((res: any) => {
    
      if (res.status == true){
        localStorage.setItem('usertoken', res.token)
        this._GeneralService.savecurrentuser()
        this._Router.navigate(['/company-dash-board'])  


      } else {

        this.error = res.message.otp
        console.log(this.error)
      }

    })

  }

}
