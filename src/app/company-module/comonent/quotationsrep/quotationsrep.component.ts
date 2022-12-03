import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/service/company-auth/company.service';

@Component({
  selector: 'app-quotationsrep',
  templateUrl: './quotationsrep.component.html',
  styleUrls: ['./quotationsrep.component.scss']
})
export class QuotationsrepComponent implements OnInit {
  data:any  ;
  id:any;

  constructor(private companyqout:CompanyService, Active:ActivatedRoute)
   {
    this.id = Active.snapshot.paramMap.get("id")
    }

  ngOnInit(): void {
    this.companyqout.getAllquotations().subscribe((res:any) => {
      this.data = res.data
      console.log(this.data);
    })
  }

}
