import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientqouteComponent } from './clientqoute.component';

describe('ClientqouteComponent', () => {
  let component: ClientqouteComponent;
  let fixture: ComponentFixture<ClientqouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientqouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientqouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
