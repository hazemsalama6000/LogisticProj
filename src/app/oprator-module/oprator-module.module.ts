import { IndividualTicketkDetalisComponent } from './comonent/individual-ticketk-detalis/individual-ticketk-detalis.component';
import { IndividualNewRequestsComponent } from './comonent/individual-new-requests/individual-new-requests.component';
import { IndividualCustomerSupportComponent } from './comonent/individual-customer-support/individual-customer-support.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
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
import { AllrequestsComponent } from './comonent/allrequests/allrequests.component';
import { QuotationsComponent } from './comonent/quotations/quotations.component';
import { NewquotationComponent } from './comonent/newquotation/newquotation.component';
import { AuthGuard } from '../guard/auth.guard';
import { ForgotPassOtoComponent } from '../user-model/component/forgot-pass-oto/forgot-pass-oto.component';
import { PaymentsComponent } from './comonent/payments/payments.component';
import { PriceComponent } from './comonent/price/price.component';
import { NotificationsComponent } from './comonent/notifications/notifications.component';
import { ChatsComponent } from './comonent/chats/chats.component';
import { AddchatComponent } from './comonent/addchat/addchat.component';
import { RatesComponent } from './comonent/rates/rates.component';
import { AddrateComponent } from './comonent/addrate/addrate.component';
import { AddtrackComponent } from './comonent/addtrack/addtrack.component';
import { TracksComponent } from './comonent/tracks/tracks.component';
import { TrackidComponent } from './comonent/trackid/trackid.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: "individual-dashboard",canActivate:[AuthGuard], component:IndividualDashboardComponent  },
  { path: "verifiy-account-oprator", component:VerifiyAccountOpratorComponent  },
  { path: "forgot-pass-oto", component:ForgotPassOtoComponent  },
  { path: "oprator-register", component:OpratorRegisterComponent  },
  { path: "individual-new-requests", canActivate:[AuthGuard],component: IndividualNewRequestsComponent  },
  { path: "individual-customer-support", canActivate:[AuthGuard],component: IndividualCustomerSupportComponent },
  { path: "individual-ticketk-detalis/:id", canActivate:[AuthGuard],component: IndividualTicketkDetalisComponent },
  { path: "individul-completed-detalis/:id", canActivate:[AuthGuard],component: IndividulCompletedDetalisComponent },
  { path: "individual-new-ticket", canActivate:[AuthGuard],component: IndividualNewTicketComponent },
  { path: "individual-on-progress", canActivate:[AuthGuard],component: IndividualOnProgressComponent },
  { path: "individual-on-progress-detalis", canActivate:[AuthGuard],component: IndividualOnProgressDetalisComponent  },
  { path: "individual-completed", canActivate:[AuthGuard],component: IndividualcompletedComponent  },
  { path: "individual-all-requests", canActivate:[AuthGuard],component:IndividualRequestDetilesComponent},
  { path: "individual-active-requests", canActivate:[AuthGuard],component:AllrequestsComponent},
  { path: "individual-all-quotations", canActivate:[AuthGuard],component:QuotationsComponent},
  { path: "individual-new-quotation/:id", canActivate:[AuthGuard],component:NewquotationComponent},

  { path: "all-price", canActivate:[AuthGuard],component: PriceComponent },
  { path: "all-paymetns", canActivate:[AuthGuard],component: PaymentsComponent },
  { path: "all-notifications", canActivate:[AuthGuard],component: NotificationsComponent },
  { path: "new-chat/:id", canActivate:[AuthGuard],component: AddchatComponent },
  { path: "all-chats/:id", canActivate:[AuthGuard],component: ChatsComponent  },
  { path: "new-rate/:id", canActivate:[AuthGuard],component: AddrateComponent  },
  { path: "all-rates", canActivate:[AuthGuard],component:RatesComponent},
  { path: "new-track/:id", canActivate:[AuthGuard],component:TrackidComponent},
  { path: "all-tracks/:id", canActivate:[AuthGuard],component:TracksComponent},
  // { path: "trackById/:id", canActivate:[AuthGuard],component:TrackidComponent},
];




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
    AllrequestsComponent,
    QuotationsComponent,
    NewquotationComponent,
    PaymentsComponent,
    PriceComponent,
    NotificationsComponent,
    ChatsComponent,
    AddchatComponent,
    RatesComponent,
    AddrateComponent,
    AddtrackComponent,
    TracksComponent,
    TrackidComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    CarouselModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgxIntlTelInputModule,
    TranslateModule.forChild(),
  ]
})
export class OpratorModuleModule { }
  