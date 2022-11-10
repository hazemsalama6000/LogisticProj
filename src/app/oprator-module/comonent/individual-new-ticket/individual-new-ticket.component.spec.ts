import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualNewTicketComponent } from './individual-new-ticket.component';

describe('IndividualNewTicketComponent', () => {
  let component: IndividualNewTicketComponent;
  let fixture: ComponentFixture<IndividualNewTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualNewTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualNewTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
