import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FreightService } from 'src/app/service/freight.service';
import { Helper } from 'src/app/shared/helper';
import { FreightModule } from '../../freight.module';

@Component({
  selector: 'app-airdetails',
  templateUrl: './airdetails.component.html',
  styleUrls: ['./airdetails.component.scss']
})
export class AirdetailsComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  data:any  ;
  id:any;
  order_id:any;
  test:any
  arr:any[]=[];

  constructor(private clientqout:FreightService, Active:ActivatedRoute, private router:Router)
   {
    this.order_id= Active.snapshot.paramMap.get("id")
    }

  ngOnInit(): void {
    this.clientqout.getAirFreight().subscribe((res:any) => {
      for (let index = 0; index < res.data.length ; index++) {
            this.test = res.data[index].order_id;
            if( this.test == this.order_id)
            {
              this.data = res.data[index]
              this.arr.push(this.data);

            }
        }
    })
  }
}
