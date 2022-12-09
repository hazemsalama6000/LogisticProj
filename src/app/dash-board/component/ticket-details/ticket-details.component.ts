import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  data:any ;
  cats: any ;
  id:any;
  ticket_id:any;
  comment:any;
  constructor(Active:ActivatedRoute,private http:HttpClient , private router:Router , private clienttecket:CustomerTicketsService,
    private gatcatser:GeneralService )
  {
    this.id = Active.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
     this.clienttecket.getReplayTicketById(this.id).subscribe((res:any) => {
     this.data = res.data
  })

  }


submit(): void{
  this.item.ticket_id = this.id;
  this.clienttecket.addreplayTicket(Helper.toFormData(this.item)).subscribe((res)=>
    {
      this.router.navigate(['/ticket-details' ,this.id ])
      setTimeout(() =>
      {
      location.reload();
      }, 1000);
  })

}
destroy(id:any)
{
  this.clienttecket.deleteticketreplies(id).subscribe((res:any) => {
    setTimeout(() =>
    {
    location.reload();
    }, 1000);
  })
}
}
