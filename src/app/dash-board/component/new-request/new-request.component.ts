import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import {  ViewChild, ElementRef } from '@angular/core';
import { FormArray, } from '@angular/forms'

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {
  cats: any ;
  dest:any[]=[];
  country: any ;
  city:any[]=[];
  goodcats: any ;
  currencys: any ;
  files:any= {};
  val2:string ="";
  currentDate:any = new Date();
  myCity:any[]= [];
  myFiles:any[]= [];
  customsclearance = new FormGroup({
    language : new FormControl(""),
    pickup_location_lat : new FormControl(""),
    pickup_location_long : new FormControl(""),
    destination_location_lat: new FormControl(""),
    destination_location_long: new FormControl(''),
    flow : new FormControl(""),
    country_origin_id : new FormControl(""),
    country_destination_id : new FormControl(""),
    estimated_date: new FormControl(""),
    commercial_reference: new FormControl(''),
    quote_currency_id : new FormControl(""),
    goods_country_origin_id : new FormControl(""),
    category_id : new FormControl(""),
    value: new FormControl(""),
    description : new FormControl(""),
    currency_id: new FormControl(""),
    file: new FormControl(''),
  });
  countImage:any;
  images:any;
  constructor( private http:HttpClient , private router:Router , private clienttecket:CustomerTicketsService,
    private gatcatser:GeneralService ,private fb:FormBuilder) { }
ngOnInit(): void {
this.getcategory();
this.getcurency();
this.getGoodCategory();
this.getCountry();
this.getCity();
}
onFileChange(event:any)
{
this.myFiles= [];
for (var i = 0; i < event.target.files.length; i++)
{
const file = event.target.files[i];
const reader = new FileReader();
reader.onload = () => {
this.myFiles.push(reader.result);
}
reader.readAsDataURL(file);
}
return this.myFiles;
}
submit(customsclearance:FormGroup): void{
this.customsclearance.value['file'] = this.myFiles;
const formdata = new FormData();
this.myFiles.forEach(element => {
formdata.append("file", element);
});
console.log(customsclearance.value['file'] );
formdata.append("language", this.customsclearance.value['language']);
formdata.append("pickup_location_lat", this.customsclearance.value['pickup_location_lat']);
formdata.append("pickup_location_long", this.customsclearance.value['pickup_location_long']);
formdata.append("destination_location_lat" , this.customsclearance.value['destination_location_lat']);
formdata.append("destination_location_long", this.customsclearance.value['destination_location_long']);
formdata.append("commercial_reference", this.customsclearance.value['commercial_reference']);
formdata.append("flow", this.customsclearance.value['flow']);
formdata.append("country_origin_id" , this.customsclearance.value['country_origin_id']);
formdata.append("country_destination_id", this.customsclearance.value['country_destination_id']);
formdata.append("quote_currency_id", this.customsclearance.value['quote_currency_id']);
formdata.append("goods_country_origin_id", this.customsclearance.value['goods_country_origin_id']);
formdata.append("category_id" , this.customsclearance.value['category_id']);
formdata.append("value", this.customsclearance.value['value']);
formdata.append("currency_id", this.customsclearance.value['currency_id']);
formdata.append("description", this.customsclearance.value['description']);
formdata.append("estimated_date" , this.customsclearance.value['estimated_date']);
this.clienttecket.addCustomsClearance(formdata).subscribe((res)=>
{
this.router.navigate(['/send-requests'])
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

