import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeadetailsComponent } from './seadetails.component';

describe('SeadetailsComponent', () => {
  let component: SeadetailsComponent;
  let fixture: ComponentFixture<SeadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeadetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
