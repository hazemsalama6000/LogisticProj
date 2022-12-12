import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company-auth/company.service';

@Component({
  selector: 'app-company-customer-support',
  templateUrl: './company-customer-support.component.html',
  styleUrls: ['./company-customer-support.component.scss']
})
export class CompanyCustomerSupportComponent implements OnInit {
  data:any  ;
  constructor(private companyticket:CompanyService) { }

  ngOnInit(): void {
    this.companyticket.getCompanyTickets().subscribe((res:any) => {
      this.data = res.data
    })
  }
  destroy(id:any)
  {
    this.companyticket.deletecompanyTickets(id).subscribe((res:any) => {
      setTimeout(() =>
      {
      location.reload();
      }, 1000);
    })
  }
}
