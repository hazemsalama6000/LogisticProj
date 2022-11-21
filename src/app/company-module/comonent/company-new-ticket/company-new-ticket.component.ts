import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company-auth/company.service';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-company-new-ticket',
  templateUrl: './company-new-ticket.component.html',
  styleUrls: ['./company-new-ticket.component.scss']
})
export class CompanyNewTicketComponent implements OnInit {
  cats: any ;
  files:any= {};
  myFiles:any[]= [];
  formcompany = new FormGroup({
    priority : new FormControl(""),
    ticket_category_id : new FormControl(""),
    description : new FormControl(""),
    title: new FormControl(""),
    src: new FormControl(''),
  });
  countImage:any;
  images:any;
  constructor(private http:HttpClient , private router:Router , private companyticket:CompanyService
    , private gatcatser:GeneralService ) { }

ngOnInit(): void {
    this.getcategory();
  }
onFileChange(event:any)
  {
    this.myFiles= [];
    for (var i = 0; i < event.target.files.length; i++)
     {
        const file = event.target.files[i];
        const reader = new FileReader();
        reader.onload = () => {
        this.myFiles.push(reader.result);
      }
      reader.readAsDataURL(file);
    }
    return this.myFiles;
}
submit(formcompany:FormGroup): void{
  this.formcompany.value['src'] = this.myFiles;
  const formdata = new FormData();
  this.myFiles.forEach(element => {
    formdata.append("src", element);
  });
  console.log(formcompany.value['src'] );
  formdata.append("priority", this.formcompany.value['priority']);
  formdata.append("ticket_category_id", this.formcompany.value['ticket_category_id']);
  formdata.append("description", this.formcompany.value['description']);
  formdata.append("title" , this.formcompany.value['title']);
  this.companyticket.addCompanyTicket(formdata).subscribe((res)=>
  {

    this.router.navigate(['/company-customer-support'])


  }
)}

getcategory(){
      this.gatcatser.getAllCategory().subscribe((res:any) =>
        {
          this.cats = res.data
          console.log(this.cats);

        })
}

}
