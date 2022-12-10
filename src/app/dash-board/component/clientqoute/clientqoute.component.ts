import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import { Helper } from 'src/app/shared/helper';

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
  constructor(private clientqout:CustomerTicketsService, Active:ActivatedRoute, private router:Router)
  {
    this.order_id = Active.snapshot.paramMap.get("id")


   }

  ngOnInit(): void {

    this.clientqout.getquotations(this.order_id).subscribe((res:any) => {
      this.data = res.data
      // console.log(this.data[0].id);
      this.id = this.data[0].id
      //console.log(this.id);
      this.item.id = this.id;
      this.item.order_id = this.order_id;
      this.supplier_id = this.item.supplier_id
      console.log(this.item);

      this.clientqout.acceptQuotations(Helper.toFormData(this.item)).subscribe((res)=>
    {

    })

    })



  }

}
