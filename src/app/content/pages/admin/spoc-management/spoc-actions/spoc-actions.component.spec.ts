import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpocActionsComponent } from './spoc-actions.component';

describe('SpocActionsComponent', () => {
  let component: SpocActionsComponent;
  let fixture: ComponentFixture<SpocActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpocActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpocActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
