import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpratorRegisterComponent } from './oprator-register.component';

describe('OpratorRegisterComponent', () => {
  let component: OpratorRegisterComponent;
  let fixture: ComponentFixture<OpratorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpratorRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpratorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
