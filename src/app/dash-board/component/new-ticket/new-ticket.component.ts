import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss']
})
export class NewTicketComponent implements OnInit {
  formclient = new FormGroup({
    priority : new FormControl(""),
    ticket_category_id : new FormControl(""),
    description : new FormControl(""),
    title: new FormControl("")
  });
  //formclient.append('file', image);
  constructor( private http:HttpClient , private router:Router , private clienttecket:CustomerTicketsService) { }

  ngOnInit(): void {

  }
  submit(formclient:FormGroup){

  this.clienttecket.addClientTicket(this.formclient.value).subscribe((res)=>
  {

    this.router.navigate(['/customer-support'])
    console.log(this.formclient.value);

  }
  )}
}
