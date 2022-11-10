import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';
GeneralService
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  pricings:any[]=[]
  constructor(private _GeneralService:GeneralService) { }

  ngOnInit(): void {
    this.getpricing();
  }

  getpricing(){
    this._GeneralService.packages().subscribe((res:any)=>{
      this.pricings = res.data;
      
    })
  }

}
