import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company-auth/company.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  data:any;

  constructor(private clientqout:CompanyService) { }

  ngOnInit(): void {
    this.clientqout.getPrice().subscribe((res:any)=>
      {
         this.data = res.data
         console.log(this.data);

      })
  }

}
