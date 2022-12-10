import { Component, OnInit } from '@angular/core';
import { FreightService } from 'src/app/service/freight.service';

@Component({
  selector: 'app-localfrieghtsendrequest',
  templateUrl: './localfrieghtsendrequest.component.html',
  styleUrls: ['./localfrieghtsendrequest.component.scss']
})
export class LocalfrieghtsendrequestComponent implements OnInit {
  data:any  ;

  constructor(private localfreight:FreightService) { }

  ngOnInit(): void {


    this.localfreight.getLocalFreight().subscribe((res:any) => {
      this.data = res.data
    })


  }
  destroy(id:any)
  {
    this.localfreight.deleteLocalFreight(id).subscribe((res:any) => {
      setTimeout(() =>
      {
      location.reload();
      }, 1000);
    })
  }
}
