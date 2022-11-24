import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalfrieghtsendrequestComponent } from './localfrieghtsendrequest.component';

describe('LocalfrieghtsendrequestComponent', () => {
  let component: LocalfrieghtsendrequestComponent;
  let fixture: ComponentFixture<LocalfrieghtsendrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalfrieghtsendrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalfrieghtsendrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
