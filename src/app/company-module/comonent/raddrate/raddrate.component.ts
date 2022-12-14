import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company-auth/company.service';
import { GeneralService } from 'src/app/service/general.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-raddrate',
  templateUrl: './raddrate.component.html',
  styleUrls: ['./raddrate.component.scss']
})
export class RaddrateComponent implements OnInit {

  helper: any = Helper;
  item: any = {};
  client_id:any
  rate:any;
  body:any;
  constructor(private http:HttpClient , private router:Router , private payment:CompanyService,
    private gatcatser:GeneralService, Active:ActivatedRoute,)
     {
      this.client_id = Active.snapshot.paramMap.get("id")
     }

  ngOnInit(): void {
  }
 submit(): void{
    this.item.client_id = this.client_id
    this.payment.AddRate(Helper.toFormData(this.item)).subscribe((res)=>
  {
    this.router.navigate(['/representative-all-rates' ])
  }
  )}
}
