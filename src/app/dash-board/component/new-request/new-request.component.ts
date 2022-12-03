import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import { Helper } from 'src/app/shared/helper';


@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {
    helper: any = Helper;
    item: any = {};
    cats: any ;
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
  constructor( private http:HttpClient , private router:Router , private clienttecket:CustomerTicketsService,
    private gatcatser:GeneralService ) { }
ngOnInit(): void {
this.getcategory();
this.getcurency();
this.getGoodCategory();
this.getCountry();
this.getCity();
}

submit(): void{
this.clienttecket.addCustomsClearance(Helper.toFormData(this.item)).subscribe((res)=>
{
this.router.navigate(['/send-request'])
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
}

