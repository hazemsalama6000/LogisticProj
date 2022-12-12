import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';

@Component({
  selector: 'app-allrequests',
  templateUrl: './allrequests.component.html',
  styleUrls: ['./allrequests.component.scss']
})
export class AllrequestsComponent implements OnInit {
  data:any;
  requests:any[] = [];
  constructor(private operator:OperatorService) { }

  ngOnInit(): void {
    this.operator.getavailableRequests().subscribe((res:any) => {
      this.data = res.data
      console.log(this.data);

     for (let i = 0; i < res.data.length; i++) {
      this.data = res.data[i].customs_clearance_request || res.data[i].air_freight_request ||res.data[i].sea_freight_request
      ||res.data[i].local_freight_request;
      this.requests.push(this.data)
      console.log(this.requests);
     }
    })
  }

}
