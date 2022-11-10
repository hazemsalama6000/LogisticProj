import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDashBoardComponent } from './company-dash-board.component';

describe('CompanyDashBoardComponent', () => {
  let component: CompanyDashBoardComponent;
  let fixture: ComponentFixture<CompanyDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
