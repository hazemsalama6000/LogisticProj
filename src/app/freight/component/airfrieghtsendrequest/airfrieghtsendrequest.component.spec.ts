import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirfrieghtsendrequestComponent } from './airfrieghtsendrequest.component';

describe('AirfrieghtsendrequestComponent', () => {
  let component: AirfrieghtsendrequestComponent;
  let fixture: ComponentFixture<AirfrieghtsendrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirfrieghtsendrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirfrieghtsendrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
