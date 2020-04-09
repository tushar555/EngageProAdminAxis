import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeActionsComponent } from './tree-actions.component';

describe('TreeActionsComponent', () => {
  let component: TreeActionsComponent;
  let fixture: ComponentFixture<TreeActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
