import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafrieghtsendrequestComponent } from './seafrieghtsendrequest.component';

describe('SeafrieghtsendrequestComponent', () => {
  let component: SeafrieghtsendrequestComponent;
  let fixture: ComponentFixture<SeafrieghtsendrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeafrieghtsendrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeafrieghtsendrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
