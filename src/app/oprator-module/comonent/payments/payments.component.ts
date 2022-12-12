import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  data:any;

  constructor(private clientqout:OperatorService) { }

  ngOnInit(): void {
    this.clientqout.getPayments().subscribe((res:any)=>
      {
         this.data = res.data
         console.log(this.data);

      })
  }

}
