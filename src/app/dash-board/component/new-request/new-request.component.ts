import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import { Helper } from 'src/app/shared/helper';
import {  ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination } from "swiper";
import {ViewEncapsulation } from "@angular/core";
import  { SwiperOptions } from 'swiper';
import  { Swiper, Virtual } from 'swiper';

SwiperCore.use([Virtual]);

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
    lat :any;
    lng:any;
    
    latitude!: number;   
    longitude!: number; 
    latitude_dest!: number;   
    longitude_dest!: number; 
    @ViewChild('search')
    public searchElementRef!: ElementRef;
    @ViewChild('swiper', { static: false }) swiper:any;
    // @ViewChild('gallery', { static: false }) gallery: SwiperComponent | undefined;

  constructor( private http:HttpClient , private router:Router , private clienttecket:CustomerTicketsService,
    private gatcatser:GeneralService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone ) { }
    
  slideNext(){
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(100);
  }

    ngOnInit(): void {
    this.getcategory();
    this.getcurency();
    this.getGoodCategory();
    this.getCountry();
    this.getCity();
    
    this.mapsAPILoader.load().then(() => {
    });
    this.longitude =29.9602364242958;
    this.latitude =31.324048029083443;
    this.latitude_dest=29.9602364242958;
    this.longitude_dest =31.324048029083443;
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
onMapClicked(event: any){
  // console.table(event.coords);
  this.latitude = event.coords.lat;
  this.longitude = event.coords.lng;
  this.item.pickup_location_long =event.coords.lng;
  this.item.pickup_location_lat =event.coords.lat;
}
onMapClicked_dest(event: any){
  // console.table(event.coords);
  this.latitude_dest = event.coords.lat;
  this.longitude_dest = event.coords.lng;
  this.item.destination_location_long =event.coords.lng;
  this.item.destination_location_lat =event.coords.lat;
}
// moveto(section:any){
//   section.scrollIntoView({behavior:"smooth",block: 'start'});
// }

// onSwiper([swiper]:any) {
//   console.log(swiper);
// }
// onSlideChange() {
//   console.log('slide change');
// }
changePoint(event:any){
  alert(1)
}
}

