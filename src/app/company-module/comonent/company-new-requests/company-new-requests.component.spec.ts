import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyNewRequestsComponent } from './company-new-requests.component';

describe('CompanyNewRequestsComponent', () => {
  let component: CompanyNewRequestsComponent;
  let fixture: ComponentFixture<CompanyNewRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyNewRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyNewRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
