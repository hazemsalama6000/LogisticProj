import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  data:any;

  constructor(private clientqout:OperatorService) { }

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
