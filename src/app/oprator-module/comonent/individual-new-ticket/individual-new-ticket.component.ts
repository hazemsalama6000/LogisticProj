import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  formoperator = new FormGroup({
    priority : new FormControl(""),
    ticket_category_id : new FormControl(""),
    description : new FormControl(""),
    title: new FormControl(""),
    // file: new FormControl("")
  });
  constructor(private http:HttpClient , private router:Router , private operatorclient:OperatorService
    , private gatcatser:GeneralService ) { }

  ngOnInit(): void {
    this.getcategory();
  }
  submit(formoperator:FormGroup): void{

    this.operatorclient.addoperatorTicket(this.formoperator.value).subscribe((res)=>
    {

      this.router.navigate(['/individual-customer-support'])
      console.log(this.formoperator.value);

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
