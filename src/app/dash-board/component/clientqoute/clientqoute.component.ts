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
  constructor(private clientqout:CustomerTicketsService, Active:ActivatedRoute, private router:Router)
  {
    this.id = Active.snapshot.paramMap.get("id")

   }

  ngOnInit(): void {

        this.item.id = this.id
        this.clientqout.acceptQuotations(Helper.toFormData(this.item)).subscribe((res)=>
      {
          this.router.navigate(['/send-requests'])
      }
      )
  }

}
