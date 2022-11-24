import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeafrieghtrequestdetailsComponent } from './seafrieghtrequestdetails.component';

describe('SeafrieghtrequestdetailsComponent', () => {
  let component: SeafrieghtrequestdetailsComponent;
  let fixture: ComponentFixture<SeafrieghtrequestdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeafrieghtrequestdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeafrieghtrequestdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
