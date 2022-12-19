import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {
  data:any;
  constructor( Active:ActivatedRoute ,private client:CustomerTicketsService)

  {
   }

  ngOnInit(): void {
    this.client.getRates().subscribe((res:any)=>
    {
           this.data = res.data
             console.log(this.data);


    })

  }

}
