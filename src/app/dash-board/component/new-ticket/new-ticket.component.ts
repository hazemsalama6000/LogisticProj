import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss']
})
export class NewTicketComponent implements OnInit {
  cats: any ;
  myFiles:string [] = [];
  formclient = new FormGroup({
    priority : new FormControl(""),
    ticket_category_id : new FormControl(""),
    description : new FormControl(""),
    title: new FormControl(""),
    src: new FormControl('', [Validators.required]),
    //fileSource: new FormControl('', [Validators.required])
  });
  selectedFile :File = null as any;

  constructor( private http:HttpClient , private router:Router , private clienttecket:CustomerTicketsService,
               private gatcatser:GeneralService ) { }

  ngOnInit(): void {
  this.getcategory();

  }
  // onFileChange(event:any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.formclient.patchValue({
  //       fileSource: file
  //     });
  //   }
  // }
  get f(){
    return this.formclient.controls;
  }

  onFileChange(event:any) {

    for (var i = 0; i < event.target.files.length; i++) {
        this.myFiles.push(event.target.files[i]);
    }
}

  submit(formclient:FormGroup): void{
    const formData = new FormData();

    for (var i = 0; i < this.myFiles.length; i++) {
      formData.append("file[]", this.myFiles[i]);
    }
  this.clienttecket.addClientTicket(this.formclient.value,formData).subscribe((res)=>
  {

    this.router.navigate(['/customer-support'])
    console.log(this.formclient.value);

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
