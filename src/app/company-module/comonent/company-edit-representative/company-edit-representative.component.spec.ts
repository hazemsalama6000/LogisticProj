import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEditRepresentativeComponent } from './company-edit-representative.component';

describe('CompanyEditRepresentativeComponent', () => {
  let component: CompanyEditRepresentativeComponent;
  let fixture: ComponentFixture<CompanyEditRepresentativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyEditRepresentativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEditRepresentativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
