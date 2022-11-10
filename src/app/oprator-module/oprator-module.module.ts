import { IndividualTicketkDetalisComponent } from './comonent/individual-ticketk-detalis/individual-ticketk-detalis.component';
import { IndividualNewRequestsComponent } from './comonent/individual-new-requests/individual-new-requests.component';
import { IndividualCustomerSupportComponent } from './comonent/individual-customer-support/individual-customer-support.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpratorRegisterComponent } from './comonent/oprator-register/oprator-register.component';
import { ChangePasswordComponent } from './comonent/change-password/change-password.component';
import { ResendVerifityOtpComponent } from './comonent/resend-verifity-otp/resend-verifity-otp.component';
import { SharedModule } from '../shared/shared.module';
import { VerifiyAccountOpratorComponent } from './comonent/verifiy-account-oprator/verifiy-account-oprator.component';
import { TranslateModule } from '@ngx-translate/core';
import { IndividualNewTicketComponent } from './comonent/individual-new-ticket/individual-new-ticket.component';
import { IndividualOnProgressComponent } from './comonent/individual-on-progress/individual-on-progress.component';
import { IndividualOnProgressDetalisComponent } from './comonent/individual-on-progress-detalis/individual-on-progress-detalis.component';
import { IndividualcompletedComponent } from './comonent/individualcompleted/individualcompleted.component';
import { IndividualSidebarComponent } from './comonent/individual-sidebar/individual-sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { IndividualDashboardComponent } from './comonent/individual-dashboard/individual-dashboard.component';
import { IndividualRequestDetilesComponent } from './comonent/individual-request-detiles/individual-request-detiles.component';
import { IndividulCompletedDetalisComponent } from './comonent/individul-completed-detalis/individul-completed-detalis.component';





@NgModule({
  declarations: [
    OpratorRegisterComponent,
    ChangePasswordComponent,
    ResendVerifityOtpComponent,
    VerifiyAccountOpratorComponent,
    IndividualNewTicketComponent,
    IndividualOnProgressComponent,
    IndividualOnProgressDetalisComponent,
    IndividualcompletedComponent,
    IndividualSidebarComponent,
    IndividualCustomerSupportComponent,
    IndividualNewRequestsComponent,
    IndividualSidebarComponent,
    IndividualTicketkDetalisComponent,
    IndividualDashboardComponent,
    IndividualRequestDetilesComponent,
    IndividulCompletedDetalisComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    CarouselModule,
    FormsModule,
    NgxIntlTelInputModule,
    TranslateModule.forChild(),
  ]
})
export class OpratorModuleModule { }
