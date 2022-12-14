import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaddchatComponent } from './raddchat.component';

describe('RaddchatComponent', () => {
  let component: RaddchatComponent;
  let fixture: ComponentFixture<RaddchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaddchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaddchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
