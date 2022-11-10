import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedDetalisComponent } from './completed-detalis.component';

describe('CompletedDetalisComponent', () => {
  let component: CompletedDetalisComponent;
  let fixture: ComponentFixture<CompletedDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedDetalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
