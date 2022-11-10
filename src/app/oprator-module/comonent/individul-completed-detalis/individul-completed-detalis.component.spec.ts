import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividulCompletedDetalisComponent } from './individul-completed-detalis.component';

describe('IndividulCompletedDetalisComponent', () => {
  let component: IndividulCompletedDetalisComponent;
  let fixture: ComponentFixture<IndividulCompletedDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividulCompletedDetalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividulCompletedDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
