import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoucementActionsComponent } from './annoucement-actions.component';

describe('AnnoucementActionsComponent', () => {
  let component: AnnoucementActionsComponent;
  let fixture: ComponentFixture<AnnoucementActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoucementActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoucementActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
