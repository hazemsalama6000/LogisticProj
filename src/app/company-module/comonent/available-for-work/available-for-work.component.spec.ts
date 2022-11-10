import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableForWorkComponent } from './available-for-work.component';

describe('AvailableForWorkComponent', () => {
  let component: AvailableForWorkComponent;
  let fixture: ComponentFixture<AvailableForWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableForWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableForWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
