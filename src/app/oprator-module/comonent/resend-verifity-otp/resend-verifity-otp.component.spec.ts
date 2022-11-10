import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendVerifityOtpComponent } from './resend-verifity-otp.component';

describe('ResendVerifityOtpComponent', () => {
  let component: ResendVerifityOtpComponent;
  let fixture: ComponentFixture<ResendVerifityOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResendVerifityOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendVerifityOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
