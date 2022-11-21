import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { OperatorService } from 'src/app/service/operator-auth/operator.service';

@Component({
  selector: 'app-individual-new-ticket',
  templateUrl: './individual-new-ticket.component.html',
  styleUrls: ['./individual-new-ticket.component.scss']
})
export class IndividualNewTicketComponent implements OnInit {
  cats: any ;
  files:any= {};
  myFiles:any[]= [];
  formoperator = new FormGroup({
    priority : new FormControl(""),
    ticket_category_id : new FormControl(""),
    description : new FormControl(""),
    title: new FormControl(""),
    src: new FormControl(''),
  });
  countImage:any;
  images:any;
  constructor(private http:HttpClient , private router:Router , private operatorclient:OperatorService
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
submit(formoperator:FormGroup): void{
  this.formoperator.value['src'] = this.myFiles;
  const formdata = new FormData();
  this.myFiles.forEach(element => {
    formdata.append("src", element);
  });
  console.log(formoperator.value['src'] );
  formdata.append("priority", this.formoperator.value['priority']);
  formdata.append("ticket_category_id", this.formoperator.value['ticket_category_id']);
  formdata.append("description", this.formoperator.value['description']);
  formdata.append("title" , this.formoperator.value['title']);
  this.operatorclient.addoperatorTicket( formdata).subscribe((res)=>
{
  this.router.navigate(['/customer-support'])
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
