import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirfrieghtrequestdetailsComponent } from './airfrieghtrequestdetails.component';

describe('AirfrieghtrequestdetailsComponent', () => {
  let component: AirfrieghtrequestdetailsComponent;
  let fixture: ComponentFixture<AirfrieghtrequestdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirfrieghtrequestdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirfrieghtrequestdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
