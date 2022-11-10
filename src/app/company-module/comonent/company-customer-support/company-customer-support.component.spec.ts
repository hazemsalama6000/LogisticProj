import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCustomerSupportComponent } from './company-customer-support.component';

describe('CompanyCustomerSupportComponent', () => {
  let component: CompanyCustomerSupportComponent;
  let fixture: ComponentFixture<CompanyCustomerSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCustomerSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCustomerSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
