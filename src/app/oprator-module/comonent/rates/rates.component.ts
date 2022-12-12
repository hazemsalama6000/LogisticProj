import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {
  data:any;
  constructor( Active:ActivatedRoute ,private payment:OperatorService)

  {
   }

  ngOnInit(): void {
    this.payment.getRates().subscribe((res:any)=>
    {
           this.data = res.data
             console.log(this.data);


    })

  }

}
