import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionthreeeComponent } from './sectionthreee.component';

describe('SectionthreeeComponent', () => {
  let component: SectionthreeeComponent;
  let fixture: ComponentFixture<SectionthreeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionthreeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionthreeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
