import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';
import { Helper } from 'src/app/shared/helper';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newquotation',
  templateUrl: './newquotation.component.html',
  styleUrls: ['./newquotation.component.scss']
})
export class NewquotationComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  id:any;
  currentDate:any = new Date();
  order_id:any;
  day_number:any;
  start_date:any;
  end_date:any;
  price:any;
  constructor(private http:HttpClient , private router:Router , private qoutation:OperatorService,
    private gatcatser:GeneralService , Active:ActivatedRoute)
    {
      this.id = Active.snapshot.paramMap.get("id")
    }

  ngOnInit(): void {
  }
  submit(): void{
     this.item.order_id = this.id
    this.qoutation.addnewquotation(Helper.toFormData(this.item)).subscribe((res)=>
  {
    this.router.navigate(['/individual-all-quotations'])
  }
  )}
}
