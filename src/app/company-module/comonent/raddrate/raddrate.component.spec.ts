import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaddrateComponent } from './raddrate.component';

describe('RaddrateComponent', () => {
  let component: RaddrateComponent;
  let fixture: ComponentFixture<RaddrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaddrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaddrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
