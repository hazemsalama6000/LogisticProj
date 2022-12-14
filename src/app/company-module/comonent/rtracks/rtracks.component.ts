import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/service/company-auth/company.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-rtracks',
  templateUrl: './rtracks.component.html',
  styleUrls: ['./rtracks.component.scss']
})
export class RtracksComponent implements OnInit {

  order_id:any;
  data:any;
  helper: any = Helper;
  item: any = {};
  constructor( Active:ActivatedRoute ,private payment:CompanyService)

  {
    this.order_id = Active.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
    this.item.order_id = this.order_id
    this.payment.trackOrder(Helper.toFormData(this.item)).subscribe((res)=>
    {
           this.data = res.data
          console.log(this.data);


    })

  }
  destroy(id:any)
  {
    this.payment.deletetrack(id).subscribe((res:any) => {
      setTimeout(() =>
      {
      location.reload();
      }, 1000);
    })
  }
}
