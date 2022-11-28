import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrequestcomComponent } from './allrequestcom.component';

describe('AllrequestcomComponent', () => {
  let component: AllrequestcomComponent;
  let fixture: ComponentFixture<AllrequestcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllrequestcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllrequestcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
