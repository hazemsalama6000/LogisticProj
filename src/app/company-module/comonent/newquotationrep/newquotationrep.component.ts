import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company-auth/company.service';
import { GeneralService } from 'src/app/service/general.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-newquotationrep',
  templateUrl: './newquotationrep.component.html',
  styleUrls: ['./newquotationrep.component.scss']
})
export class NewquotationrepComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  id:any;
  currentDate:any = new Date();
  order_id:any;
  day_number:any;
  start_date:any;
  end_date:any;
  price:any;
  constructor(private http:HttpClient , private router:Router , private qoutation:CompanyService,
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
  console.log(res.data);
   this.router.navigate(['/representative-all-quotations'])
 }
 )}
}
