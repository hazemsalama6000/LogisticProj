import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationsrepComponent } from './quotationsrep.component';

describe('QuotationsrepComponent', () => {
  let component: QuotationsrepComponent;
  let fixture: ComponentFixture<QuotationsrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationsrepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationsrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
