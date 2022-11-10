import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiyAccountOpratorComponent } from './verifiy-account-oprator.component';

describe('VerifiyAccountOpratorComponent', () => {
  let component: VerifiyAccountOpratorComponent;
  let fixture: ComponentFixture<VerifiyAccountOpratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiyAccountOpratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiyAccountOpratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
