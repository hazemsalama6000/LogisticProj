import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewquotationComponent } from './newquotation.component';

describe('NewquotationComponent', () => {
  let component: NewquotationComponent;
  let fixture: ComponentFixture<NewquotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewquotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewquotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
