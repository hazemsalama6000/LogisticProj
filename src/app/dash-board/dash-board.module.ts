import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectiononeComponent } from './component/sections/sectionone/sectionone.component';
import { SectionTwoComponent } from './component/sections/section-two/section-two.component';
import { SectionThreeComponent } from './component/sections/section-three/section-three.component';
import { SectionFuorComponent } from './component/sections/section-fuor/section-fuor.component';
import { CityComponent } from './component/newRequests/city/city.component';
import { MainSectionComponent } from './component/sections/main-section/main-section.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerSupportComponent } from './component/customer-support/customer-support.component';
import { NewTicketComponent } from './component/new-ticket/new-ticket.component';
import { TicketDetailsComponent } from './component/ticket-details/ticket-details.component';
import { LearnAboutUsComponent } from './component/learn-about-us/learn-about-us.component';
import { SnedRequestsComponent } from './component/sned-requests/sned-requests.component';
import { RequetDetailsComponent } from './component/requet-details/requet-details.component';
import { OnProgressComponent } from './component/on-progress/on-progress.component';
import { CompletedComponent } from './component/completed/completed.component';
import { NewRequestComponent } from './component/new-request/new-request.component';
import { CompletedDetalisComponent } from './component/completed-detalis/completed-detalis.component';
import { OnProgressDetlisComponent } from './component/on-progress-detlis/on-progress-detlis.component';
import { CustomCearanceDetalisComponent } from './component/custom-cearance-detalis/custom-cearance-detalis.component';
import { ApproveOfferComponent } from './component/approve-offer/approve-offer.component';
import { OfferDetailsComponent } from './component/offer-details/offer-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../guard/auth.guard';
import { CustomsendComponent } from './component/customsend/customsend.component';
import { ClientqouteComponent } from './component/clientqoute/clientqoute.component';

const routes : Routes = [
  { path:"main-sction", component:MainSectionComponent ,canActivate:[AuthGuard] },
  { path: "ticket-details/:id", component: TicketDetailsComponent ,canActivate:[AuthGuard] },
  { path: "customer-support", component: CustomerSupportComponent ,canActivate:[AuthGuard] },
  { path: "new-ticket", component: NewTicketComponent ,canActivate:[AuthGuard] },
  { path: "send-requests", component: SnedRequestsComponent ,canActivate:[AuthGuard] },
  { path: "requst-details/:id", component: RequetDetailsComponent ,canActivate:[AuthGuard] },
  { path: "Completed", component: CompletedComponent ,canActivate:[AuthGuard] },
  { path: "on-progress", component: OnProgressComponent ,canActivate:[AuthGuard] },
  { path: "offer-details", component: OfferDetailsComponent ,canActivate:[AuthGuard] },
  { path: "new-request", component: NewRequestComponent ,canActivate:[AuthGuard] },
  { path: "completed-detalis", component: CompletedDetalisComponent ,canActivate:[AuthGuard] },
  { path: "on-progress-detlis", component: OnProgressDetlisComponent ,canActivate:[AuthGuard] },
  { path: "approve-offer", component:ApproveOfferComponent ,canActivate:[AuthGuard] },
  { path: "client-quotation/:id", component:ClientqouteComponent ,canActivate:[AuthGuard] },
  { path: "send-request", component: CustomsendComponent ,canActivate:[AuthGuard]  },
];



@NgModule({
  declarations: [
    SectiononeComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFuorComponent,
    CityComponent,
    MainSectionComponent,
    CustomerSupportComponent,
    NewTicketComponent,
    TicketDetailsComponent,
    LearnAboutUsComponent,
    SnedRequestsComponent,
    RequetDetailsComponent,
    OnProgressComponent,
    CompletedComponent,
    NewRequestComponent,
    CompletedDetalisComponent,
    OnProgressDetlisComponent,
    CustomCearanceDetalisComponent,
    ApproveOfferComponent,
    OfferDetailsComponent,
    CustomsendComponent,
    ClientqouteComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class DashBoardModule { }
