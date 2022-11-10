import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyticketDetalisComponent } from './companyticket-detalis.component';

describe('CompanyticketDetalisComponent', () => {
  let component: CompanyticketDetalisComponent;
  let fixture: ComponentFixture<CompanyticketDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyticketDetalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyticketDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
