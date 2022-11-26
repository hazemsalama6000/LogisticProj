import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FreightService } from 'src/app/service/freight.service';
import { GeneralService } from 'src/app/service/general.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import { Helper } from 'src/app/shared/helper';
@Component({
  selector: 'app-seafrieghtnewrequest',
  templateUrl: './seafrieghtnewrequest.component.html',
  styleUrls: ['./seafrieghtnewrequest.component.scss']
})
export class SeafrieghtnewrequestComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  cats: any ;
  CustomsClearance:any;
  country: any ;
  city:any[]=[];
  goodcats: any ;
  currencys: any ;
  currentDate:any = new Date();
  language :any;
  pickup_location_lat :any;
  pickup_location_long :any;
  destination_location_lat:any;
  destination_location_long:any;
  flow :any;
  country_origin_id :any;
  country_destination_id :any;
  estimated_date:any;
  commercial_reference:any;
  quote_currency_id :any;
  goods_country_origin_id :any;
  category_id :any;
  value:any;
  description :any;
  currency_id:any;
  file:any;
  zip_code:any;
  weight:any;
  volume:any;
  pickup_insure:any;
  pickup_city_id:any;
  palletized:any;
  need_pickup:any;
  insure_good:any;
  bulks:any;
  custom_clearance:any;
  count:any;
  type:any;
  reefer_container:any;
  load_type:any;
  constructor( private http:HttpClient , private router:Router , private _FreightService:FreightService,
    private gatcatser:GeneralService, private customclearance:CustomerTicketsService ) { }

  ngOnInit(): void {
    this.getcategory();
    this.getcurency();
    this.getGoodCategory();
    this.getCountry();
    this.getCity();
    this.getCustomsClearance();
  }
  submit(): void{
    this._FreightService.addSeaFreight(Helper.toFormData(this.item)).subscribe((res)=>
    {
    this.router.navigate(['/sea-send-request'])
    }
    )}
    getcategory(){
    this.gatcatser.getAllCategory().subscribe((res:any) =>
    {
     this.cats = res.data
    })
    }
    getcurency(){
      this.gatcatser.getAllCurrency().subscribe((res:any) =>
      {
       this.currencys = res.data
      })
    }
    getGoodCategory(){
        this.gatcatser.getGoodCategory().subscribe((res:any) =>
        {
         this.goodcats = res.data
        })
    }
    getCountry(){
          this.gatcatser.getCountry().subscribe((res:any) =>
          {
           this.country = res.data

          })
    }
    getCity()
    {
            this.gatcatser.getCountry().subscribe((res:any) =>
            {
              for (let i = 0; i < res.data.length; i++)
               {
                for (let j = 0; j < res.data[i].cities.length; j++) {
                      this.city.push(res.data[i].cities[j]) ;
                    }
               }
            })
    }
    getCustomsClearance()
    {
      this.customclearance.getCustomsClearance().subscribe((res:any) =>
      {
        this.CustomsClearance = res.data

      })

    }
}
