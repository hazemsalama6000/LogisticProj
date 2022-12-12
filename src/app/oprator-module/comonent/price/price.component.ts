import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  data:any;

  constructor(private clientqout:OperatorService) { }

  ngOnInit(): void {
    this.clientqout.getPrice().subscribe((res:any)=>
      {
         this.data = res.data
         console.log(this.data);

      })
  }

}
