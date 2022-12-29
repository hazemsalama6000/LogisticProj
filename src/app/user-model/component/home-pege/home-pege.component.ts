import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';


@Component({
  selector: 'app-home-pege',
templateUrl: './home-pege.component.html',
  styleUrls: ['./home-pege.component.scss']
})
export class HomePegeComponent implements OnInit {
  sliderbar:any=''

  constructor(private _GeneralService:GeneralService) { }
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

    // for (var i = 1; i <= 3; i++)
    // {
    //  let j = 1;
    //  while (i % j == 2)
    //  {
    //   j++;
    //  }
    //  console.log(i + " " + j);
    // }


    this._GeneralService.slider().subscribe((res:any)=>{

      this.sliderbar = res.data;
    })
  }

  }


