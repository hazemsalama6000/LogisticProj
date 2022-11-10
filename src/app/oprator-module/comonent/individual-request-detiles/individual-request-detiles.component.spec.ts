import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualRequestDetilesComponent } from './individual-request-detiles.component';

describe('IndividualRequestDetilesComponent', () => {
  let component: IndividualRequestDetilesComponent;
  let fixture: ComponentFixture<IndividualRequestDetilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualRequestDetilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualRequestDetilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
