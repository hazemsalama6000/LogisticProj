import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  order_id:any;
  data:any;
  helper: any = Helper;
  item: any = {};
  constructor( Active:ActivatedRoute ,private payment:OperatorService)

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
