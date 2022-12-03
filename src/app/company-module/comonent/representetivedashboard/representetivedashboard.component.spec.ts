import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentetivedashboardComponent } from './representetivedashboard.component';

describe('RepresentetivedashboardComponent', () => {
  let component: RepresentetivedashboardComponent;
  let fixture: ComponentFixture<RepresentetivedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentetivedashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentetivedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
