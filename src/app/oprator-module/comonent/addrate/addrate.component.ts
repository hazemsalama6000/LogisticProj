import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-addrate',
  templateUrl: './addrate.component.html',
  styleUrls: ['./addrate.component.scss']
})
export class AddrateComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  client_id:any
  rate:any;
  body:any;
  constructor(private http:HttpClient , private router:Router , private payment:OperatorService,
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
    this.router.navigate(['/all-rates' ])
  }
  )}
}
