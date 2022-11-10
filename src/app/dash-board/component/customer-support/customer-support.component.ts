import { Component, OnInit } from '@angular/core';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss']
})
export class CustomerSupportComponent implements OnInit {

  constructor(private _CustomerTicketsService:CustomerTicketsService) { }

  ngOnInit(): void {
    this.getCustomerTickets();
  }

  //Get Customer Tickets:
  getCustomerTickets() {
    this._CustomerTicketsService.getClientTickets().subscribe((response) => {
      console.log(response);
    })
  }

}
