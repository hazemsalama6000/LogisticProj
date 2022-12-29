import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../app/guard/auth.guard';
const routes: Routes = [

    // main pages User Module
    // ---------------------------------
    { path:' "register"',loadChildren:()=>import('./user-model/user-model.module').then(m=>m.UserModelModule)},
    { path:' "log-in"',loadChildren:()=>import('./user-model/user-model.module').then(m=>m.UserModelModule)},
    { path:' ""',loadChildren:()=>import('./user-model/user-model.module').then(m=>m.UserModelModule)},
    { path:' "activate-account"',loadChildren:()=>import('./user-model/user-model.module').then(m=>m.UserModelModule)},
    { path:' "resend-verifiy-otp"',loadChildren:()=>import('./user-model/user-model.module').then(m=>m.UserModelModule)},
    { path:' "forgot-password"',loadChildren:()=>import('./user-model/user-model.module').then(m=>m.UserModelModule)},
    { path:' "new-pass-otp"',loadChildren:()=>import('./user-model/user-model.module').then(m=>m.UserModelModule)},
    // ---------------------------------

    //  operator  Module
    // ---------------------------------
    { path:  "oprator-register",loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path:  "verifiy-account-oprator",loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path:  "forgot-pass-oto",loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path:  "individual-dashboard",canActivate:[AuthGuard],loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path:  "faq",loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path:  "pricing",loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path:  "about-us",loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path:  "learn-about-us",loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},

    { path: "individual-new-requests" ,canActivate:[AuthGuard],loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path: "individual-customer-support" ,canActivate:[AuthGuard],loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path: "individual-ticketk-detalis/:id" ,canActivate:[AuthGuard],loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path: "individul-completed-detalis/:id" ,canActivate:[AuthGuard],loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path: "individual-new-ticket" ,canActivate:[AuthGuard],loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path: "individual-on-progress" ,canActivate:[AuthGuard],loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path: "individual-on-progress-detalis" ,canActivate:[AuthGuard],loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path: "individual-completed" ,canActivate:[AuthGuard],loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path: "individual-all-requests" ,canActivate:[AuthGuard],loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path: "individual-active-requests" ,canActivate:[AuthGuard],loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path: "individual-all-quotations" ,canActivate:[AuthGuard],loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},
    { path: "individual-new-quotation/:id" ,canActivate:[AuthGuard],loadChildren: () => import('./oprator-module/oprator-module.module').then(m => m.OpratorModuleModule)},

    { path: "all-price", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "all-paymetns", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "all-notifications", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "new-chat/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "all-chats/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "new-rate/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "all-rates", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "new-track/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "all-tracks/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    // { path: "trackById/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},

    // ---------------------------------


    // dashboard Module
    // ---------------------------------
    { path:  "main-sction",canActivate:[AuthGuard],loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule)},
    { path:  "ticket-details/:id" ,canActivate:[AuthGuard],loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule)},
    { path: "customer-support", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "new-ticket", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "send-requests", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "requst-details/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "Completed", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "on-progress", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "offer-details", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "new-request", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)} ,
    { path: "completed-detalis", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "on-progress-detlis", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "approve-offer", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "client-quotation/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "send-request", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "new-cpayment/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "all-cpaymetns", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "new-cchat/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "all-cchats/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "new-crate/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "all-crates", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "new-cnotification", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "all-cnotifications", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "local-service", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "international-service", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "details/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "air-details/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "local-details/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "sea-details/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},
    { path: "ctrack/:id", canActivate:[AuthGuard],loadChildren:()=>import('./dash-board/dash-board.module').then(m=>m.DashBoardModule)},

    // ---------------------------------


    // profile-module
    // ---------------------------------
    { path: "edit-informations", canActivate:[AuthGuard],loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule)},
    { path: "notification-setting", canActivate:[AuthGuard],loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule)},
    { path: "change-password", canActivate:[AuthGuard],loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule)},
    { path: "change-langauge", canActivate:[AuthGuard],loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule)},
    // ---------------------------------


    // Company-module
    // ---------------------------------
    { path: "verifiy-account-company", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "company-customer-support", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "company-new-ticket", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "companyticket-detalis/:id", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "company-new-requests", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "company-onprogress", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "company-completed", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "company-representatives", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "company-all-requests", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "company-active-requests", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "company-dash-board", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "company-add-representative", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "company-payment", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "company-price", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},

    // { path: "company-edit-representative", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "available-for-work", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "company-completed-detalis", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "representative-dashboard", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},

    { path: "representative-all-requests", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "representative-all-quotations", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "representative-new-quotation/:id", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "representative-details/:id", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "representative-all-notifications", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "representative-new-chat/:id", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "representative-all-chats/:id", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "representative-new-rate/:id", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "representative-all-rates", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "representative-new-track/:id", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},
    { path: "representative-all-tracks/:id", loadChildren:()=>import('./company-module/company-module.module').then(m=>m.CompanyModuleModule)},

    // ---------------------------------

    // freight-module
    // ---------------------------------
    {path: "air-new-request", loadChildren: () => import('./freight/freight.module').then(m => m.FreightModule)},
    {path: "air-send-request", loadChildren: () => import('./freight/freight.module').then(m => m.FreightModule)},
    {path: "air-request-detiles", loadChildren: () => import('./freight/freight.module').then(m => m.FreightModule)},
    {path: "sea-new-request", loadChildren: () => import('./freight/freight.module').then(m => m.FreightModule)},
    {path: "sea-send-request", loadChildren: () => import('./freight/freight.module').then(m => m.FreightModule)},
    {path: "sea-request-detiles", loadChildren: () => import('./freight/freight.module').then(m => m.FreightModule)},
    {path: "local-new-request", loadChildren: () => import('./freight/freight.module').then(m => m.FreightModule)},
    {path: "local-send-request", loadChildren: () => import('./freight/freight.module').then(m => m.FreightModule)},
    {path: "local-request-detiles", loadChildren: () => import('./freight/freight.module').then(m => m.FreightModule)},
    // ---------------------------------
    // { path: "**", redirectTo: "/", pathMatch: "full" },

];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
