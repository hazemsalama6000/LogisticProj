import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ClientAuthService } from './service/client-auth.service';
import { CompanyService } from './service/company-auth/company.service';
import { GeneralService } from './service/general.service';
import { OperatorService } from './service/operator-auth/operator.service';
import { OwlOptions } from 'ngx-owl-carousel-o';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  sliderbar:any=''
  slidesStore:any[]=[];
  question:any[]=[];
  questionDetalis:any=[]
  id:any =''

constructor(public translate: TranslateService , private _GeneralService:GeneralService
  ,private _ClientAuthService:ClientAuthService ,private _OperatorService:OperatorService
  ,private _CompanyService:CompanyService

  ) {
  }
  customOptions: OwlOptions = {
    rtl:this._GeneralService.lang,

    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  ngOnInit(): void {
    this.getQuestionCategory();
    this.blog();
    this._GeneralService.getlang(localStorage.getItem("currentLang"));
    this._ClientAuthService.getlang(localStorage.getItem("currentLang"));
    this._OperatorService.getlang(localStorage.getItem("currentLang"));
    this._CompanyService.getlang(localStorage.getItem("currentLang"));
    // localStorage.removeItem("usertoken");
    // this._ClientAuthService.isAuthenticated();
    this._GeneralService.slider().subscribe((res:any)=>{

      this.sliderbar = res.data;
    })
  }
  blog(){
    this._GeneralService.blogs().subscribe((res)=>{

    this.slidesStore = res.data
    })
    }
    getQuestionCategory(){
      this._GeneralService.questionCategory().subscribe((res:any)=>{

        this.getid(res.data[0].id);
         this.question = res.data

      })
      }
      getid(id:any){
        this.id = id
        this._GeneralService.questions(this.id).subscribe((res:any)=>{
        this.questionDetalis = res.data
      })
      }

}

