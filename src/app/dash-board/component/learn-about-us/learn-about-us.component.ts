import { Component, OnInit } from '@angular/core';
import { offset } from '@popperjs/core';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-learn-about-us',
  templateUrl: './learn-about-us.component.html',
  styleUrls: ['./learn-about-us.component.scss']
})
export class LearnAboutUsComponent implements OnInit {

  topices:any[]=[]
  topicdetalis:any=[]
  id:any=''
  
  constructor(private _GeneralService:GeneralService) { }

  ngOnInit(): void {
    this.getTobic();
  }

  getTobic(){
    this._GeneralService.topics().subscribe((res:any)=>{
      this.getid(res.data[0].id);
      this.topices = res.data
    
    })
  }
  getid(id:any){
    this.id = id
    this._GeneralService.topicsDetalis(this.id).subscribe((res:any)=>{
        this.topicdetalis = res.data

    })
  }
 


}
