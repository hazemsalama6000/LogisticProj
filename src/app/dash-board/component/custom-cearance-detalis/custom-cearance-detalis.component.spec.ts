import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCearanceDetalisComponent } from './custom-cearance-detalis.component';

describe('CustomCearanceDetalisComponent', () => {
  let component: CustomCearanceDetalisComponent;
  let fixture: ComponentFixture<CustomCearanceDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCearanceDetalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCearanceDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
