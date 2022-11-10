import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiyAccountCompanyComponent } from './verifiy-account-company.component';

describe('VerifiyAccountCompanyComponent', () => {
  let component: VerifiyAccountCompanyComponent;
  let fixture: ComponentFixture<VerifiyAccountCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiyAccountCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiyAccountCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
