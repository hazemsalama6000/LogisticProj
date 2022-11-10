import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualOnProgressDetalisComponent } from './individual-on-progress-detalis.component';

describe('IndividualOnProgressDetalisComponent', () => {
  let component: IndividualOnProgressDetalisComponent;
  let fixture: ComponentFixture<IndividualOnProgressDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualOnProgressDetalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualOnProgressDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
