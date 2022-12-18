import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifiyAccountCompanyComponent } from './comonent/verifiy-account-company/verifiy-account-company.component';
import { RouterModule, Routes } from '@angular/router';
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
import { AllrequestcomComponent } from './comonent/allrequestcom/allrequestcom.component';
import { DetailsrequestcomComponent } from './comonent/detailsrequestcom/detailsrequestcom.component';
import { AuthGuard } from '../guard/auth.guard';
import { RepresentetivedashboardComponent } from './comonent/representetivedashboard/representetivedashboard.component';
import { AllreprequestsComponent } from './comonent/allreprequests/allreprequests.component';
import { QuotationsrepComponent } from './comonent/quotationsrep/quotationsrep.component';
import { RepresentetivesidebarComponent } from './comonent/representetivesidebar/representetivesidebar.component';
import { NewquotationrepComponent } from './comonent/newquotationrep/newquotationrep.component';
import { PaymentsComponent } from './comonent/payments/payments.component';
import { PriceComponent } from './comonent/price/price.component';
import { RepdetailsComponent } from './comonent/repdetails/repdetails.component';
import { RnotificationsComponent } from './comonent/rnotifications/rnotifications.component';
import { RaddrateComponent } from './comonent/raddrate/raddrate.component';
import { RratesComponent } from './comonent/rrates/rrates.component';
import { RchatsComponent } from './comonent/rchats/rchats.component';
import { RaddchatComponent } from './comonent/raddchat/raddchat.component';
import { RaddtrackComponent } from './comonent/raddtrack/raddtrack.component';
import { RtracksComponent } from './comonent/rtracks/rtracks.component';



const routes : Routes=[
    { path: "verifiy-account-company", component: VerifiyAccountCompanyComponent},
    { path: "company-customer-support", component:CompanyCustomerSupportComponent ,canActivate:[AuthGuard]},
    { path: "company-new-ticket", component:CompanyNewTicketComponent ,canActivate:[AuthGuard]},
    { path: "companyticket-detalis/:id", component:CompanyticketDetalisComponent ,canActivate:[AuthGuard]},
    { path: "company-new-requests", component:CompanyNewRequestsComponent,canActivate:[AuthGuard]},
    { path: "company-onprogress", component:CompanyOnprogressComponent,canActivate:[AuthGuard]},
    { path: "company-completed", component:CompanyCompletedComponent,canActivate:[AuthGuard]},

    { path: "company-representatives", component:CompanyRepresentativesComponent,canActivate:[AuthGuard]},
    { path: "company-all-requests", component:DetailsrequestcomComponent ,canActivate:[AuthGuard]},
    { path: "company-active-requests", component:AllrequestcomComponent ,canActivate:[AuthGuard]},
    { path: "company-dash-board", component:CompanyDashBoardComponent ,canActivate:[AuthGuard]},
    { path: "company-add-representative", component:CompanyAddRepresentativeComponent ,canActivate:[AuthGuard]},
    { path: "company-payment", component:PaymentsComponent ,canActivate:[AuthGuard]},
    { path: "company-price", component:PriceComponent ,canActivate:[AuthGuard]},


    { path: "available-for-work", component:AvailableForWorkComponent ,canActivate:[AuthGuard]},
    { path: "company-completed-detalis", component:CompanyCompletedDetalisComponent ,canActivate:[AuthGuard]},
    { path: "representative-dashboard", component:RepresentetivedashboardComponent,canActivate:[AuthGuard]},

    { path: "representative-all-requests", component:AllreprequestsComponent ,canActivate:[AuthGuard]},
    { path: "representative-new-quotation/:id", component:NewquotationrepComponent,canActivate:[AuthGuard]},
    { path: "representative-all-quotations", component:QuotationsrepComponent,canActivate:[AuthGuard]},
    { path: "representative-details/:id", component:RepdetailsComponent,canActivate:[AuthGuard]},
    { path: "representative-all-notifications", canActivate:[AuthGuard],component: RnotificationsComponent },
    { path: "representative-new-chat/:id", canActivate:[AuthGuard],component: RaddchatComponent },
    { path: "representative-all-chats/:id", canActivate:[AuthGuard],component: RchatsComponent  },
    { path: "representative-new-rate/:id", canActivate:[AuthGuard],component: RaddrateComponent  },
    { path: "representative-all-rates", canActivate:[AuthGuard],component:RratesComponent},
    { path: "representative-new-track/:id", canActivate:[AuthGuard],component:RaddtrackComponent},
    { path: "representative-all-tracks/:id", canActivate:[AuthGuard],component:RtracksComponent},
]


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
    AllrequestcomComponent,
    DetailsrequestcomComponent,
    RepresentetivedashboardComponent,
    AllreprequestsComponent,
    QuotationsrepComponent,
    NewquotationrepComponent,
    RepresentetivesidebarComponent,
    PaymentsComponent,
    PriceComponent,
    RnotificationsComponent,
    RaddrateComponent,
    RratesComponent,
    RchatsComponent,
    RaddchatComponent,
    RaddtrackComponent,
    RtracksComponent,
    RepdetailsComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    TranslateModule.forChild(),
    FormsModule
  ]
})
export class CompanyModuleModule { }
