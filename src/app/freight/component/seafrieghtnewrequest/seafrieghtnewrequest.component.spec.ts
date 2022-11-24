import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafrieghtnewrequestComponent } from './seafrieghtnewrequest.component';

describe('SeafrieghtnewrequestComponent', () => {
  let component: SeafrieghtnewrequestComponent;
  let fixture: ComponentFixture<SeafrieghtnewrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeafrieghtnewrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeafrieghtnewrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
