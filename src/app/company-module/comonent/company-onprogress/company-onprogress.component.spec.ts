import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOnprogressComponent } from './company-onprogress.component';

describe('CompanyOnprogressComponent', () => {
  let component: CompanyOnprogressComponent;
  let fixture: ComponentFixture<CompanyOnprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyOnprogressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOnprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
