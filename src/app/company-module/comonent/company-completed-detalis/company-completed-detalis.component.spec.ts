import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCompletedDetalisComponent } from './company-completed-detalis.component';

describe('CompanyCompletedDetalisComponent', () => {
  let component: CompanyCompletedDetalisComponent;
  let fixture: ComponentFixture<CompanyCompletedDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCompletedDetalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCompletedDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
