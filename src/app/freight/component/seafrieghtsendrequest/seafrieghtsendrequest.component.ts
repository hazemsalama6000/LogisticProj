import { Component, OnInit } from '@angular/core';
import { FreightService } from 'src/app/service/freight.service';

@Component({
  selector: 'app-seafrieghtsendrequest',
  templateUrl: './seafrieghtsendrequest.component.html',
  styleUrls: ['./seafrieghtsendrequest.component.scss']
})
export class SeafrieghtsendrequestComponent implements OnInit {
data:any;
  constructor(private seafreight:FreightService) { }

  ngOnInit(): void {
    this.seafreight.getSeaFreight().subscribe((res:any) => {
      this.data = res.data
    })
  }

  destroy(id:any)
  {
    this.seafreight.deleteSeaFreight(id).subscribe((res:any) => {
      setTimeout(() =>
      {
      location.reload();
      }, 1000);
    })
  }
}
