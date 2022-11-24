import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company-auth/company.service';
import { GeneralService } from 'src/app/service/general.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-company-new-ticket',
  templateUrl: './company-new-ticket.component.html',
  styleUrls: ['./company-new-ticket.component.scss']
})
export class CompanyNewTicketComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  cats: any ;
  priority:any;
  ticket_category_id:any;
  description:any;
  title:any;
  constructor(private http:HttpClient , private router:Router , private companyticket:CompanyService
    , private gatcatser:GeneralService ) { }

ngOnInit(): void {
    this.getcategory();
  }

submit(): void{
  this.companyticket.addCompanyTicket(Helper.toFormData(this.item)).subscribe((res)=>
  {

    this.router.navigate(['/company-customer-support'])


  }
)}

getcategory(){
      this.gatcatser.getAllCategory().subscribe((res:any) =>
        {
          this.cats = res.data
          console.log(this.cats);

        })
}

}
