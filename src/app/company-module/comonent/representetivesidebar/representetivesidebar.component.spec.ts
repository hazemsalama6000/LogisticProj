import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentetivesidebarComponent } from './representetivesidebar.component';

describe('RepresentetivesidebarComponent', () => {
  let component: RepresentetivesidebarComponent;
  let fixture: ComponentFixture<RepresentetivesidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentetivesidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentetivesidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
