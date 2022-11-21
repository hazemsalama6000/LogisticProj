import { Component, OnInit } from '@angular/core';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss']
})
export class CustomerSupportComponent implements OnInit {
data:any  ;
  constructor(private _CustomerTicketsService:CustomerTicketsService) { }

  ngOnInit(): void {

      this._CustomerTicketsService.getClientTickets().subscribe((res:any) => {
        this.data = res.data
       // console.log(this.data);
      })

      // this._CustomerTicketsService.getClientTickets().subscribe({
      //   next: result =>
      //   {
      //     this.data = result
      //     console.log(this.data);
      //   },
      //   error :error =>  error


      // })
  }

  //Get Customer Tickets:


}
