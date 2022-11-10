import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPssOtpComponent } from './new-pss-otp.component';

describe('NewPssOtpComponent', () => {
  let component: NewPssOtpComponent;
  let fixture: ComponentFixture<NewPssOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPssOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPssOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
