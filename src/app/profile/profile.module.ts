import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './compnent/change-password/change-password.component';
import { ChangeLangaugeComponent } from './compnent/change-langauge/change-langauge.component';
import { EditInformationsComponent } from './compnent/edit-informations/edit-informations.component';
import { NotificationSettingComponent } from './compnent/notification-setting/notification-setting.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../guard/auth.guard';

const routes :Routes = [
    { path: "edit-informations",canActivate:[AuthGuard], component: EditInformationsComponent },
    { path: "notification-setting",canActivate:[AuthGuard], component: NotificationSettingComponent },
    { path: "change-password",canActivate:[AuthGuard], component: ChangePasswordComponent },
    { path: "change-langauge",canActivate:[AuthGuard], component: ChangeLangaugeComponent },
];

@NgModule({
  declarations: [
    ChangePasswordComponent,
    ChangeLangaugeComponent,
    EditInformationsComponent,
    NotificationSettingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    TranslateModule.forChild(),
  ]
})
export class ProfileModule { }
