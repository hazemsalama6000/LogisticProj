import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss']
})
export class QuotationsComponent implements OnInit {
  data:any  ;
  constructor(private operatorqout:OperatorService) { }

  ngOnInit(): void {
    this.operatorqout.getAllquotations().subscribe((res:any) => {
      this.data = res.data
      console.log(this.data);
    })
  }
  destroy(id:any)
  {
    this.operatorqout.deletequotation(id).subscribe((res:any) => {
      setTimeout(() =>
      {
      location.reload();
      }, 1000);
    })
  }
}
