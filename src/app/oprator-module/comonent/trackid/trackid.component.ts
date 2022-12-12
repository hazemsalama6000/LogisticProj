import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';
import { Helper } from 'src/app/shared/helper';
@Component({
  selector: 'app-trackid',
  templateUrl: './trackid.component.html',
  styleUrls: ['./trackid.component.scss']
})
export class TrackidComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  order_id:any
  status:any;
  description:any;
  constructor(private http:HttpClient , private router:Router , private payment:OperatorService,
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
    this.router.navigate(['/all-tracks' , this.order_id ])
  }
  )}
}
