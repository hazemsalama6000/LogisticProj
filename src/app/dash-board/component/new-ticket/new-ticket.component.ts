import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/service/general.service';
import { CustomerTicketsService } from 'src/app/service/Tickets/Customer/customer-tickets.service';
import {  ViewChild, ElementRef } from '@angular/core';
import { FormArray, } from '@angular/forms'

declare var $:any;

import { Helper } from 'src/app/shared/helper';
@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss']
})
export class NewTicketComponent implements OnInit {
  cats: any ;
  files:any= {};
  myFiles:any[]= [];
  formclient = new FormGroup({
    priority : new FormControl(""),
    ticket_category_id : new FormControl(""),
    description : new FormControl(""),
    title: new FormControl(""),
    src: new FormControl(''),
  });
  countImage:any;
  images:any;
  constructor( private http:HttpClient , private router:Router , private clienttecket:CustomerTicketsService,
               private gatcatser:GeneralService ,private fb:FormBuilder) { }
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
  submit(formclient:FormGroup): void{
    this.formclient.value['src'] = this.myFiles;
    const formdata = new FormData();
    this.myFiles.forEach(element => {
      formdata.append("src", element);
    });
    console.log(formclient.value['src'] );
    formdata.append("priority", this.formclient.value['priority']);
    formdata.append("ticket_category_id", this.formclient.value['ticket_category_id']);
    formdata.append("description", this.formclient.value['description']);
    formdata.append("title" , this.formclient.value['title']);
    this.clienttecket.addClientTicket( formdata).subscribe((res)=>
  {
    this.router.navigate(['/customer-support'])
  }
  )}
  getcategory(){
        this.gatcatser.getAllCategory().subscribe((res:any) =>
          {
            this.cats = res.data
          })
  }
}
