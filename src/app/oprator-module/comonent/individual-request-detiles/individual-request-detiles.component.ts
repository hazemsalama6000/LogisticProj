import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';

@Component({
  selector: 'app-individual-request-detiles',
  templateUrl: './individual-request-detiles.component.html',
  styleUrls: ['./individual-request-detiles.component.scss']
})
export class IndividualRequestDetilesComponent implements OnInit {
data:any;
  constructor(private operator:OperatorService) { }

  ngOnInit(): void {
    this.operator.getsupplierfiles().subscribe((res:any) => {
      this.data =res.data;
      console.log(this.data);

    })
  }
  destroy(id:any)
  {
    this.operator.deleteservisefile(id).subscribe((res:any) => {
      setTimeout(() =>
      {
      location.reload();
      }, 1000);
    })
  }
}
