import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-requet-details',
  templateUrl: './requet-details.component.html',
  styleUrls: ['./requet-details.component.scss']
})
export class RequetDetailsComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  data:any  ;
  id:any;
  order_id:any;
  constructor(private clientqout:CustomerTicketsService, Active:ActivatedRoute, private router:Router)
  {
    this.order_id= Active.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
    this.clientqout.getquotations(this.order_id).subscribe((res:any) => {
      this.data = res.data
      //console.log(this.data);
    })

  }


}
