import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company-auth/company.service';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-company-new-ticket',
  templateUrl: './company-new-ticket.component.html',
  styleUrls: ['./company-new-ticket.component.scss']
})
export class CompanyNewTicketComponent implements OnInit {
  cats: any ;
    formcompany = new FormGroup({
    priority : new FormControl(""),
    ticket_category_id : new FormControl(""),
    description : new FormControl(""),
    title: new FormControl(""),
    // file: new FormControl("")
  });
  constructor(private http:HttpClient , private router:Router , private companyticket:CompanyService
    , private gatcatser:GeneralService ) { }

  ngOnInit(): void {
    this.getcategory();
  }
  submit(formcompany:FormGroup): void{

    this.companyticket.addCompanyTicket(this.formcompany.value).subscribe((res)=>
    {

      this.router.navigate(['/company-customer-support'])
      console.log(this.formcompany.value);

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
