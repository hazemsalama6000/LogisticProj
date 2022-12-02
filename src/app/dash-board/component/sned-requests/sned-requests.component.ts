import { Component, OnInit } from '@angular/core';
import { FreightService } from 'src/app/service/freight.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';

@Component({
  selector: 'app-sned-requests',
  templateUrl: './sned-requests.component.html',
  styleUrls: ['./sned-requests.component.scss']
})
export class SnedRequestsComponent implements OnInit {
  data1:any ;
  data2:any ;
  data3:any ;
  data4:any ;

  constructor(private _CustomerTicketsService:CustomerTicketsService
    ,private airfreigft:FreightService
    ,private seafreight:FreightService
    ,private localfreight:FreightService) { }

  ngOnInit(): void {
    this._CustomerTicketsService.getCustomsClearance().subscribe((res:any) => {
      this.data1 = res.data
      console.log(this.data1);
    })
    this.airfreigft.getAirFreight().subscribe((res:any) => {
      this.data2 = res.data;
    })
    this.seafreight.getSeaFreight().subscribe((res:any) => {
      this.data3 = res.data
    })
    this.localfreight.getLocalFreight().subscribe((res:any) => {
      this.data4 = res.data
    })
  }

}
