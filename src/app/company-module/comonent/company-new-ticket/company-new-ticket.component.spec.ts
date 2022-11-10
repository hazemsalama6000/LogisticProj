import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyNewTicketComponent } from './company-new-ticket.component';

describe('CompanyNewTicketComponent', () => {
  let component: CompanyNewTicketComponent;
  let fixture: ComponentFixture<CompanyNewTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyNewTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyNewTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
