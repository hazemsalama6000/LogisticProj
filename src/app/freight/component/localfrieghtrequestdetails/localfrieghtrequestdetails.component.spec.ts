import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalfrieghtrequestdetailsComponent } from './localfrieghtrequestdetails.component';

describe('LocalfrieghtrequestdetailsComponent', () => {
  let component: LocalfrieghtrequestdetailsComponent;
  let fixture: ComponentFixture<LocalfrieghtrequestdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalfrieghtrequestdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalfrieghtrequestdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
