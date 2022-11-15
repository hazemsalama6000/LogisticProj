import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {

  question:any[]=[];
  questionDetalis:any=[]
  id:any =''

  constructor(private _GeneralService:GeneralService) { }

  ngOnInit(): void {
    this.getQuestionCategory()
  }
  getQuestionCategory(){
      this._GeneralService.questionCategory().subscribe((res:any)=>{
      this.getid(res.data[0].id);
      this.question = res.data
    })
    }
    getid(id:any){
      this.id = id
      this._GeneralService.questions(this.id).subscribe((res:any)=>{
      this.questionDetalis = res.data
    })
    }


}
