import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsActionsComponent } from './experts-actions.component';

describe('ExpertsActionsComponent', () => {
  let component: ExpertsActionsComponent;
  let fixture: ComponentFixture<ExpertsActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
