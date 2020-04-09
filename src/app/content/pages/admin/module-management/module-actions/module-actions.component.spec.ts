import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleActionsComponent } from './module-actions.component';

describe('ModuleActionsComponent', () => {
  let component: ModuleActionsComponent;
  let fixture: ComponentFixture<ModuleActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
