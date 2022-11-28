import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company-auth/company.service';
import { GeneralService } from 'src/app/service/general.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-company-new-requests',
  templateUrl: './company-new-requests.component.html',
  styleUrls: ['./company-new-requests.component.scss']
})
export class CompanyNewRequestsComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  Service:any;
  service_id:any;
  meanviest:any;
  constructor( private companyservice:CompanyService,
    private http:HttpClient , private router:Router , private _General:GeneralService) { }

  ngOnInit(): void {
   this.getService()
  }
  submit(): void{
    this.companyservice.ApplyToService(Helper.toFormData(this.item)).subscribe((res:any)=>
  {
    this.router.navigate(['/company-all-requests'])
  }
  )}
  getService()
  {
      this._General.getService().subscribe((res:any) => {
        this.Service = res.data ;
      })
  }
}
