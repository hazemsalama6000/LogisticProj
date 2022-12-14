import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RchatsComponent } from './rchats.component';

describe('RchatsComponent', () => {
  let component: RchatsComponent;
  let fixture: ComponentFixture<RchatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RchatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
