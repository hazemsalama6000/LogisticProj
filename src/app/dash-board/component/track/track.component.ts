import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  order_id:any;
  data:any;
  helper: any = Helper;
  item: any = {};
  constructor( Active:ActivatedRoute ,private payment:CustomerTicketsService)

  {
    this.order_id = Active.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
    this.item.order_id = this.order_id
    this.payment.trackOrder(Helper.toFormData(this.item)).subscribe((res)=>
    {
      // console.log(this.order_id);
           this.data = res.data
          console.log(this.data);


    })

  }

}
