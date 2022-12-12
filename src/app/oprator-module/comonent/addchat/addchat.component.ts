import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-addchat',
  templateUrl: './addchat.component.html',
  styleUrls: ['./addchat.component.scss']
})
export class AddchatComponent implements OnInit {
  helper: any = Helper;
  item: any = {};
  data:any ;
  cats: any ;
  id:any;
  ticket_id:any;
  message:any;
  constructor(Active:ActivatedRoute,private http:HttpClient , private router:Router , private operatortecket:OperatorService,
    private gatcatser:GeneralService)
    {
      this.id = Active.snapshot.paramMap.get("id")
    }

  ngOnInit(): void {
    // this.operatortecket.startChat(this.id).subscribe((res:any) => {
    //   this.data = res.data
    // })
  }
  submit(): void{
    this.item.order_id = this.id;
    this.operatortecket.startChat(Helper.toFormData(this.item)).subscribe((res)=>
      {
        this.router.navigate(['/all-chats' ,this.item.order_id  ])
        // setTimeout(() =>
        // {
        // location.reload();
        // }, 1000);
    })

  }

}
