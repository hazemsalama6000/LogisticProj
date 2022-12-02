import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewquotationrepComponent } from './newquotationrep.component';

describe('NewquotationrepComponent', () => {
  let component: NewquotationrepComponent;
  let fixture: ComponentFixture<NewquotationrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewquotationrepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewquotationrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
