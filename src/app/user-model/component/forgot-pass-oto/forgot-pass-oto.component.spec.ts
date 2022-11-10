import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassOtoComponent } from './forgot-pass-oto.component';

describe('ForgotPassOtoComponent', () => {
  let component: ForgotPassOtoComponent;
  let fixture: ComponentFixture<ForgotPassOtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPassOtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassOtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
