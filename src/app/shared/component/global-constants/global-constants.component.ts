import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-global-constants',
  templateUrl: './global-constants.component.html',
  styleUrls: ['./global-constants.component.scss']
})
export class GlobalConstantsComponent implements OnInit {
  //public static baseUrl: any = 'https://ams-egypt.in/logistics/public/';
  public static baseUrl: any   = 'https://api.logesty.com/';
  public static apiPassword: string = '#as@$#$@as#';

  constructor() {
   }

  ngOnInit(): void {
  }


}
