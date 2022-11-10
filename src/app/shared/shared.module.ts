
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from '../dash-board/component/sidebar/sidebar.component';
import { FAQComponent } from './component/faq/faq.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { FinderComponent } from './component/finder/finder.component';
import { ProfileSideBarComponent } from './component/profile-side-bar/profile-side-bar.component';
import { GlobalConstantsComponent } from './component/global-constants/global-constants.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    FAQComponent,
    PricingComponent,
    AboutUsComponent,
    FinderComponent,
    ProfileSideBarComponent,
    GlobalConstantsComponent,
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild(),
    BrowserModule,
   

  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ProfileSideBarComponent,
   

  ]
})

export class SharedModule { }
