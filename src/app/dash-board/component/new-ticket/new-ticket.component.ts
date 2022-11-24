import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';

import { Helper } from 'src/app/shared/helper';
@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss']
})
export class NewTicketComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  cats: any ;

  description:any="";
  ticket_category_id:any;
  title:any;
  priority:any;
  constructor( private http:HttpClient , private router:Router , private clienttecket:CustomerTicketsService,
               private gatcatser:GeneralService ) { }
  ngOnInit(): void {
    this.getcategory();
  }
  submit(): void{
    console.log(this.item["src[]"]);
    this.clienttecket.addClientTicket(Helper.toFormData(this.item)).subscribe((res)=>
  {
    this.router.navigate(['/customer-support'])
  }
  )}
  getcategory(){
        this.gatcatser.getAllCategory().subscribe((res:any) =>
          {
            this.cats = res.data
          })
  }
}
