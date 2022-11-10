import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCustomerSupportComponent } from './individual-customer-support.component';

describe('IndividualCustomerSupportComponent', () => {
  let component: IndividualCustomerSupportComponent;
  let fixture: ComponentFixture<IndividualCustomerSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualCustomerSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCustomerSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
