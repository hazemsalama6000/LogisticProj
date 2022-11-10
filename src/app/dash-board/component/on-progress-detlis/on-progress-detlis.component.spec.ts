import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnProgressDetlisComponent } from './on-progress-detlis.component';

describe('OnProgressDetlisComponent', () => {
  let component: OnProgressDetlisComponent;
  let fixture: ComponentFixture<OnProgressDetlisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnProgressDetlisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnProgressDetlisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
