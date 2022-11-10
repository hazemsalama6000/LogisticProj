import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequetDetailsComponent } from './requet-details.component';

describe('RequetDetailsComponent', () => {
  let component: RequetDetailsComponent;
  let fixture: ComponentFixture<RequetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
