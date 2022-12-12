import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';

@Component({
  selector: 'app-cchats',
  templateUrl: './cchats.component.html',
  styleUrls: ['./cchats.component.scss']
})
export class CchatsComponent implements OnInit {
  data:any;
  id:any;
  constructor(Active:ActivatedRoute,private http:HttpClient , private router:Router ,private clientqout:CustomerTicketsService) {
    this.id = Active.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
    this.clientqout.getChats(this.id).subscribe((res:any)=>
      {
         this.data = res.data
         console.log("gf");

         console.log(this.data);
      })
  }

}
