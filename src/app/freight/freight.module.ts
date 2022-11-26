import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalfrieghtnewrequestComponent } from './component/localfrieghtnewrequest/localfrieghtnewrequest.component';
import { LocalfrieghtsendrequestComponent } from './component/localfrieghtsendrequest/localfrieghtsendrequest.component';
import { LocalfrieghtrequestdetailsComponent } from './component/localfrieghtrequestdetails/localfrieghtrequestdetails.component';
import { AirfrieghtrequestdetailsComponent } from './component/airfrieghtrequestdetails/airfrieghtrequestdetails.component';
import { AirfrieghtsendrequestComponent } from './component/airfrieghtsendrequest/airfrieghtsendrequest.component';
import { AirfrieghtnewrequestComponent } from './component/airfrieghtnewrequest/airfrieghtnewrequest.component';
import { SeafrieghtnewrequestComponent } from './component/seafrieghtnewrequest/seafrieghtnewrequest.component';
import { SeafrieghtrequestdetailsComponent } from './component/seafrieghtrequestdetails/seafrieghtrequestdetails.component';
import { SeafrieghtsendrequestComponent } from './component/seafrieghtsendrequest/seafrieghtsendrequest.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileModule } from '../profile/profile.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LocalfrieghtnewrequestComponent,
    LocalfrieghtsendrequestComponent,
    LocalfrieghtrequestdetailsComponent,
    AirfrieghtrequestdetailsComponent,
    AirfrieghtsendrequestComponent,
    AirfrieghtnewrequestComponent,
    SeafrieghtnewrequestComponent,
    SeafrieghtrequestdetailsComponent,
    SeafrieghtsendrequestComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    SharedModule,
    ProfileModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    NgxIntlTelInputModule,
    TranslateModule.forChild(),

  ]
})
export class FreightModule { }
