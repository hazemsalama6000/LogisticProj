import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualOnProgressComponent } from './individual-on-progress.component';

describe('IndividualOnProgressComponent', () => {
  let component: IndividualOnProgressComponent;
  let fixture: ComponentFixture<IndividualOnProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualOnProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualOnProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
