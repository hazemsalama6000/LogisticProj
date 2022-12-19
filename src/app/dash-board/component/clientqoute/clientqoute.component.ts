import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import { Helper } from 'src/app/shared/helper';
import { FreightService } from 'src/app/service/freight.service';

@Component({
  selector: 'app-clientqoute',
  templateUrl: './clientqoute.component.html',
  styleUrls: ['./clientqoute.component.scss']
})
export class ClientqouteComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  data:any  ;
  id:any;
  order_id:any;
  supplier_id:any;
  supplier_type:any = "";
  data1:any ;
  data2:any ;
  data3:any ;
  data4:any ;
  all:any[] =[];
  newoid1:any;
  newoid2:any;
  newoid3:any;
  newoid4:any;


  constructor(
     private airfreigft:FreightService
   ,private clientqout:CustomerTicketsService,private localfreight:FreightService,private seafreight:FreightService,
    Active:ActivatedRoute, private router:Router)
  {
    this.order_id = Active.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
    this.clientqout.getCustomsClearance().subscribe((res:any) => {
      this.data1 = res.data
      console.log(this.data1);
      for (let index = 0; index < res.data.length; index++) {
        this.newoid1 = this.data1[index].order_id;
        if (this.newoid1 == this.order_id ) {
          console.log("order_id :" + this.data1[index].order_id);
          console.log("supplier_id :" + this.data1[index].supplier_id);
          this.supplier_id = this.data1[index].supplier_id;
          console.log("supplier_type :" + this.data1[index].supplier_type);
          if (this.data1[index].supplier_type === "\\Operator")
          {
            this.supplier_type = "operator_id"
          }
          else{
            this.supplier_type = "reperesentative_id"
          }
          console.log("new type : " + this.supplier_type);

        }
      }

    })
    this.airfreigft.getAirFreight().subscribe((res:any) => {
      this.data2 = res.data;
      console.log(this.data2);
      for (let index = 0; index < res.data.length; index++) {
        this.newoid2 = this.data2[index].order_id;
        if (this.newoid2 == this.order_id ) {
          console.log("order_id :" + this.data2[index].order_id);
          console.log("supplier_id :" + this.data2[index].supplier_id);
          this.supplier_id = this.data2[index].supplier_id;
          console.log("supplier_type :" + this.data2[index].supplier_type);
          if (this.data2[index].supplier_type === "\\Operator")
          {
            this.supplier_type = "operator_id"
          }
          else{
            this.supplier_type = "reperesentative_id"
          }
          console.log("new type : " + this.supplier_type);
        }
      }
    })
    this.seafreight.getSeaFreight().subscribe((res:any) => {
      this.data3 = res.data
      console.log(this.data3);
      for (let index = 0; index < res.data.length; index++) {
        this.newoid3 = this.data3[index].order_id;
        if (this.newoid3 == this.order_id ) {
          console.log("order_id :" + this.data3[index].order_id);
          console.log("supplier_id :" + this.data3[index].supplier_id);
          this.supplier_id = this.data3[index].supplier_id;
          console.log("supplier_type :" + this.data3[index].supplier_type);
          if (this.data3[index].supplier_type === "\\Operator")
          {
            this.supplier_type = "operator_id"
          }
          else{
            this.supplier_type = "reperesentative_id"
          }
          console.log("new type : " + this.supplier_type);
        }
      }
    })
    this.localfreight.getLocalFreight().subscribe((res:any) => {
      this.data4 = res.data
      console.log(this.data4);
      for (let index = 0; index < res.data.length; index++) {
        this.newoid4 = this.data4[index].order_id;
        if (this.newoid4 == this.order_id ) {
          console.log("order_id :" + this.data4[index].order_id);
          console.log("supplier_id :" + this.data4[index].supplier_id);
          this.supplier_id = this.data4[index].supplier_id;
          console.log("supplier_type :" + this.data4[index].supplier_type);
          if (this.data4[index].supplier_type === "\\Operator")
          {
            this.supplier_type = "operator_id"
          }
          else{
            this.supplier_type = "reperesentative_id"
          }
          console.log("new type : " + this.supplier_type);
        }
      }
    })

    this.clientqout.getquotations(this.order_id).subscribe((res:any) => {
      this.data = res.data
      this.id = this.data[0].id
      this.item.id = this.id;
      this.item.order_id = this.order_id;
      this.item.supplier_id = this.supplier_id;
      this.item.this.supplier_type = this.supplier_type
      console.log(this.item);

      this.clientqout.acceptQuotations(Helper.toFormData(this.item)).subscribe((res)=>
    {

    })

    })



  }

}
