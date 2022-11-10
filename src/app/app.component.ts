import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ClientAuthService } from './service/client-auth.service';
import { CompanyService } from './service/company-auth/company.service';
import { GeneralService } from './service/general.service';
import { OperatorService } from './service/operator-auth/operator.service';
CompanyService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';

constructor(public translate: TranslateService , private _GeneralService:GeneralService 
  ,private _ClientAuthService:ClientAuthService ,private _OperatorService:OperatorService 
  ,private _CompanyService:CompanyService
  ) { 



  }
  ngOnInit(): void {
    this._GeneralService.getlang(localStorage.getItem("currentLang"));
    this._ClientAuthService.getlang(localStorage.getItem("currentLang"));
    this._OperatorService.getlang(localStorage.getItem("currentLang"));
    this._CompanyService.getlang(localStorage.getItem("currentLang"));

  }

}

