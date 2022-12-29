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
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileModule } from '../profile/profile.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../guard/auth.guard';
import { AirdetailsComponent } from './component/airdetails/airdetails.component';
import { SeadetailsComponent } from './component/seadetails/seadetails.component';
import { LocaldetailsComponent } from './component/localdetails/localdetails.component';
import { AgmCoreModule } from '@agm/core';
import { SwiperModule } from "swiper/angular";


  

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsComponent } from "../shared/component/google-maps/google-maps.component";


const routes: Routes =[
{ path:"air-new-request" ,canActivate:[AuthGuard], component:AirfrieghtnewrequestComponent},
{ path:"air-send-request" ,canActivate:[AuthGuard], component:AirfrieghtsendrequestComponent},
{ path:"air-request-detiles" ,canActivate:[AuthGuard], component:AirfrieghtrequestdetailsComponent},
{ path:"sea-new-request" ,canActivate:[AuthGuard], component:SeafrieghtnewrequestComponent},
{ path:"sea-send-request" ,canActivate:[AuthGuard], component:SeafrieghtsendrequestComponent},
{ path:"sea-request-detiles" ,canActivate:[AuthGuard], component:SeafrieghtrequestdetailsComponent},
{ path:"local-new-request" ,canActivate:[AuthGuard], component:LocalfrieghtnewrequestComponent},
{ path:"local-send-request" ,canActivate:[AuthGuard], component:LocalfrieghtsendrequestComponent},
{ path:"local-request-detiles" ,canActivate:[AuthGuard], component:LocalfrieghtrequestdetailsComponent},
{ path:"air-details/:id" ,canActivate:[AuthGuard], component:AirdetailsComponent},
{ path:"local-details/:id" ,canActivate:[AuthGuard], component:LocaldetailsComponent},
{ path:"sea-details/:id" ,canActivate:[AuthGuard], component:SeadetailsComponent},
];
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
        SeafrieghtsendrequestComponent,
        AirdetailsComponent,
        SeadetailsComponent,
        LocaldetailsComponent,
        GoogleMapsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        BrowserModule,
        SharedModule,
        ProfileModule,
        ReactiveFormsModule,
        FormsModule,
        CarouselModule,
        SwiperModule,
        NgxIntlTelInputModule,
        TranslateModule.forChild(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBCYhW_5AfTwkCf4idRzIwte-ea8wYLPbY'
        }),
        
    ]
})
export class FreightModule { }
