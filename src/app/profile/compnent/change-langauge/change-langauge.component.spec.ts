import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLangaugeComponent } from './change-langauge.component';

describe('ChangeLangaugeComponent', () => {
  let component: ChangeLangaugeComponent;
  let fixture: ComponentFixture<ChangeLangaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLangaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLangaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
