import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-newpayment',
  templateUrl: './newpayment.component.html',
  styleUrls: ['./newpayment.component.scss']
})
export class NewpaymentComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  order_id:any
  total_amount:any;
  commission:any;
  supplier_amount:any;
  transaction_number:any;
  constructor(private http:HttpClient , private router:Router , private payment:CustomerTicketsService,
    private gatcatser:GeneralService, Active:ActivatedRoute,)
     {
      this.order_id = Active.snapshot.paramMap.get("id")
     }

  ngOnInit(): void {
  }
 submit(): void{
    this.item.order_id = this.order_id
    this.payment.AddPayment(Helper.toFormData(this.item)).subscribe((res)=>
  {
    this.router.navigate(['/all-paymetns'])
  }
  )}
}
