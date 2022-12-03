import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreprequestsComponent } from './allreprequests.component';

describe('AllreprequestsComponent', () => {
  let component: AllreprequestsComponent;
  let fixture: ComponentFixture<AllreprequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllreprequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllreprequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
