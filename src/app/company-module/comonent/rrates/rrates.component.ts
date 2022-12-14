import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/service/company-auth/company.service';

@Component({
  selector: 'app-rrates',
  templateUrl: './rrates.component.html',
  styleUrls: ['./rrates.component.scss']
})
export class RratesComponent implements OnInit {

  data:any;
  constructor( Active:ActivatedRoute ,private payment:CompanyService)

  {
   }

  ngOnInit(): void {
    this.payment.getRates().subscribe((res:any)=>
    {
           this.data = res.data
             console.log(this.data);


    })

  }

}
