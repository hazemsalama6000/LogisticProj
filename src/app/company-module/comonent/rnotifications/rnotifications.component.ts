import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company-auth/company.service';

@Component({
  selector: 'app-rnotifications',
  templateUrl: './rnotifications.component.html',
  styleUrls: ['./rnotifications.component.scss']
})
export class RnotificationsComponent implements OnInit {

  data:any;

  constructor(private clientqout:CompanyService) { }

  ngOnInit(): void {
    this.clientqout.getNotifications().subscribe((res:any)=>
      {
        this.data = res.data["notifications"]
       console.log(this.data);


      })
  }
  destroy(id:any)
  {
    this.clientqout.deleteNotification(id).subscribe((res:any) => {
      setTimeout(() =>
      {
      location.reload();
      }, 1000);
    })
  }
}

