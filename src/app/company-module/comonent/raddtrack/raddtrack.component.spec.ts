import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaddtrackComponent } from './raddtrack.component';

describe('RaddtrackComponent', () => {
  let component: RaddtrackComponent;
  let fixture: ComponentFixture<RaddtrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaddtrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaddtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
