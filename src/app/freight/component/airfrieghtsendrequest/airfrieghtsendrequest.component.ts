import { Component, OnInit } from '@angular/core';
import { FreightService } from 'src/app/service/freight.service';

@Component({
  selector: 'app-airfrieghtsendrequest',
  templateUrl: './airfrieghtsendrequest.component.html',
  styleUrls: ['./airfrieghtsendrequest.component.scss']
})
export class AirfrieghtsendrequestComponent implements OnInit {
data:any;
  constructor(private airfreigft:FreightService) { }

  ngOnInit(): void {
    this.airfreigft.getAirFreight().subscribe((res:any) => {
          this.data = res.data;
    })
  }
  destroy(id:any)
  {
    this.airfreigft.deleteAirFreight(id).subscribe((res:any) => {
      setTimeout(() =>
      {
      location.reload();
      }, 1000);
    })
  }
}
