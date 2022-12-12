import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company-auth/company.service';

@Component({
  selector: 'app-detailsrequestcom',
  templateUrl: './detailsrequestcom.component.html',
  styleUrls: ['./detailsrequestcom.component.scss']
})
export class DetailsrequestcomComponent implements OnInit {
  data:any;

  constructor(private company:CompanyService) { }

  ngOnInit(): void {
    this.company.getsupplierfiles().subscribe((res:any) => {
      this.data =res.data;
      console.log(this.data);

    })
  }
  destroy(id:any)
  {
    this.company.deleteservisefile(id).subscribe((res:any) => {
      setTimeout(() =>
      {
      location.reload();
      }, 1000);
    })
  }
}
