import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company-auth/company.service';

@Component({
  selector: 'app-allrequestcom',
  templateUrl: './allrequestcom.component.html',
  styleUrls: ['./allrequestcom.component.scss']
})
export class AllrequestcomComponent implements OnInit {
  data:any;
  requests:any[] = [];
  constructor(private company:CompanyService) { }

  ngOnInit(): void {
    this.company.getAllSuppliers().subscribe((res:any) => {
      for (let i = 0; i < res.data.length; i++) {
       this.data = res.data[i].customs_clearance_request || res.data[i].air_freight_request ||res.data[i].sea_freight_request
       ||res.data[i].local_freight_request;
       this.requests.push(this.data)
       console.log(this.requests);
      }
     })
  }

}
