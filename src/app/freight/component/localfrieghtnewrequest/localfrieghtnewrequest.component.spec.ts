import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalfrieghtnewrequestComponent } from './localfrieghtnewrequest.component';

describe('LocalfrieghtnewrequestComponent', () => {
  let component: LocalfrieghtnewrequestComponent;
  let fixture: ComponentFixture<LocalfrieghtnewrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalfrieghtnewrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalfrieghtnewrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
