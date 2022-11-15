import { RouterModule } from '@angular/router';
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
import { ReactiveFormsModule } from '@angular/forms';


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
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
   ReactiveFormsModule

  ]
})
export class DashBoardModule { }
