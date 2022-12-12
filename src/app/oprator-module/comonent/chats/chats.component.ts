import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  data:any;
  id:any;

  constructor(Active:ActivatedRoute,private http:HttpClient , private router:Router ,private clientqout:OperatorService) {
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
