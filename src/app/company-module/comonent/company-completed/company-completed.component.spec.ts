import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCompletedComponent } from './company-completed.component';

describe('CompanyCompletedComponent', () => {
  let component: CompanyCompletedComponent;
  let fixture: ComponentFixture<CompanyCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
