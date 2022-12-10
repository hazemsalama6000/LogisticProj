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
  all:any[] =[];
  constructor(private _CustomerTicketsService:CustomerTicketsService
    ,private airfreigft:FreightService
    ,private seafreight:FreightService
    ,private localfreight:FreightService) { }

  ngOnInit(): void {

    this._CustomerTicketsService.getCustomsClearance().subscribe((res:any) => {
      this.data1 = res.data
      //console.log(this.data1);
      this.all.push(this.data1 , this.data2 ,this.data3 ,this.data4)
      console.log(this.all);
      for (let index = 0; index < 4; index++) {
        for (let i = 0; i < this.all[i].length ; i++) {
          //console.log(this.all[i].length);
          console.log(this.all[i]);

        }
     }
    })
    this.airfreigft.getAirFreight().subscribe((res:any) => {
      this.data2 = res.data;
      //console.log(this.data2);
    })
    this.seafreight.getSeaFreight().subscribe((res:any) => {
      this.data3 = res.data
      //console.log(this.data3);

    })
    this.localfreight.getLocalFreight().subscribe((res:any) => {
      this.data4 = res.data
      //console.log(this.data4);
    })


  }

}
