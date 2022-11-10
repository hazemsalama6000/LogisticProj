import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendVerifiyOtpComponent } from './resend-verifiy-otp.component';

describe('ResendVerifiyOtpComponent', () => {
  let component: ResendVerifiyOtpComponent;
  let fixture: ComponentFixture<ResendVerifiyOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResendVerifiyOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendVerifiyOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
