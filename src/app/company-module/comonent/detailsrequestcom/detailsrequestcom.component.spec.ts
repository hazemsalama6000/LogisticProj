import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsrequestcomComponent } from './detailsrequestcom.component';

describe('DetailsrequestcomComponent', () => {
  let component: DetailsrequestcomComponent;
  let fixture: ComponentFixture<DetailsrequestcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsrequestcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsrequestcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
