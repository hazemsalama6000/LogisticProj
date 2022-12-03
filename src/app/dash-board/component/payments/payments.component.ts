import { Component, OnInit } from '@angular/core';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
data:any;
  constructor(private clientqout:CustomerTicketsService) { }

  ngOnInit(): void {
    this.clientqout.getPayments().subscribe((res:any)=>
      {
         this.data = res.data
         console.log(this.data);

      })
  }

}
