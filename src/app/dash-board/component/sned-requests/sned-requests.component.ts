import { Component, OnInit } from '@angular/core';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';

@Component({
  selector: 'app-sned-requests',
  templateUrl: './sned-requests.component.html',
  styleUrls: ['./sned-requests.component.scss']
})
export class SnedRequestsComponent implements OnInit {
  data:any  ;

  constructor(private _CustomerTicketsService:CustomerTicketsService) { }

  ngOnInit(): void {
    this._CustomerTicketsService.getCustomsClearance().subscribe((res:any) => {
      this.data = res.data
      console.log(this.data);
    })

  }

}
