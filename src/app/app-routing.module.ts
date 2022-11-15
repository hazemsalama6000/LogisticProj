import { IndividualNewRequestsComponent } from './oprator-module/comonent/individual-new-requests/individual-new-requests.component';
import { IndividualCustomerSupportComponent } from './oprator-module/comonent/individual-customer-support/individual-customer-support.component';
import { VerifiyAccountOpratorComponent } from './oprator-module/comonent/verifiy-account-oprator/verifiy-account-oprator.component';
import { ForgotPassOtoComponent } from './user-model/component/forgot-pass-oto/forgot-pass-oto.component';
import { ActivateAccountComponent } from './user-model/component/activate-account/activate-account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePegeComponent } from './user-model/component/home-pege/home-pege.component';
import { LogInComponent } from './user-model/component/log-in/log-in.component';
import { RegisterComponent } from './user-model/component/register/register.component';
import { ForgotPasswordComponent } from './user-model/component/forgot-password/forgot-password.component';
import { NewPssOtpComponent } from './user-model/component/new-pss-otp/new-pss-otp.component';
import { MainSectionComponent } from './dash-board/component/sections/main-section/main-section.component';
import { FAQComponent } from './shared/component/faq/faq.component';
import { PricingComponent } from './shared/component/pricing/pricing.component';
import { AboutUsComponent } from './shared/component/about-us/about-us.component';
import { CustomerSupportComponent } from './dash-board/component/customer-support/customer-support.component';
import { NewTicketComponent } from './dash-board/component/new-ticket/new-ticket.component';
import { TicketDetailsComponent } from './dash-board/component/ticket-details/ticket-details.component';
import { LearnAboutUsComponent } from './dash-board/component/learn-about-us/learn-about-us.component';
import { EditInformationsComponent } from './profile/compnent/edit-informations/edit-informations.component';
import { NotificationSettingComponent } from './profile/compnent/notification-setting/notification-setting.component';
import { ChangePasswordComponent } from './profile/compnent/change-password/change-password.component';
import { ChangeLangaugeComponent } from './profile/compnent/change-langauge/change-langauge.component';
import { SnedRequestsComponent } from './dash-board/component/sned-requests/sned-requests.component';
import { OfferDetailsComponent } from './dash-board/component/offer-details/offer-details.component';
import { RequetDetailsComponent } from './dash-board/component/requet-details/requet-details.component';
import { ResendVerifiyOtpComponent } from './user-model/component/resend-verifiy-otp/resend-verifiy-otp.component';
import { OpratorRegisterComponent } from './oprator-module/comonent/oprator-register/oprator-register.component';
import { VerifiyAccountCompanyComponent } from './company-module/comonent/verifiy-account-company/verifiy-account-company.component';
import { OnProgressComponent } from './dash-board/component/on-progress/on-progress.component';
import { CompletedComponent } from './dash-board/component/completed/completed.component';
import { NewRequestComponent } from './dash-board/component/new-request/new-request.component';
import { CompletedDetalisComponent } from './dash-board/component/completed-detalis/completed-detalis.component';
import { OnProgressDetlisComponent } from './dash-board/component/on-progress-detlis/on-progress-detlis.component';
import { IndividualTicketkDetalisComponent } from './oprator-module/comonent/individual-ticketk-detalis/individual-ticketk-detalis.component';
import { IndividulCompletedDetalisComponent } from './oprator-module/comonent/individul-completed-detalis/individul-completed-detalis.component';
import { IndividualNewTicketComponent } from './oprator-module/comonent/individual-new-ticket/individual-new-ticket.component';
import { IndividualOnProgressComponent } from './oprator-module/comonent/individual-on-progress/individual-on-progress.component';
import { IndividualOnProgressDetalisComponent } from './oprator-module/comonent/individual-on-progress-detalis/individual-on-progress-detalis.component';
import { IndividualcompletedComponent } from './oprator-module/comonent/individualcompleted/individualcompleted.component';
import { IndividualDashboardComponent } from './oprator-module/comonent/individual-dashboard/individual-dashboard.component';
import { CompanyDashBoardComponent } from './company-module/comonent/company-dash-board/company-dash-board.component';
import { CompanyNewRequestsComponent } from './company-module/comonent/company-new-requests/company-new-requests.component';
import { CompanyOnprogressComponent } from './company-module/comonent/company-onprogress/company-onprogress.component';
import { CompanyCompletedComponent } from './company-module/comonent/company-completed/company-completed.component';
import { CompanyRepresentativesComponent } from './company-module/comonent/company-representatives/company-representatives.component';
import { CompanyCustomerSupportComponent } from './company-module/comonent/company-customer-support/company-customer-support.component';
import { CompanyNewTicketComponent } from './company-module/comonent/company-new-ticket/company-new-ticket.component';
import { CompanyticketDetalisComponent } from './company-module/comonent/companyticket-detalis/companyticket-detalis.component';
import { CompanyAddRepresentativeComponent } from './company-module/comonent/company-add-representative/company-add-representative.component';
import { AvailableForWorkComponent } from './company-module/comonent/available-for-work/available-for-work.component';
import { IndividualRequestDetilesComponent } from './oprator-module/comonent/individual-request-detiles/individual-request-detiles.component';
import { CompanyCompletedDetalisComponent } from './company-module/comonent/company-completed-detalis/company-completed-detalis.component';
import { ApproveOfferComponent } from './dash-board/component/approve-offer/approve-offer.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "log-in", component: LogInComponent },
  { path: "home-page", component: HomePegeComponent },
  { path: "activate-account", component: ActivateAccountComponent },
  { path: "oprator-register", component: OpratorRegisterComponent },
  { path: "verifiy-account-oprator", component: VerifiyAccountOpratorComponent },
  { path: "new-pass-otp", component: NewPssOtpComponent },
  { path: "forgot-pass-oto", component: ForgotPassOtoComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "main-sction", component: MainSectionComponent },
  { path: "faq", component: FAQComponent },
  { path: "pricing", component: PricingComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "learn-about-us", component: LearnAboutUsComponent },
  { path: "customer-support", component: CustomerSupportComponent },
  { path: "new-ticket", component: NewTicketComponent },
  { path: "ticket-details", component: TicketDetailsComponent },
  { path: "edit-informations", component: EditInformationsComponent },
  { path: "notification-setting", component: NotificationSettingComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "change-langauge", component: ChangeLangaugeComponent },
  { path: "offer-details", component: OfferDetailsComponent },
  { path: "send-requests", component: SnedRequestsComponent },
  { path: "requst-details", component: RequetDetailsComponent },
  { path: "resend-verifiy-otp", component: ResendVerifiyOtpComponent },
  { path: "verifiy-account-company", component: VerifiyAccountCompanyComponent },
  { path: "Completed", component: CompletedComponent },
  { path: "new-request", component: NewRequestComponent },
  { path: "on-progress", component: OnProgressComponent },
  { path: "approve-offer", component:ApproveOfferComponent },
  { path: "completed-detalis", component: CompletedDetalisComponent },
  { path: "on-progress-detlis", component: OnProgressDetlisComponent },
  { path: "individual-customer-support", component: IndividualCustomerSupportComponent },
  { path: "individual-new-requests", component: IndividualNewRequestsComponent },
  { path: "individual-ticketk-detalis", component: IndividualTicketkDetalisComponent },
  { path: "individual-new-ticket", component: IndividualNewTicketComponent },
  { path: "individual-on-progress", component: IndividualOnProgressComponent },
  { path: "individual-on-progress-detalis", component: IndividualOnProgressDetalisComponent },
  { path: "individul-completed-detalis", component: IndividulCompletedDetalisComponent },
  { path: "individual-completed", component: IndividualcompletedComponent },
  { path: "individual-dashboard", component:IndividualDashboardComponent },
  { path: "company-dash-board", component:CompanyDashBoardComponent},
  { path: "company-new-requests", component:CompanyNewRequestsComponent},
  { path: "company-onprogress", component:CompanyOnprogressComponent},
  { path: "company-completed", component:CompanyCompletedComponent},
  { path: "company-representatives", component:CompanyRepresentativesComponent},
  { path: "company-customer-support", component:CompanyCustomerSupportComponent},
  { path: "company-new-ticket", component:CompanyNewTicketComponent},
  { path: "companyticket-detalis", component:CompanyticketDetalisComponent},
  { path: "company-add-representative", component:CompanyAddRepresentativeComponent},
  { path: "available-for-work", component:AvailableForWorkComponent},
  { path: "company-completed-detalis", component:CompanyCompletedDetalisComponent},
  { path: "individual-request-detiles", component:IndividualRequestDetilesComponent},

  { path: "**", redirectTo: "home-page", pathMatch: "full" },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
