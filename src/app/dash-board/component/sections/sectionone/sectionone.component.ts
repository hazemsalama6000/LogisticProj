import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sectionone',
  templateUrl: './sectionone.component.html',
  styleUrls: ['./sectionone.component.scss']
})
export class SectiononeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hide():void{
    // this.hide(); // whenever you need to hide an element
    // this.el.nativeElement.style.display='none';
    
    // this.nativeElement.style.display = 'none';
  }
}
