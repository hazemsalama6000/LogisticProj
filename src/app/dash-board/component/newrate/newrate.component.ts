import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FreightService } from 'src/app/service/freight.service';
import { GeneralService } from 'src/app/service/general.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-newrate',
  templateUrl: './newrate.component.html',
  styleUrls: ['./newrate.component.scss']
})
export class NewrateComponent implements OnInit {

  helper: any = Helper;
  item: any = {};
  supplier_id :any
  newsupplier_type:any ;
  newsupplier:any ;
  rate:any;
  body:any;
  data1:any ;
  data2:any ;
  data3:any ;
  data4:any ;
  all:any[] =[];
  newoid1:any;
  newoid2:any;
  newoid3:any;
  newoid4:any;
  order_id:any;

  constructor(private airfreigft:FreightService
    ,private localfreight:FreightService,private seafreight:FreightService,private http:HttpClient , private router:Router , private client:CustomerTicketsService,
    private gatcatser:GeneralService, Active:ActivatedRoute,)
     {
      this.supplier_id  = Active.snapshot.paramMap.get("id")
     }

  ngOnInit(): void {
    this.client.getCustomsClearance().subscribe((res:any) => {
      this.data1 = res.data
      console.log(this.data1);
      for (let index = 0; index < res.data.length; index++) {
        this.newoid1 = this.data1[index].supplier_id;
        if (this.newoid1 == this.supplier_id ) {
          console.log("supplier_id :" + this.data1[index].supplier_id);
          console.log("supplier_type :" + this.data1[index].supplier_type);
          if (this.data1[index].supplier_type === "\\Operator")
          {
            this.newsupplier_type = "operator_id"
          }
          else{
            this.newsupplier_type = "reperesentative_id"
          }
          console.log(" type of sublier : " + this.newsupplier_type);
        }
      }

    })
    this.airfreigft.getAirFreight().subscribe((res:any) => {
      this.data2 = res.data;
      console.log(this.data2);
      for (let index = 0; index < res.data.length; index++) {
        this.newoid2 = this.data2[index].supplier_id;
        if (this.newoid2 == this.supplier_id ) {
          console.log("supplier_id :" + this.data2[index].supplier_id);
          console.log("supplier_type :" + this.data2[index].supplier_type);
          if (this.data2[index].supplier_type === "\\Operator")
          {
            this.newsupplier_type = "operator_id"
          }
          else{
            this.newsupplier_type = "reperesentative_id"
          }
          console.log("type of sublier : " + this.newsupplier_type);
        }
      }
    })
    this.seafreight.getSeaFreight().subscribe((res:any) => {
      this.data3 = res.data
      console.log(this.data3);
      for (let index = 0; index < res.data.length; index++) {
        this.newoid3 = this.data3[index].supplier_id;
        if (this.newoid3 == this.supplier_id ) {
          console.log("supplier_id :" + this.data3[index].supplier_id);
          console.log("supplier_type :" + this.data3[index].supplier_type);
          if (this.data3[index].supplier_type === "\\Operator")
          {
            this.newsupplier_type = "operator_id"
          }
          else{
            this.newsupplier_type = "reperesentative_id"
          }
          console.log("type of sublier : " + this.newsupplier_type);
        }
      }
    })
    this.localfreight.getLocalFreight().subscribe((res:any) => {
      this.data4 = res.data
      console.log(this.data4);
      for (let index = 0; index < res.data.length; index++) {
        this.newoid4 = this.data4[index].supplier_id;
        if (this.newoid4 == this.supplier_id ) {
          console.log("supplier_id :" + this.data4[index].supplier_id);
          console.log("supplier_type :" + this.data4[index].supplier_type);
          if (this.data4[index].supplier_type === "\\Operator")
          {
            this.newsupplier_type = "operator_id"
          }
          else{
            this.newsupplier_type = "reperesentative_id"
          }
           console.log("type of sublier : " + this.newsupplier_type);
        }
      }
    })
  }
 submit(): void{
  console.log("new type lool : " + this.newsupplier_type);
  if (this.newsupplier_type == "operator_id") {
    this.item.operator_id  = this.supplier_id
  }
  else{
    this.item.reperesentative_id  = this.supplier_id

  }
    this.client.AddRate(Helper.toFormData(this.item)).subscribe((res)=>
  {
    this.router.navigate(['/all-crates' ])
  }
  )}
}

