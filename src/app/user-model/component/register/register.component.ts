
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientAuthService } from 'src/app/service/client-auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxIntlTelInputModule, SearchCountryField } from 'ngx-intl-tel-input';
import { CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isMatching: boolean = true;
  email: string = ''

  phone: string = ''

  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  showPassword: boolean = false;

  regsiterForm = new FormGroup({
    name: new FormControl(null,
       [Validators.required , Validators.minLength(2), Validators.maxLength(150)]),
    email: new FormControl(null, 
      [Validators.required, Validators.email]),
    password: new FormControl(null, 
      [Validators.required, Validators.minLength(8),Validators.maxLength(25)]),
    password_confirmation: new FormControl(null, 
      [Validators.required, Validators.minLength(8), Validators.maxLength(250)]),
    phone: new FormControl(null,
       [Validators.required , Validators.min(12) ,Validators.max(20)]),

  })



  constructor(private _ClientAuthService: ClientAuthService, private _Router: Router, public translate: TranslateService) {

  }


  ngOnInit(): void {

  }


  submitRegister(regsiterForm: FormGroup) {


    this.regsiterForm.value.phone = this.regsiterForm.value.phone.e164Number;

    this._ClientAuthService.clientRegister(this.regsiterForm.value).subscribe((res: any) => {

      if (res.status == true) {

        this._Router.navigate(['/activate-account'])
      } else {
        this.email = res.message.email
        this.phone = res.message.phone

      }


    })
  }
  checkPasswordMatch() {

    if (this.regsiterForm.controls["password"].value == this.regsiterForm.controls["password_confirmation"].value ) {

      this.isMatching = true

    } else {

      this.isMatching = false

    }
  }
  
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
