import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company-auth/company.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  data:any;
  constructor(private clientqout:CompanyService) { }

  ngOnInit(): void {
    this.clientqout.getPayments().subscribe((res:any)=>
      {
         this.data = res.data
         console.log(this.data);

      })
  }

}

