import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtracksComponent } from './rtracks.component';

describe('RtracksComponent', () => {
  let component: RtracksComponent;
  let fixture: ComponentFixture<RtracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtracksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
