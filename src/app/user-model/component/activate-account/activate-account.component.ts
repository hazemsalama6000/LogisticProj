import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClientAuthService } from 'src/app/service/client-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit {
  error = ''
  token = ''
  otpform = new FormGroup({
    otp: new FormControl(null, Validators.required)
  })
  phoneNum = "";
  constructor(private _ClientAuthService: ClientAuthService, private _Router: Router, private _GeneralService: GeneralService, private activated: ActivatedRoute) {
    activated.params.subscribe((data: any) => {
      this.phoneNum = data['phoneNumber'].replace(/\s/g, "");;
    });
  }

  ngOnInit(): void {
  }

  submitOtp(otpform: FormGroup) {

    this._ClientAuthService.clientOtp(this.otpform.value.otp,this.phoneNum).subscribe((res: any) => {

      if (res.status == true) {
        this._Router.navigate(['/main-sction'])
        localStorage.setItem('usertoken', res.token);
        this._GeneralService.savecurrentuser();
      } else {

        this.error = res.message.otp
      }

    })

  }
}
