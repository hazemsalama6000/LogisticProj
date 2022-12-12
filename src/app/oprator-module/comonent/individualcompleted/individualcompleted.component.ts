import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';

@Component({
  selector: 'app-individualcompleted',
  templateUrl: './individualcompleted.component.html',
  styleUrls: ['./individualcompleted.component.scss']
})
export class IndividualcompletedComponent implements OnInit {
  data:any  ;

  constructor(private operatorqout:OperatorService) { }

  ngOnInit(): void {
    this.operatorqout.getacceptquotations().subscribe((res:any) => {
      this.data = res.data
      console.log(this.data);
    })
  }

}
