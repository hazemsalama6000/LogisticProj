import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-sectionone',
  templateUrl: './sectionone.component.html',
  styleUrls: ['./sectionone.component.scss']
})
export class SectiononeComponent implements OnInit {

  constructor(public translate: TranslateService , private _GeneralService:GeneralService) { }

  ngOnInit(): void {
  }
  hide():void{
    // this.hide(); // whenever you need to hide an element
    // this.el.nativeElement.style.display='none';

    // this.nativeElement.style.display = 'none';
  }
}
