import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAddRepresentativeComponent } from './company-add-representative.component';

describe('CompanyAddRepresentativeComponent', () => {
  let component: CompanyAddRepresentativeComponent;
  let fixture: ComponentFixture<CompanyAddRepresentativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAddRepresentativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAddRepresentativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
