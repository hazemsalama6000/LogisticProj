import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifiyAccountCompanyComponent } from './comonent/verifiy-account-company/verifiy-account-company.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanySideBarComponent } from './comonent/company-side-bar/company-side-bar.component';
import { CompanyCustomerSupportComponent } from './comonent/company-customer-support/company-customer-support.component';
import { CompanyNewRequestsComponent } from './comonent/company-new-requests/company-new-requests.component';
import { CompanyOnprogressComponent } from './comonent/company-onprogress/company-onprogress.component';
import { CompanyCompletedComponent } from './comonent/company-completed/company-completed.component';
import { CompanyRepresentativesComponent } from './comonent/company-representatives/company-representatives.component';
import { CompanyNewTicketComponent } from './comonent/company-new-ticket/company-new-ticket.component';
import { CompanyticketDetalisComponent } from './comonent/companyticket-detalis/companyticket-detalis.component';
import { CompanyDashBoardComponent } from './comonent/company-dash-board/company-dash-board.component';
import { CompanyAddRepresentativeComponent } from './comonent/company-add-representative/company-add-representative.component';
import { AvailableForWorkComponent } from './comonent/available-for-work/available-for-work.component';
import { CompanyCompletedDetalisComponent } from './comonent/company-completed-detalis/company-completed-detalis.component';



@NgModule({
  declarations: [
    VerifiyAccountCompanyComponent,
    CompanySideBarComponent,
    CompanyCustomerSupportComponent,
    CompanyNewRequestsComponent,
    CompanyOnprogressComponent,
    CompanyCompletedComponent,
    CompanyRepresentativesComponent,
    CompanyNewTicketComponent,
    CompanyticketDetalisComponent,
    CompanyDashBoardComponent,
    CompanyAddRepresentativeComponent,
    AvailableForWorkComponent,
    CompanyCompletedDetalisComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    TranslateModule.forChild(),
    FormsModule
  ]
})
export class CompanyModuleModule { }
