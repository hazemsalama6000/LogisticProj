import { ProfileModule } from './../profile/profile.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './component/register/register.component';
import { HomePegeComponent } from './component/home-pege/home-pege.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { ActivateAccountComponent } from './component/activate-account/activate-account.component';
import { SectiontwoComponent } from './component/sectiontwo/sectiontwo.component';
import { SectionthreeeComponent } from './component/sectionthreee/sectionthreee.component';
import { SectionfourComponent } from './component/sectionfour/sectionfour.component';
import { SectionfiveComponent } from './component/sectionfive/sectionfive.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ForgotPassOtoComponent } from './component/forgot-pass-oto/forgot-pass-oto.component';
import { NewPssOtpComponent } from './component/new-pss-otp/new-pss-otp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResendVerifiyOtpComponent } from './component/resend-verifiy-otp/resend-verifiy-otp.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from '../app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  //{ path: "" ,redirectTo:"home-page", pathMatch:"full" },
  { path: "", component: HomePegeComponent },
  { path: "home-page", component: HomePegeComponent },
  { path: "register", component: RegisterComponent },
  { path: "log-in", component: LogInComponent },
  { path: "activate-account", component: ActivateAccountComponent },
  { path: "resend-verifiy-otp", component: ResendVerifiyOtpComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "new-pass-otp", component: NewPssOtpComponent },
];


@NgModule({
  declarations: [
    RegisterComponent,
    HomePegeComponent,
    LogInComponent,
    ActivateAccountComponent,
    SectiontwoComponent,
    SectionthreeeComponent,
    SectionfourComponent,
    SectionfiveComponent,
    ForgotPasswordComponent,
    ForgotPassOtoComponent,
    NewPssOtpComponent,
    ResendVerifiyOtpComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    SharedModule,
    ProfileModule,
    ReactiveFormsModule,
    CarouselModule,
    NgxIntlTelInputModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule.forChild(),

  ]
})
export class UserModelModule {


 }
