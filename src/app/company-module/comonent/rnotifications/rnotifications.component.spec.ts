import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnotificationsComponent } from './rnotifications.component';

describe('RnotificationsComponent', () => {
  let component: RnotificationsComponent;
  let fixture: ComponentFixture<RnotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RnotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RnotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
