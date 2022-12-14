import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company-auth/company.service';
import { GeneralService } from 'src/app/service/general.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-raddtrack',
  templateUrl: './raddtrack.component.html',
  styleUrls: ['./raddtrack.component.scss']
})
export class RaddtrackComponent implements OnInit {

  helper: any = Helper;
  item: any = {};
  order_id:any
  status:any;
  description:any;
  constructor(private http:HttpClient , private router:Router , private payment:CompanyService,
    private gatcatser:GeneralService, Active:ActivatedRoute,)
     {
      this.order_id = Active.snapshot.paramMap.get("id")
     }

  ngOnInit(): void {
  }
 submit(): void{
    this.item.order_id = this.order_id
    this.payment.trackOrder(Helper.toFormData(this.item)).subscribe((res)=>
  {
    this.router.navigate(['/representative-all-tracks' , this.order_id ])
  }
  )}
}
