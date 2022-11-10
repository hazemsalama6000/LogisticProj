import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualcompletedComponent } from './individualcompleted.component';

describe('IndividualcompletedComponent', () => {
  let component: IndividualcompletedComponent;
  let fixture: ComponentFixture<IndividualcompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualcompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualcompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
