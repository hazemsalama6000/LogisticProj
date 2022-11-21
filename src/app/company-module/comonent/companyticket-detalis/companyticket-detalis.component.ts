import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';

@Component({
  selector: 'app-companyticket-detalis',
  templateUrl: './companyticket-detalis.component.html',
  styleUrls: ['./companyticket-detalis.component.scss']
})
export class CompanyticketDetalisComponent implements OnInit {
  data:any ;
  cats: any ;
  id:any;
  files:any= {};
  myFiles:any[]= [];
  formreplayclient = new FormGroup({
    comment : new FormControl(""),
    src: new FormControl(''),
  });
  constructor(Active:ActivatedRoute,private http:HttpClient , private router:Router , private clienttecket:CustomerTicketsService,
    private gatcatser:GeneralService) { }
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
  ngOnInit(): void {
  //   this.clienttecket.getReplayTicketById(this.id).subscribe((res:any) => {
  //     this.data = res.data
  // }

}
// submit(formreplayclient:FormGroup): void{
//   this.formreplayclient.value['src'] = this.myFiles;
//   const formdata = new FormData();
//   this.myFiles.forEach(element => {
//     formdata.append("src", element);
//   });
//   //console.log(this.myFiles[0]);

//   console.log(formdata.get("src"));

//   formdata.append("comment", this.formreplayclient.value['comment']);
//   formdata.append("ticket_id", this.id);
//   this.clienttecket.addreplayTicket( formdata).subscribe((res)=>
// {
//   // setTimeout(() =>
//   //   {
//   //   location.reload();
//   //   }, 1000);
//   })

}
