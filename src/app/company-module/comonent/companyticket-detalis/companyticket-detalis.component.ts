import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company-auth/company.service';
import { GeneralService } from 'src/app/service/general.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-companyticket-detalis',
  templateUrl: './companyticket-detalis.component.html',
  styleUrls: ['./companyticket-detalis.component.scss']
})
export class CompanyticketDetalisComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  data:any ;
  cats: any ;
  id:any;
  ticket_id:any;
  comment:any;


  constructor(Active:ActivatedRoute,private http:HttpClient , private router:Router , private companytecket:CompanyService,
    private gatcatser:GeneralService)
    {
      this.id = Active.snapshot.paramMap.get("id")

    }

  ngOnInit(): void {
    this.companytecket.getReplayTicketById(this.id).subscribe((res:any) => {
      this.data = res.data
    })
}

submit(): void{
  this.item.ticket_id = this.id;
  this.companytecket.addreplayTicket(Helper.toFormData(this.item)).subscribe((res)=>
    {
      this.router.navigate(['/companyticket-detalis' ,this.id ])
      setTimeout(() =>
      {
      location.reload();
      }, 1000);
  })

}
destroy(id:any)
{
  this.companytecket.deleteticketreplies(id).subscribe((res:any) => {
    setTimeout(() =>
    {
    location.reload();
    }, 1000);
  })
}
}
