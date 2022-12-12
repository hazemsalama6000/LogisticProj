import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';

@Component({
  selector: 'app-individual-customer-support',
  templateUrl: './individual-customer-support.component.html',
  styleUrls: ['./individual-customer-support.component.scss']
})
export class IndividualCustomerSupportComponent implements OnInit {
  data:any  ;
  constructor(private operatorticket:OperatorService) { }

  ngOnInit(): void {
    this.operatorticket.getoperatorTickets().subscribe((res:any) => {
      this.data = res.data
      console.log(this.data);
    })
  }
  destroy(id:any)
  {
    this.operatorticket.deleteoperatorTickets(id).subscribe((res:any) => {
      setTimeout(() =>
      {
      location.reload();
      }, 1000);
    })
  }
}
