import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company-auth/company.service';

@Component({
  selector: 'app-rchats',
  templateUrl: './rchats.component.html',
  styleUrls: ['./rchats.component.scss']
})
export class RchatsComponent implements OnInit {

  data:any;
  id:any;

  constructor(Active:ActivatedRoute,private http:HttpClient , private router:Router ,private clientqout:CompanyService) {
    this.id = Active.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
    this.clientqout.getChats(this.id).subscribe((res:any)=>
      {
        this.data = res.data
         console.log(this.data);
      })
  }

}

