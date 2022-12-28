import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MatSliderModule } from '@angular/material/slider';
import { UserModelModule } from './user-model/user-model.module';
import { DashBoardModule } from './dash-board/dash-board.module';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CompanyModuleModule } from './company-module/company-module.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpratorModuleModule } from './oprator-module/oprator-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader } from '@ngx-translate/core';
import { FreightModule } from './freight/freight.module';
import { GoogleMapsComponent } from './shared/component/google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';
// import { SectiontwoComponent } from './user-model/component/sectiontwo/sectiontwo.component';
// import { SectionthreeeComponent } from './user-model/component/sectionthreee/sectionthreee.component';
// import { SectionfiveComponent } from './user-model/component/sectionfive/sectionfive.component';
// import { SectionfourComponent } from './user-model/component/sectionfour/sectionfour.component';


@NgModule({
  declarations: [
    AppComponent,
    // SectiontwoComponent,
    // SectionthreeeComponent,
    // SectionfourComponent,
    // SectionfiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSliderModule,
    UserModelModule,
    CompanyModuleModule,
    OpratorModuleModule,
    FreightModule,
    DashBoardModule,
    CommonModule,
    ProfileModule,
    HttpClientModule,
    ProfileModule,
    NgxIntlTelInputModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBCYhW_5AfTwkCf4idRzIwte-ea8wYLPbY'
    }),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
