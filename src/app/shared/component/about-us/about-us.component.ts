import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';
Observable
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {


  aboutUs:any[]=[]
  teamMember:any[]=[]

  constructor(private _GeneralService:GeneralService) { }

  ngOnInit(): void {
    this.getAboutUs();
    this.getTeam();
  }
getAboutUs(){
  this._GeneralService.aboutUs().subscribe((res:any)=>{

    this.aboutUs = res.data;
  })
}

getTeam(){

  this._GeneralService.team().subscribe((res:any)=>{
    this.teamMember = res.data;
  })

  
}

}
