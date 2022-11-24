import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirfrieghtnewrequestComponent } from './airfrieghtnewrequest.component';

describe('AirfrieghtnewrequestComponent', () => {
  let component: AirfrieghtnewrequestComponent;
  let fixture: ComponentFixture<AirfrieghtnewrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirfrieghtnewrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirfrieghtnewrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
