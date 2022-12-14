import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RratesComponent } from './rrates.component';

describe('RratesComponent', () => {
  let component: RratesComponent;
  let fixture: ComponentFixture<RratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RratesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
