import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualNewRequestsComponent } from './individual-new-requests.component';

describe('IndividualNewRequestsComponent', () => {
  let component: IndividualNewRequestsComponent;
  let fixture: ComponentFixture<IndividualNewRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualNewRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualNewRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
