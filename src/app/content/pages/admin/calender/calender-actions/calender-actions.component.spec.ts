import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderActionsComponent } from './calender-actions.component';

describe('CalenderActionsComponent', () => {
  let component: CalenderActionsComponent;
  let fixture: ComponentFixture<CalenderActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
