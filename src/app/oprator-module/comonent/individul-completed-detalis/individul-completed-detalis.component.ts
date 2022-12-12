import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-individul-completed-detalis',
  templateUrl: './individul-completed-detalis.component.html',
  styleUrls: ['./individul-completed-detalis.component.scss']
})
export class IndividulCompletedDetalisComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  data:any  ;
  id:any;
  order_id:any;
  client_id:any;
  constructor(private clientqout:OperatorService, Active:ActivatedRoute, private router:Router)
   {
     this.order_id = Active.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
    this.clientqout.getAllSuppliers().subscribe((res:any) => {
      for (let index = 0; index < res.data.length; index++) {
       this.data = res.data[index]["customs_clearance_request"].order_id
       if (this.data == this.order_id) {
          this.client_id = res.data[index]["customs_clearance_request"].client_id;
         console.log(this.client_id);

       }

      }

   })
      this.clientqout.getacceptquotations().subscribe((res:any) => {
      this.item.order_id = this.order_id;
      console.log("test");
      console.log(this.item);
  })

  }

}
