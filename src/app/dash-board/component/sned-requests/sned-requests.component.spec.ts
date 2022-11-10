import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnedRequestsComponent } from './sned-requests.component';

describe('SnedRequestsComponent', () => {
  let component: SnedRequestsComponent;
  let fixture: ComponentFixture<SnedRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnedRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
