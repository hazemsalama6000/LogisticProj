import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-individual-ticketk-detalis',
  templateUrl: './individual-ticketk-detalis.component.html',
  styleUrls: ['./individual-ticketk-detalis.component.scss']
})
export class IndividualTicketkDetalisComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  data:any ;
  cats: any ;
  id:any;
  ticket_id:any;
  comment:any;
  constructor(Active:ActivatedRoute,private http:HttpClient , private router:Router , private operatortecket:OperatorService,
    private gatcatser:GeneralService)
    {
      this.id = Active.snapshot.paramMap.get("id")
    }

  ngOnInit(): void {
    this.operatortecket.getReplayTicketById(this.id).subscribe((res:any) => {
      this.data = res.data
    })
  }
  submit(): void{
    this.item.ticket_id = this.id;
    this.operatortecket.addreplayTicket(Helper.toFormData(this.item)).subscribe((res)=>
      {
        this.router.navigate(['/individual-ticketk-detalis' ,this.id ])
        setTimeout(() =>
        {
        location.reload();
        }, 1000);
    })

  }
  destroy(id:any)
{
  this.operatortecket.deleteticketreplies(id).subscribe((res:any) => {
    setTimeout(() =>
    {
    location.reload();
    }, 1000);
  })
}
}
