import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsendComponent } from './customsend.component';

describe('CustomsendComponent', () => {
  let component: CustomsendComponent;
  let fixture: ComponentFixture<CustomsendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomsendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomsendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
