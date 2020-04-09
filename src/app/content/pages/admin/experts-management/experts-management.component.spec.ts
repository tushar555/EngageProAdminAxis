import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsManagementComponent } from './experts-management.component';

describe('ExpertsManagementComponent', () => {
  let component: ExpertsManagementComponent;
  let fixture: ComponentFixture<ExpertsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
