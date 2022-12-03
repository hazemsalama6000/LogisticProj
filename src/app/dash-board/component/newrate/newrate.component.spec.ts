import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrateComponent } from './newrate.component';

describe('NewrateComponent', () => {
  let component: NewrateComponent;
  let fixture: ComponentFixture<NewrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
