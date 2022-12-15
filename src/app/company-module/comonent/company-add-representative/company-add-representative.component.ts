import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company-auth/company.service';
import { GeneralService } from 'src/app/service/general.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-company-add-representative',
  templateUrl: './company-add-representative.component.html',
  styleUrls: ['./company-add-representative.component.scss']
})
export class CompanyAddRepresentativeComponent implements OnInit {

  helper: any = Helper;
  item: any = {};
  cats: any ;
  priority:any;
  ticket_category_id:any;
  description:any;
  title:any;
  Service:any;
  country: any ;
  city:any[]=[];
  name:any;
  email:any;
  password:any;
  password_confirmation:any;
  phone:any;
  about:any;
  address:any;
  age:any;
  gender:any;
  language:any;
  allow_notification:any;
  mail_notification:any;
  status:any;
  service_id:any;
  country_id:any;
  city_id:any;

  constructor(private http:HttpClient , private router:Router , private companyticket:CompanyService
    , private gatcatser:GeneralService ) { }

ngOnInit(): void {
    this.getcategory();
    this.getService()
    this.getCountry();
    this.getCity();
  }

submit(): void{
  this.companyticket.repRegister(Helper.toFormData(this.item)).subscribe((res)=>
  {
    this.router.navigate(['/company-dash-board'])
  }
)}

getcategory(){
      this.gatcatser.getAllCategory().subscribe((res:any) =>
        {
          this.cats = res.data
          console.log(this.cats);
        })
}
getService()
{
    this.gatcatser.getService().subscribe((res:any) => {
      this.Service = res.data ;
    })
}
getCountry(){
  this.gatcatser.getCountry().subscribe((res:any) =>
  {
   this.country = res.data

  })
}
getCity()
{
    this.gatcatser.getCountry().subscribe((res:any) =>
    {
      for (let i = 0; i < res.data.length; i++)
       {
        for (let j = 0; j < res.data[i].cities.length; j++) {
              this.city.push(res.data[i].cities[j]) ;
            }
       }
    })
}
}

