import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  data:any  ;
  id:any;
  order_id:any;
  test:any
  arr:any[]=[];

  constructor(private clientqout:CustomerTicketsService, Active:ActivatedRoute, private router:Router)
   {
    this.order_id= Active.snapshot.paramMap.get("id")
    }

  ngOnInit(): void {
    this.clientqout.getCustomsClearance().subscribe((res:any) => {
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

