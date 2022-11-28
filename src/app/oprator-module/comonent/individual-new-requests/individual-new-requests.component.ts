import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-individual-new-requests',
  templateUrl: './individual-new-requests.component.html',
  styleUrls: ['./individual-new-requests.component.scss']
})
export class IndividualNewRequestsComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  Service:any;
  service_id:any;
  meanviest:any;
  constructor( private operatorservice:OperatorService,
    private http:HttpClient , private router:Router , private _General:GeneralService) { }

  ngOnInit(): void {
   this.getService()
  }
  submit(): void{
    this.operatorservice.ApplyToService(Helper.toFormData(this.item)).subscribe((res)=>
  {
    this.router.navigate(['/individual-all-requests'])
  }
  )}
  getService()
  {
      this._General.getService().subscribe((res:any) => {
        this.Service = res.data ;
      })
  }
}
