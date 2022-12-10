import { Component, OnInit } from '@angular/core';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';

@Component({
  selector: 'app-customsend',
  templateUrl: './customsend.component.html',
  styleUrls: ['./customsend.component.scss']
})
export class CustomsendComponent implements OnInit {
  data1:any ;

  constructor(private _CustomerTicketsService:CustomerTicketsService) { }

  ngOnInit(): void {
    this._CustomerTicketsService.getCustomsClearance().subscribe((res:any) => {
      this.data1 = res.data
      console.log(this.data1);
    })
  }
  destroy(id:any)
  {
    this._CustomerTicketsService.deleteCustomsClearance(id).subscribe((res:any) => {
      setTimeout(() =>
      {
      location.reload();
      }, 1000);
    })
  }
}
