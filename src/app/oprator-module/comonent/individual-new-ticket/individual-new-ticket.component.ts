import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-individual-new-ticket',
  templateUrl: './individual-new-ticket.component.html',
  styleUrls: ['./individual-new-ticket.component.scss']
})
export class IndividualNewTicketComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  cats: any ;
  priority:any;
  ticket_category_id:any;
  description:any;
  title:any;
  constructor(private http:HttpClient , private router:Router , private operatorclient:OperatorService
    , private gatcatser:GeneralService ) { }

  ngOnInit(): void {
    this.getcategory();
  }


submit(): void{

  this.operatorclient.addoperatorTicket( Helper.toFormData(this.item)).subscribe((res)=>
{
  this.router.navigate(['/individual-customer-support'])
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
