import { GeneralService } from './../../../service/general.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

GeneralService
@Component({
  selector: 'app-sectionfour',
  templateUrl: './sectionfour.component.html',
  styleUrls: ['./sectionfour.component.scss']
})
export class SectionfourComponent implements OnInit {
  slidesStore:any[]=[];

customOptions: OwlOptions = {
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
      items: 2
    },
    740: {
      items: 4
    },
    940: {
      items: 3
    }
  },
  nav: true
}
  
  constructor(private _GeneralService:GeneralService) { 
    
  }

  ngOnInit(): void {
    
    this.blog();
  }
blog(){
this._GeneralService.blogs().subscribe((res)=>{

this.slidesStore = res.data
})
}


}
