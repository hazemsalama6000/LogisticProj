import { Router } from '@angular/router';
import { OperatorService } from './../../../service/operator-auth/operator.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { NgxIntlTelInputModule, SearchCountryField } from 'ngx-intl-tel-input';
import { CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { CompanyService } from 'src/app/service/company-auth/company.service';



@Component({
  selector: 'app-oprator-register',
  templateUrl: './oprator-register.component.html',
  styleUrls: ['./oprator-register.component.scss']
})
export class OpratorRegisterComponent implements OnInit {

  errorIndividual = '';



  model = '';

  isMatching: boolean = true;
  email: string = '';
  password: string = '';
  password_confirmation: string = '';
  phone: string = '';
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  showPassword: boolean = false;
  opratorRegisterForm = new FormGroup({
    name: new FormControl(null, [Validators.required , Validators.maxLength(150) , Validators.minLength(2)]),
    password: new FormControl(null, [Validators.required, Validators.maxLength(25) , Validators.minLength(8)]),
    password_confirmation: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required]),

  })


  constructor(private _OperatorService: OperatorService, private _Router: Router, private _CompanyService: CompanyService) { }

  ngOnInit(): void {
  }





  submentform(opratorRegisterForm: FormGroup) {
    this.opratorRegisterForm.value.phone = this.opratorRegisterForm.value.phone.e164Number;

    if (this.model === "Individual") {
      this._OperatorService.opratorRegister(this.opratorRegisterForm.value).subscribe((res: any) => {
        if (res.status == true) {
          this._Router.navigate(['/verifiy-account-oprator'])
          console.log(res)

        } else {
          this.errorIndividual = res.message.email
          this.errorIndividual = res.message.phone
          console.log("hohofffffho")
        }
      })

    }
    if (this.model === "Company") {
      console.log(this.model);
      this._CompanyService.companyRegister(this.opratorRegisterForm.value).subscribe((res: any) => {
        console.log(res);
        if (res.status == true) {
          this._Router.navigate(['/verifiy-account-company'])
          console.log(res)

        } else {
          this.errorIndividual = res.message.email
          this.errorIndividual = res.message.phone
          console.log("hohofffffho")
        }
      })

    }


  }


  checkPasswordMatch() {

    if (this.opratorRegisterForm.controls["password"].value == this.opratorRegisterForm.controls["password_confirmation"].value) {

      this.isMatching = true

    } else {

      this.isMatching = false

    }
  }



  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }
  getvalueOption() {
  }
   
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
