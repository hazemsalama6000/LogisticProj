import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company-auth/company.service';

@Component({
  selector: 'app-company-representatives',
  templateUrl: './company-representatives.component.html',
  styleUrls: ['./company-representatives.component.scss']
})
export class CompanyRepresentativesComponent implements OnInit {
  data:any;

  constructor(private clientqout:CompanyService) { }

  ngOnInit(): void {
    this.clientqout.getAllRep().subscribe((res:any)=>
    {
       this.data = res.data
       console.log(this.data);

    })
  }

}
