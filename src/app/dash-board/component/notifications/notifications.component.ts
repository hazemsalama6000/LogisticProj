import { Component, OnInit } from '@angular/core';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  data:any;
  constructor(private clientqout:CustomerTicketsService) { }

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
